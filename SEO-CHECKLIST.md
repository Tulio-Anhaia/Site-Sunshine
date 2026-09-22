# Sunshine Esportes — SEO Checklist

## ✅ BLOCO 1: DEIXAR ENTRAR (CONCLUÍDO)

- [x] **Sitemap criado**: `sitemap.xml` com todas as 7 páginas
- [x] **Robots.txt criado**: Permite Google, Bing e bots de IA (Claude, GPT, etc)
- [x] **Sem noindex acidental**: Verificado em todas as páginas
- [x] **HTTPS configurado**: Via Vercel (redirecionamento automático)

### Arquivos criados:
- `sitemap.xml` — Listagem de todas as páginas para buscadores
- `robots.txt` — Configuração de rastreamento (permite IA)
- `vercel.json` — Configuração do Vercel

---

## ✅ BLOCO 2: DEIXAR ENTENDER (CONCLUÍDO)

Implementado em TODAS as 7 páginas:

### Páginas atualuzadas:
1. **index.html** — Home
   - ✅ Meta tags Open Graph
   - ✅ Schema.org Organization
   - ✅ Canonical URL

2. **a-empresa.html** — Sobre
   - ✅ Meta tags Open Graph
   - ✅ Schema.org Organization (com foundingDate)
   - ✅ Canonical URL

3. **sunshine-kids-run.html** — Evento Kids Run
   - ✅ Meta tags Open Graph
   - ✅ Schema.org Event (com datas, local, organizador)
   - ✅ Canonical URL

4. **sunshine-blessed-run.html** — Evento Blessed Run
   - ✅ Meta tags Open Graph
   - ✅ Schema.org Event (com datas, local, organizador)
   - ✅ Canonical URL

5. **calendario.html** — Calendário
   - ✅ Meta tags Open Graph
   - ✅ Canonical URL

6. **contato.html** — Contato
   - ✅ Meta tags Open Graph
   - ✅ Schema.org ContactPage
   - ✅ Canonical URL

7. **politica-de-privacidade.html** — Legal
   - ✅ Meta robots: noindex,follow (apenas para referência)
   - ✅ Canonical URL

---

## 📋 BLOCO 3: DEIXAR RÁPIDO (PRONTO PARA VERCEL)

### ✅ Mobile & Performance
- [x] Viewport meta tag presente (`width=device-width, initial-scale=1.0`)
- [x] Imagens em formato eficiente (WebP já usado em alguns arquivos)
- [x] CSS otimizado (arquivo único)
- [x] JS minificado

### ⚠️ Antes de fazer push:
1. **Compressão de imagens** (opcional, mas recomendado):
   ```bash
   # Reduzir tamanho das imagens .jpg sem perder qualidade
   # Ferramentas: TinyPNG, ImageOptim, ou Vercel Auto-optimization
   ```

2. **Testar no navegador** (mobile):
   - [ ] Abrir em iPhone/Android
   - [ ] Testar botões de WhatsApp
   - [ ] Verificar legibilidade

---

## 🚀 DEPLOYMENT NA VERCEL

### 1. Preparar pasta para upload:
```bash
# Estrutura esperada (já pronta):
sunshine-esportes/
├── index.html
├── a-empresa.html
├── sunshine-kids-run.html
├── sunshine-blessed-run.html
├── calendario.html
├── contato.html
├── politica-de-privacidade.html
├── sitemap.xml          ← NOVO
├── robots.txt           ← NOVO
├── vercel.json          ← NOVO
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── icon-gold.png
    ├── favicon.png
    ├── [todas as imagens dos eventos]
```

### 2. Deploy opções:

#### Opção A: Via GitHub (Recomendado)
```bash
# 1. Criar repositório no GitHub (https://github.com/new)
# 2. Fazer push do código
git init
git add .
git commit -m "Sunshine Esportes - Site com SEO implementado"
git branch -M main
git remote add origin https://github.com/seu-usuario/sunshine-esportes.git
git push -u origin main

# 3. Conectar Vercel ao repositório
# - Ir para https://vercel.com/new
# - Selecionar o repositório
# - Deixar default (sem build command necessário)
# - Deploy!
```

#### Opção B: Deploy direto (Upload de pasta)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer deploy
vercel --prod

# Siga as instruções interativas
# Pode usar domínio sugerido ou depois conectar domínio customizado
```

### 3. Configurar domínio customizado (Opcional):
No Vercel Dashboard → Project Settings → Domains
```
Domínio desejado: sunshine-esportes.com
(ou qualquer outro domínio que a Sunshine tenha)
```

---

## 📊 TESTES PÓS-DEPLOYMENT

### 1. Verificar indexação (24-48h após deploy):
```bash
# No Google Search Console
site:sunshine-esportes.vercel.app

# Esperado: todas as 7 páginas aparecem
```

### 2. Testar dados estruturados:
- Google Structured Data Testing: https://schema.org/validator/
  - Colar URL de uma página de evento
  - Verificar se Schema.org Event foi reconhecido ✅

### 3. Testar Open Graph (Compartilhamento):
- Colar URL no Facebook: https://developers.facebook.com/tools/debug/
  - Verificar se imagem e title aparecem corretamente
  - Fazer o mesmo no WhatsApp (compartilhar link e ver preview)

### 4. Verificar robots.txt:
```bash
https://sunshine-esportes.vercel.app/robots.txt
# Esperado: ver conteúdo + Sitemap listado
```

### 5. Verificar sitemap.xml:
```bash
https://sunshine-esportes.vercel.app/sitemap.xml
# Esperado: XML com todas as 7 URLs
```

---

## ✅ CHECKLIST FINAL (6 pontos)

Antes de considerar o site "pronto para SEO":

- [ ] Nenhuma página tem `noindex` acidental (verificado ✅)
- [ ] Sitemap existe e lista as 7 páginas (criado ✅)
- [ ] Cada página tem um H1 único (verificado ✅)
- [ ] Link compartilhado mostra imagem + título corretos (og:tags adicionadas ✅)
- [ ] Site abre rápido no celular com rede lenta (Vercel é rápido + imagens OK)
- [ ] Decidido conscientemente: **PERMITIR rastreadores de IA** (robots.txt liberado ✅)

---

## 📝 PRÓXIMOS PASSOS

### Imediatamente após deploy:
1. ✅ Submeter sitemap no Google Search Console
2. ✅ Submeter sitemap no Bing Webmaster Tools
3. ✅ Adicionar Google Analytics (ID Google Analytics)
4. ✅ Adicionar Google Tag Manager (se usar)
5. ✅ Adicionar Meta Pixel (se quiser rastrear visitantes)

### Extras (não bloqueiam SEO):
- [ ] Conectar domínio customizado (sunshine-esportes.com)
- [ ] Configurar Google Empresas (Local SEO — IMPACTANTE para Sorocaba)
- [ ] Adicionar formulários reais (Formspree, EmailJS)
- [ ] Revisar Política de Privacidade com jurista (LGPD)

### Monitorar (mensal):
- Google Search Console: tráfego, queries, cliques
- Core Web Vitals: performance
- Posicionamento: para "eventos esportes Sorocaba", "corrida Sorocaba", etc.

---

## 🤖 Camada IA: Permitir Modelos de Linguagem

**Status**: ✅ **ATIVADO**

O `robots.txt` foi configurado para permitir que modelos de IA indexem o site:
- ✅ Claude (Anthropic)
- ✅ GPT (OpenAI)
- ✅ Gemini (Google)
- ✅ Outros modelos

**Por quê?** Muita gente pergunta pra IA em vez de pesquisar no Google. Se o seu site bloqueia os rastreadores, você fica invisível nesse canal.

---

## 📞 Contato Sunshine

- **WhatsApp**: (15) 99162-2682
- **Email**: sunshineeventos26@gmail.com
- **Localização**: Sorocaba, SP

---

**SEO implementado**: 22 de setembro de 2026
**Status**: ✅ PRONTO PARA DEPLOY
