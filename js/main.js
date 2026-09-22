/* Sunshine Desenvolvimento Esportivo — interações do site
   Vanilla JS, sem dependências externas. */
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---------- Marcar link ativo no menu conforme a página atual ---------- */
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });

  /* ---------- Carrossel do topo (hero) ---------- */
  var track = document.querySelector('.hero-track');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);
    var total = slides.length;
    var index = 0;
    var dotsWrap = document.querySelector('.hero-dots');
    var autoplayMs = 6000;
    var timer;

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        if (i === 0) b.classList.add('active');
        b.setAttribute('aria-label', 'Ir para slide ' + (i + 1));
        b.addEventListener('click', function () { goTo(i); restart(); });
        dotsWrap.appendChild(b);
      });
    }

    function update() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
          d.classList.toggle('active', i === index);
        });
      }
    }
    function goTo(i) { index = (i + total) % total; update(); }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, autoplayMs); }

    var prevBtn = document.querySelector('.hero-arrow.prev');
    var nextBtn = document.querySelector('.hero-arrow.next');
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });

    update();
    restart();

    var heroEl = document.querySelector('.hero');
    if (heroEl) {
      heroEl.addEventListener('mouseenter', function () { clearInterval(timer); });
      heroEl.addEventListener('mouseleave', restart);
    }
  }

  /* ---------- Filtro de eventos em destaque (index / calendário) ---------- */
  var filterBar = document.querySelector('.filters');
  if (filterBar) {
    var buttons = Array.prototype.slice.call(filterBar.querySelectorAll('button'));
    var items = document.querySelectorAll('[data-sport]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var sport = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          var match = sport === 'all' || item.getAttribute('data-sport') === sport;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Animação simples de reveal ao rolar a página ----------
     Progressive enhancement: content is visible by default (see CSS).
     Only when IntersectionObserver is available do we opt into the
     hide-then-fade-in effect, and only for elements currently below the
     viewport — anything already on screen is marked "in" immediately so
     there is never a frame (or a slow/broken script) where content is
     stuck invisible. */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var alreadyVisible = rect.top < window.innerHeight * 0.95;
      if (alreadyVisible) {
        el.classList.add('in');
      } else {
        io.observe(el);
      }
    });
    document.documentElement.classList.add('js-ready');
  }

  /* ---------- Formulário de contato (demo, sem back-end) ---------- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Mensagem pronta para envio — conecte este formulário a um serviço de e-mail (ex: Formspree, EmailJS) ou back-end para recebê-la de verdade.';
        feedback.style.display = 'block';
      }
      form.reset();
    });
  }

  /* ---------- Formulário de pré-inscrição (demo, sem back-end) ---------- */
  var regForm = document.querySelector('#inscricao-form');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var feedback = regForm.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Solicitação pronta — conecte este formulário a um serviço de e-mail/planilha (ex: Formspree, Google Forms) para recebê-la de verdade. Enquanto isso, confirme sua vaga direto pelo WhatsApp.';
        feedback.style.display = 'block';
      }
      regForm.reset();
    });
  }

  /* ---------- Seletor de distância / kit (abas) ---------- */
  document.querySelectorAll('[data-tab-group]').forEach(function (group) {
    var groupId = group.getAttribute('data-tab-group');
    var buttons = document.querySelectorAll('[data-tab-btn="' + groupId + '"]');
    var panels = document.querySelectorAll('[data-tab-panel="' + groupId + '"]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var val = btn.getAttribute('data-tab-value');
        var target = document.querySelector('[data-tab-panel="' + groupId + '"][data-tab-value="' + val + '"]');
        if (target) target.classList.add('active');
      });
    });
  });

  /* ---------- Botões "Inscreva-se": rolam até o formulário e pré-selecionam a distância ---------- */
  document.querySelectorAll('[data-select-distance]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var val = btn.getAttribute('data-select-distance');
      var select = document.getElementById('distancia-select');
      if (select) select.value = val;
      var target = document.getElementById('form-inscricao');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Modais (ex.: tabela de medidas) ---------- */
  document.querySelectorAll('[data-open-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var modal = document.getElementById(trigger.getAttribute('data-open-modal'));
      if (modal) modal.classList.add('open');
    });
  });
  document.querySelectorAll('.modal-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var overlay = btn.closest('.modal-overlay');
      if (overlay) overlay.classList.remove('open');
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(function (o) { o.classList.remove('open'); });
    }
  });
});
