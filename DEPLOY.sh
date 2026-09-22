#!/bin/bash

# Sunshine Esportes - Deploy Script para Vercel
# Este script faz o deploy automático na Vercel

echo "🚀 Sunshine Esportes - Deploy na Vercel"
echo "========================================"

# Verificar se vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm i -g vercel
fi

echo ""
echo "📍 Fazendo deploy..."
echo "Opções:"
echo "1. Deploy com domínio sugerido (sunshine-esportes-xyz.vercel.app)"
echo "2. Deploy produção (se já configurado)"
echo ""

# Fazer deploy
vercel --prod

echo ""
echo "✅ Deploy completo!"
echo ""
echo "Próximos passos:"
echo "1. Ir para https://vercel.com/dashboard"
echo "2. Selecionar projeto 'sunshine-esportes'"
echo "3. Settings → Domains → Adicionar domínio customizado"
echo "4. Apontar DNS para Vercel (instruções aparecem)"
echo ""
echo "📊 Testes SEO:"
echo "- Google Search Console: site:seu-dominio.com"
echo "- Structured Data: https://schema.org/validator/"
echo "- Facebook Debugger: https://developers.facebook.com/tools/debug/"
