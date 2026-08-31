# Sunshine Esportes — Site Institucional e Comercial

Site em **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**
para a Sunshine Desenvolvimento Esportivo LTDA.

> ⚠️ Este projeto contém marcadores `[INFORMAÇÃO PENDENTE]`,
> `[INSERIR LINK DE INSCRIÇÃO]`, `[CONFIRMAR DATA]`, etc. Eles existem de
> propósito — não representam bugs. Substitua-os apenas por informações
> oficiais confirmadas pela Sunshine antes da publicação.

---

## 1. Como executar localmente

Pré-requisitos: Node.js 18.18+ (recomendado 20 LTS) e npm.

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env.local
# edite .env.local com os valores reais (ver seção 2)

# 3. Rodar em modo desenvolvimento
npm run dev
# abra http://localhost:3000

# 4. Build de produção (opcional, para testar antes do deploy)
npm run build
npm run start
```

---

## 2. Configurar variáveis de ambiente

Arquivo `.env.local` (nunca commitar):

| Variável | Descrição | Status |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL de produção do site | Já definida: `https://sunshineesportes.com.br` |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics (GA4) | **[A CONFIGURAR]** |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Código de verificação do Search Console | **[A CONFIGURAR]** |
| `FORM_SUBMISSION_ENDPOINT` | Endpoint para onde os formulários enviarão dados (CRM, e-mail transacional, webhook) | **[A CONFIGURAR]** |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp usado no botão flutuante | Validar antes de publicar — ver nota em `lib/data.ts` |

Os formulários (`ContactForm.tsx` e `SponsorForm.tsx`) atualmente **simulam**
o envio (não há integração real ativa). Para ativar de verdade:
1. Escolha um serviço (ex: Resend, SendGrid, um webhook para seu CRM, ou uma
   API Route própria em `app/api/contato/route.ts`).
2. Substitua o bloco `// [A CONFIGURAR]` dentro de cada componente por uma
   chamada `fetch()` real para o endpoint escolhido.

---

## 3. Como inserir as imagens oficiais

Todas as imagens estão referenciadas por nome de arquivo dentro dos
componentes/páginas, mesmo antes de existirem — isso evita retrabalho depois.
Basta salvar os arquivos finais com os nomes abaixo dentro de `/public/images/`:

| Arquivo esperado | Onde é usado |
|---|---|
| `hero-evento.webp` | Hero da home (`HeroSection.tsx`) |
| `sunshine-kids-run.webp` | Card e página do evento |
| `sunshine-blessed-run.webp` | Card e página do evento |
| `flash.webp` / ilustração do Flash | `FlashSection.tsx`, página `/flash` |
| `equipe.webp` | Seção "Sobre" da home |
| `eventos-realizados.webp` | Página `/eventos-realizados` |

Formatos recomendados: **WebP ou AVIF**, com largura máxima adequada ao uso
(hero: ~1600px; cards: ~800px) para manter o site rápido. Sempre que possível
mantenha a proporção 16:9 para não quebrar o layout dos cards.

Os logotipos oficiais já estão em uso:
`/public/images/sunshine-logo.png` e `sunshine-logo-transparente.png`.

**Favicon**: hoje usa o logotipo completo como fallback. Gere um recorte
quadrado apenas do símbolo (sol + corredor) em 512×512px e salve como
`/public/favicon.png`, depois atualize `app/layout.tsx` → `metadata.icons`.

---

## 4. Como trocar os textos

Praticamente todo o conteúdo textual (dados da empresa, eventos, serviços,
cotas de patrocínio, itens pendentes) vem de **um único arquivo**:

```
/lib/data.ts
```

Edite os campos ali — as páginas e componentes são atualizados
automaticamente, pois todos consomem esse arquivo. Não é necessário editar
cada página individualmente para trocar telefone, endereço, datas, etc.

Textos específicos de cada página (parágrafos institucionais, FAQ) ficam
diretamente nos arquivos `app/*/page.tsx` correspondentes.

---

## 5. Como configurar o domínio

Na Vercel (ver seção 6):
1. Acesse o projeto → **Settings → Domains**.
2. Adicione `sunshineesportes.com.br` (e `www.sunshineesportes.com.br`, se
   desejar redirecionamento).
3. Configure os registros DNS indicados pela Vercel no provedor onde o
   domínio foi registrado (geralmente um registro `A` ou `CNAME`).
4. Aguarde a propagação (pode levar até 24h) e a emissão automática do
   certificado SSL pela Vercel.

---

## 6. Como publicar na Vercel

```bash
# opção A — via CLI
npm install -g vercel
vercel login
vercel        # deploy de preview
vercel --prod # deploy de produção
```

Opção B — via painel web:
1. Suba este projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Framework Preset: **Next.js** (detectado automaticamente).
4. Adicione as variáveis de ambiente da seção 2 em **Settings →
   Environment Variables**.
5. Clique em **Deploy**.

---

## 7. Como configurar o Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Adicione a propriedade `https://sunshineesportes.com.br`.
3. Verifique a propriedade (método recomendado: registro DNS TXT, ou meta
   tag — se usar meta tag, cole o código em `NEXT_PUBLIC_GSC_VERIFICATION`
   e adicione a tag em `app/layout.tsx`).
4. Envie o sitemap: `https://sunshineesportes.com.br/sitemap.xml`.

---

## 8. Como configurar o Google Analytics

1. Crie uma propriedade GA4 em [analytics.google.com](https://analytics.google.com).
2. Copie o **ID de medição** (formato `G-XXXXXXX`).
3. Preencha `NEXT_PUBLIC_GA_ID` no `.env.local` (e nas variáveis de ambiente
   da Vercel).
4. Adicione o script de carregamento do GA4 em `app/layout.tsx` usando
   `next/script` (não incluído por padrão nesta versão, para não carregar
   analytics sem consentimento de cookies — integrar de forma condicional
   ao aceite no `CookieBanner.tsx`).

---

## 9. Como verificar sitemap e robots.txt

Depois do deploy, confirme que os arquivos são gerados automaticamente
(o Next.js os gera dinamicamente a partir de `app/sitemap.ts` e
`app/robots.ts`):

- `https://sunshineesportes.com.br/sitemap.xml`
- `https://sunshineesportes.com.br/robots.txt`

---

## 10. Estrutura de pastas

```
sunshine-site/
├── app/
│   ├── layout.tsx            # layout raiz, SEO global, Organization schema
│   ├── page.tsx               # Home
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx          # 404 customizada
│   ├── sobre/ servicos/ eventos/ eventos/sunshine-kids-run/
│   ├── eventos/sunshine-blessed-run-2026/ patrocinadores/ flash/
│   ├── eventos-realizados/ noticias/ galeria/ resultados/ faq/
│   ├── contato/ midia-kit/
│   └── privacidade/ termos/ cookies/ cancelamento/ uso-de-imagem/
├── components/                # 18 componentes reutilizáveis
├── lib/data.ts                 # fonte única de dados oficiais
├── public/images/              # logotipos oficiais + placeholders a preencher
├── tailwind.config.ts          # paleta oficial derivada do logo
└── .env.example
```

---

## 11. Limitações desta primeira versão (propositais)

- Formulários **não enviam dados de verdade** ainda (endpoint a configurar).
- Não há CMS: conteúdo editável via `lib/data.ts` e arquivos `.tsx`.
- Galeria, notícias e eventos realizados estão vazios aguardando material
  autorizado.
- Analytics e Search Console não estão ativos (aguardando IDs).
- Área de resultados/busca por número de peito é apenas uma estrutura
  preparada — depende de integração futura com cronometragem.

Essas limitações são intencionais, conforme a regra do briefing de nunca
apresentar dados ou integrações fictícias como se fossem reais.
