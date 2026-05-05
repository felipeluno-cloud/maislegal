# maislegal-site

Site institucional e de conversão da **+legal_**, plataforma de gestão de contratos para os dois lados.

## Como rodar localmente

Pré-requisitos: **Node.js 20 ou superior** e **npm**.

```bash
# 1. instalar dependências (primeira vez apenas, demora 1-2 min)
npm install

# 2. iniciar o servidor de desenvolvimento
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

O Next.js tem hot-reload: cada vez que um ficheiro é salvo, o navegador atualiza automaticamente.

## Comandos disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento na porta 3000 |
| `npm run build` | Gera build de produção em `.next/` |
| `npm run start` | Inicia servidor de produção (após build) |
| `npm run lint` | Roda o linter |

## Estrutura do projeto

```
maislegal-site/
├── src/
│   ├── app/             # Páginas (Next.js App Router)
│   ├── components/      # Componentes reutilizáveis
│   └── lib/             # Utilitários (vazio por enquanto)
├── public/logos/        # Logos da +legal_
├── docs/                # Documentação interna do projeto
│   ├── sitemap.md       # Sitemap completo + spec de cada página
│   └── knowledge/       # Knowledge MDs do projeto +legal_
├── CLAUDE.md            # Contexto para Claude (Cowork ou Claude Code)
├── tailwind.config.ts   # Tokens de design (cores, fontes)
└── package.json
```

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Lucide React** (ícones outline)
- **Google Fonts:** Barlow (títulos), Work Sans (corpo), JetBrains Mono (labels)

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home |
| `/como-funciona` | 3 passos + ciclo de vida do contrato |
| `/funcionalidades` | 6 blocos do produto + filtro |
| `/integracoes` | Parceiros + roadmap + objeções |
| `/para-operacoes` | Landing dedicada · Diretora de Operações |
| `/para-pmes` | Landing dedicada · Sócia-fundadora de PME |
| `/para-advogados` | Landing dedicada · Advogados consultivos e contenciosos |
| `/resolucao-de-disputas` | Integração com a câmara SOMA |
| `/precos` | Tabela de planos + FAQ |
| `/sobre` | Fundadores + missão + princípios |
| `/blog` | Hub de artigos + páginas individuais |
| `/early-access` | Landing de captura + benefícios + formulário |
| `/privacidade`, `/termos` | Páginas legais (stub) |

## Trabalhando com Claude

Este projeto inclui um `CLAUDE.md` na raiz que dá contexto completo para Claude Code (CLI) ou Cowork mode (desktop).

**Para iterar com Claude Code:**
1. Instalar Claude Code se ainda não tem: https://docs.claude.com/claude-code
2. No terminal, dentro desta pasta, rodar `claude`
3. Claude lê o `CLAUDE.md` automaticamente e tem todo o contexto

**Pontos a saber:**
- Todo copy aprovado está em `docs/knowledge/ml-site.md`
- Regras de voz (palavras banidas, tom) em `docs/knowledge/ml-voz-e-tom.md`
- Personas detalhadas em `docs/knowledge/ml-personas.md`
- Posicionamento e mensagens em `docs/knowledge/ml-posicionamento.md`

## Decisões em aberto

3 decisões bloqueantes precisam de resposta antes do go-live (ver `docs/knowledge/ml-decisoes-abertas.md` e `CLAUDE.md` para a lista completa):

1. **Domínio:** maislegal.tech ou novo?
2. **Early Access:** real waitlist ou produto disponível?
3. **Tipografia:** stack atual (Barlow + Work Sans) é definitivo?

## Site de referência

O site da **+legal_** ecoa visualmente o site da câmara SOMA (https://somalegal.tech). Mesma família de fontes, mesmo ritmo de seções, mesmo padrão de cards. A única diferença: o accent amber-700 da SOMA vira o nosso `brand` (`#1E3A5F`, azul).
