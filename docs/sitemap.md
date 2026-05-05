# +legal_ · Arquitetura do Site · Sitemap e Especificação

**Versão:** v1 (29 Abril 2026)
**Fonte:** Knowledge MDs do +legal_ + sessões de fundadores Abr 2026
**Decisões de arquitectura:** Felipe Torres + Rafael Rossi
**Companion deck visual:** `maislegal-deck-arquitetura-site-v4.html`

---

## 1. Princípios da arquitectura

| # | Princípio | Decisão |
|---|---|---|
| 01 | Conteúdo primeiro, design depois | Estrutura e copy validados antes do visual (regra Rafael, 13 Abr) |
| 02 | Site é produto, não folheto | Cada página tem caminho de conversão até o Early Access |
| 03 | Educar antes de vender | Cada página explica o conceito antes de pedir conversão |
| 04 | Mostrar a plataforma | Mockups conceptuais em pontos centrais (Home, Como Funciona, Para Operações) |
| 05 | Uma porta por persona | Três landings dedicadas, narrativa própria |
| 06 | Riscos silenciosos como porta de entrada | Comunicar problemas conhecidos e os ainda não identificados |
| 07 | Câmara SOMA com contexto sempre | Primeira menção em cada página: "nossa câmara de mediação e arbitragem, SOMA" |

---

## 2. Sitemap completo

```
+legal_/
├── /                              Home
│
├── Produto
│   ├── /como-funciona              3 passos + ciclo de vida
│   ├── /funcionalidades            ciclo completo do contrato
│   └── /integracoes                parceiros + roadmap
│
├── Para Quem
│   ├── /para-operacoes             Diretora de Operações
│   ├── /para-pmes                  Sócia-fundadora de PME
│   └── /para-advogados             Consultivo + Contencioso
│
├── /resolucao-de-disputas          Câmara SOMA (página dedicada)
│
├── /precos                         Tabela + FAQ
├── /sobre                          Fundadores + missão
├── /blog                           Hub educativo
│   └── /blog/[slug]                artigo individual
│
├── /early-access                   landing de captura
│
├── /privacidade                    Política
└── /termos                         Termos de Uso
```

**Total:** 12 páginas principais + 2 páginas legais.

---

## 3. Navegação

### Header (esquerda → direita)

| Item | Tipo | Destino |
|---|---|---|
| Logo +legal_ | Link | `/` |
| Produto | Dropdown | como-funciona, funcionalidades, integracoes |
| Para Quem | Dropdown | para-operacoes, para-pmes, para-advogados |
| Resolução de Disputas | Link | `/resolucao-de-disputas` |
| Preços | Link | `/precos` |
| Blog | Link | `/blog` |
| Sobre | Link | `/sobre` |
| **Entrar para o Early Access** | CTA | `/early-access` |

### Footer (4 colunas)

| Coluna | Itens |
|---|---|
| **Produto** | Como Funciona, Funcionalidades, Integrações, Preços |
| **Para Quem** | Operações, PMEs, Advogados |
| **Resolução** | Resolução de Disputas, Câmara SOMA, Conhecer a câmara (link externo) |
| **Empresa** | Sobre, Blog, Contato, LinkedIn |

**Linha institucional:** `+legal_ © 2026 · Política de Privacidade · Termos de Uso`

---

## 4. Páginas em detalhe

### 4.1 Home (`/`)

**Objetivo:** overview em 30 segundos, demonstração visual da plataforma, qualificação do visitante e direcionamento para landing por persona ou para o Early Access.

**CTA principal:** Entrar para o Early Access

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Você assinou em janeiro. Em junho, ninguém acha a versão certa." |
| 02 | Tira de dados (3 stats) | 35M ações 2023 · 83M em curso · 9% perdido por má gestão |
| 03 | Riscos silenciosos (6 cards) | Renovação · SLA · IGP-M · Não-concorrência · Garantia · Aditivo verbal |
| 04 | 3 passos | Organize · Monitore · Resolva |
| 05 | Mockup da plataforma | Dashboard com 47 contratos, alerta de renovação, status visual |
| 06 | Diferencial estrutural | 3 pilares: ambiente cooperativo · ciclo completo · câmara SOMA |
| 07 | 3 portas por persona | Cards para Operações, PMEs, Advogados |
| 08 | Câmara SOMA (com contexto) | "Conheça nossa câmara de mediação e arbitragem, SOMA." |
| 09 | O que não é | 5 negações canônicas, tom honesto |
| 10 | CTA final | Benefícios concretos do Early Access |

---

### 4.2 Como Funciona (`/como-funciona`)

**Objetivo:** explicar o produto em três minutos. O visitante sai entendendo o que é a +legal_ e desejando experimentar.

**CTA:** Entre para o Early Access

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Do acordo à resolução. Sem sair do ambiente." |
| 02 | Diagrama do ciclo de vida (6 etapas) | Cinza para etapas atendidas pelo mercado, azul para etapas exclusivas, peach para SOMA |
| 03 | Passo 01 · Organize | Upload, convite à outra parte, ambiente bilateral |
| 04 | Passo 02 · Monitore | Alertas, aditivos formalizados, dashboard |
| 05 | Passo 03 · Resolva | Câmara SOMA com um clique, mediação primeiro |
| 06 | Mockup da plataforma | Dashboard, alerta, status visual |
| 07 | Antes / Depois | 23 dias → 6 dias por contrato (rotular como ilustrativo) |
| 08 | CTA | "Entre para o Early Access" |

---

### 4.3 Funcionalidades (`/funcionalidades`)

**Objetivo:** detalhar o ciclo completo do contrato. Demonstrar as etapas de execução que distinguem a +legal_ no mercado.

**CTA:** Entre para o Early Access · Operador gratuito

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "O ciclo completo do contrato. As etapas em execução que nenhuma outra ferramenta cobre." |
| 02 | Diagrama estratégico | Cobertura do mercado vs cobertura da +legal_ |
| 03 | Bloco 01 · Ambiente cooperativo | Os dois lados em condições iguais |
| 04 | Bloco 02 · Monitoramento e alertas | Cumprimentos e ajustes, alertas D-30/60/90 |
| 05 | Bloco 03 · Aditivos formalizados | Concessões registradas com aprovação |
| 06 | Bloco 04 · Histórico imutável | Log auditável, versões com autoria |
| 07 | Bloco 05 · Tecnologia de extração | Cláusulas viram obrigações rastreáveis |
| 08 | Bloco 06 · Resolução SOMA integrada | Link para `/resolucao-de-disputas` |
| 09 | Riscos silenciosos | Os 6 riscos com link para o bloco que resolve cada um |
| 10 | O que não fazemos | 5 negações canônicas |
| 11 | CTA | Early Access |

---

### 4.4 Integrações (`/integracoes`)

**Objetivo:** responder às objeções "já uso ferramenta de assinatura" e "já uso Drive ou planilha". Posicionar a +legal_ como complemento, não substituto.

**CTA:** Early Access

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "A assinatura é etapa, não produto inteiro." |
| 02 | Categoria 01 · Assinatura digital | Principais plataformas brasileiras (DocuSign, ClickSign, ZapSign) |
| 03 | Categoria 02 · Roadmap declarado | Slack, Google Calendar, HubSpot, Pipedrive (Q3 2026) |
| 04 | Categoria 03 · Add-ons planejados | JUCESP, especialistas SOMA, digitalização (rotular como futuro) |
| 05 | Tira de objeções | "Já uso assinatura?" / "Tenho Drive?" / "Uso planilha?" |
| 06 | CTA | Early Access |

---

### 4.5 Para Operações (`/para-operacoes`)

**Persona:** Diretora de Operações (outsourcing B2B, R$15M-R$40M, 50-300 contratos ativos)
**Mensagem-chave:** Visibilidade e previsibilidade operacional
**Hook diagnóstico:** "Você tem quantos contratos ativos. Sabe o status de todos eles?"
**Frase âncora:** "Alertas antes do problema. Histórico quando o problema chega."
**CTA:** "Ver o portfolio pelos seus olhos. Entre para o Early Access."

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Três contratos renovaram sem você saber." |
| 02 | Cenário antes/depois | Renovação automática R$102k evitada |
| 03 | Riscos silenciosos da operação | 5 riscos específicos da área de operações |
| 04 | Mockup da plataforma · ângulo Operações | Dashboard de portfolio, alerta de renovação |
| 05 | O que muda | Dashboard · alertas · histórico · câmara SOMA |
| 06 | Punchline | "O CEO vê resultado. A diretora vê o que gera o resultado." |
| 07 | Cenário 2 | Due diligence em 2 horas (R$380k protegidos) |
| 08 | 4 gatilhos de adoção | Renovação · saída de colaborador · disputa · auditoria |
| 09 | 3 objeções típicas | "Já temos processo" / "Mais uma ferramenta" / "Jurídico precisa aprovar" |
| 10 | CTA | Early Access |

---

### 4.6 Para PMEs (`/para-pmes`)

**Persona:** Sócia-fundadora de PME (serviços especializados, 8-12 colaboradores, sem jurídico interno)
**Mensagem-chave:** Resolução confidencial sem litígio
**Hook diagnóstico:** "Seus contratos precisam trabalhar para você. Não contra você."
**Frase âncora:** "Os dois lados do contrato, no mesmo lugar."
**CTA:** "Comece agora, sem cartão. Entre para o Early Access."

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Cláusula esquecida. Prazo vencido. Multa de R$4.000." |
| 02 | Cenário antes/depois | Multa de R$4.000 evitada por alerta automático |
| 03 | Riscos silenciosos da PME | 5 riscos: escopo verbal, cláusula esquecida, garantia, multa, renovação |
| 04 | O que muda | Histórico único · alertas · evidências · câmara SOMA confidencial |
| 05 | Bloco "1º operador grátis" | "Começa de graça, cresce quando faz sentido" |
| 06 | Cenário 2 | R$42k recuperados em mediação SOMA |
| 07 | 4 gatilhos de adoção | Multa · cliente corporativo · disputa · renovação automática |
| 08 | 3 objeções típicas | "Cliente não vai usar" / "É caro" / "Tenho Drive" |
| 09 | CTA | Early Access |

---

### 4.7 Para Advogados (`/para-advogados`)

**Persona:** Advogado contencioso e consultivo (escritório de médio porte)
**Sweet spot:** R$200k a R$2M (faixa onde o custo de reconstrução é desproporcional ao valor da causa)
**Importância estratégica:** Vector de crescimento viral (cada escritório multiplica a base de clientes corporativos)
**Frase âncora:** "Quando o problema vira, o histórico salva."
**CTA principal:** "Falar com a equipe"
**CTA secundário:** "Entre para o Early Access individual"

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Quanto tempo você gasta reconstruindo contratos antes de cada arbitragem?" |
| 02 | Tabs: Consultivo vs Contencioso | Abordagem distinta para cada perfil |
| 03 | Cenário contencioso | 11 versões, 3 semanas reconstruindo, assimetria |
| 04 | Cenário consultivo | Auditoria 120 contratos: 2 dias vs 3 semanas |
| 05 | Pricing diferenciado | R$250/operador/mês, modelo por relacionamentos ativos |
| 06 | Como o escritório usa | Acesso externo · exportação · visibilidade do portfolio |
| 07 | Argumento de defesa | "Defesa sólida começa com informação completa." |
| 08 | Vector de crescimento | "Cada contrato seu vira workspace. Os clientes do seu cliente entram." |
| 09 | CTAs duplos | "Falar com a equipe" + "Early Access individual" |

---

### 4.8 Resolução de Disputas (`/resolucao-de-disputas`)

**Objetivo:** posicionar a integração com a câmara SOMA como diferencial estrutural único no mercado. Não substitui o site da SOMA, complementa.

**CTAs:** Early Access (primário) + "Conhecer a câmara" (secundário, link externo para o site da SOMA)

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Todos os outros sistemas terminam quando o contrato vai a litígio. A +legal_ continua." |
| 02 | Apresentação da câmara | "Conheça a SOMA, nossa câmara de mediação e arbitragem." Descrição: 100% digital, procedimentos padronizados, especialistas por área, simplificado em até 6 meses, padrão em até 1 ano |
| 03 | Tabela "O que muda na prática" | 5 linhas: histórico disponível · abertura com 1 clique · crédito de mediação · sigilo por padrão · 20% desconto Premium |
| 04 | Diagrama do fluxo (4 passos) | Contrato → Divergência → Câmara ativada em 24h → Resolução em meses |
| 05 | Por que isto é único | "Único ambiente de gestão de contratos no Brasil com câmara de resolução integrada." |
| 06 | Nota de independência | "+legal_ e SOMA são entidades separadas. A integração existe porque faz sentido para o cliente." |
| 07 | Dado de contexto | 83 milhões de processos em curso no Brasil |
| 08 | CTA duplo | Early Access + "Conhecer a câmara" |

---

### 4.9 Preços (`/precos`)

**Objetivo:** converter via transparência total. Sem demo obrigatória, sem pricing escondido.

**CTAs:** Early Access (primário) + "Falar com a equipe" (para escritórios e Premium)

**Hero (3 opções):**
- **Opção A (recomendada):** "Operador grátis para sempre. Os outros, R$500."
- **Opção B:** "Sem demo obrigatória. Sem pricing escondido."
- **Opção C:** "Comece de graça. Cresce quando quiser."

**Tabela de planos:**

| Plano | Preço | Para quem |
|---|---|---|
| **Gratuito** | R$ 0 | 1 operador por workspace para sempre. Visitantes (leitura), sem limite. Repositório, histórico, alertas básicos. |
| **Time** | R$ 500/operador/mês | A partir do 2º operador. Todos os recursos para times. Dashboard, integrações, API. |
| **Escritórios** | R$ 250/operador/mês | Modelo diferenciado por relacionamentos ativos e credenciais externas. |

**Add-on Premium:** Desconto no seat + 20% desconto taxas SOMA + biblioteca expandida de templates. Não é tier separado.

**FAQ de pricing (6 perguntas):** o que é "operador" · como funciona o desconto SOMA · o que muda no Premium · trial limitado · contrato anual · como cancelar.

---

### 4.10 Sobre (`/sobre`)

**Objetivo:** apresentar contexto humano. Os fundadores são activo de credibilidade.

**CTA:** Early Access

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Coração jurídico. Alma comercial." (Rafael Rossi) |
| 02 | Missão e visão | Texto curto, validado em ml-posicionamento.md |
| 03 | Por que existimos | Insight central: contratos terminam fragmentados em sistemas de cada parte |
| 04 | Fundadores | 4 cards: Rafael · Paula · Luis · Raul |
| 05 | Princípios | 3 frases de identidade |
| 06 | Co-presença SOMA | "Nossa câmara de mediação e arbitragem, SOMA." |
| 07 | CTA | Early Access |

---

### 4.11 Blog (`/blog`)

**Objetivo:** SEO + indexação por IA + thought leadership por fundador.

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Conteúdo sobre contratos vivos, gestão e resolução." |
| 02 | Filtros | Por categoria e por autor (4 fundadores) |
| 03 | Cards dos artigos | 4 publicados, espaço para crescer |
| 04 | Newsletter (futuro) | Captura de email, opcional no lançamento |

**4 artigos prontos para publicar:**
- "O contrato foi escrito para o juiz. Ninguém o escreveu para o dia a dia." (Rafael)
- "O que o seu advogado não consegue fazer sem histórico organizado" (Paula/Luis)
- "Combinar pelo WhatsApp é prático. É seguro?" (Luis)
- "Por que conflitos contratuais custam mais do que parecem" (Rafael)

---

### 4.12 Early Access (`/early-access`)

**Objetivo:** página de captura dedicada. Único objectivo: cadastro qualificado.

**CTA:** formulário de cadastro

**Estrutura:**

| # | Secção | Conteúdo principal |
|---|---|---|
| 01 | Hero | "Os primeiros workspaces moldam a +legal_." |
| 02 | Por que Early Access | 6 cards de benefícios concretos |
| 03 | Estado actual do produto | Bloco honesto sobre o que está disponível agora |
| 04 | Formulário | Nome · Email · Empresa · Cargo · Volume contratos · Vertical · Origem |
| 05 | FAQ curto | 4 perguntas: grátis · duração · convidar parte · cancelar |
| 06 | Confirmação | "Recebido. Voltamos em até 3 dias úteis." |

**6 benefícios do Early Access:**
1. Operador gratuito para sempre
2. Acesso prioritário a novas funcionalidades
3. Acesso direto aos fundadores
4. 20% desconto SOMA
5. Onboarding assistido
6. Preço de lançamento garantido

---

## 5. Jornadas por persona

### Diretora de Operações
SEO orgânico ("renovação automática contrato", "gestão contratos B2B") → **Home** ou **/para-operacoes** → /como-funciona → /precos → **/early-access**

### Sócia-fundadora de PME
SEO de cauda longa ("como cobrar cliente que não paga", "primeiro contrato corporativo") → **/para-pmes** → /resolucao-de-disputas → **/early-access**

### Advogado (consultivo / contencioso)
LinkedIn (post de Rafael ou Luis) → **/para-advogados** → /resolucao-de-disputas → /precos → **"Falar com a equipe"**

### Investidor
LinkedIn ou intro pessoal → **Home** → /sobre → /resolucao-de-disputas → **contato directo** (não passa pelo Early Access)

---

## 6. SEO inicial · mapa de keywords

| Categoria | Keyword | Página dona |
|---|---|---|
| Dor reconhecida | gestão de contratos brasil | Home + /funcionalidades |
| Dor reconhecida | como cobrar cliente que não paga | /para-pmes + artigo de blog |
| Dor reconhecida | arbitragem para pequena empresa | /resolucao-de-disputas + artigo |
| Dor reconhecida | renovação automática contrato | /para-operacoes + artigo |
| Dor reconhecida | SLA contratual descumprido | /para-operacoes |
| Educacional | o que é gestão de contratos | artigo de blog (topo de funil) |
| Educacional | diferença mediação e arbitragem | artigo de blog + /resolucao-de-disputas |
| Educacional | cláusula arbitral exemplo | artigo de blog (jurídico) |
| Categoria nova | ambiente cooperativo contrato | /funcionalidades + Home |
| Categoria nova | câmara integrada gestão de contratos | /resolucao-de-disputas |
| Categoria nova | resolução de disputas b2b online | /resolucao-de-disputas |
| Categoria nova | contract health para boards | /para-operacoes |

---

## 7. Roadmap de build · 4 semanas (alvo: AB2Lex 13 Mai)

### Semana 01 · Fundação e páginas críticas (entrega 06 Mai)
- Setup Next.js + design system
- Componentes base (Header, Footer, Botão, Card, Logo)
- Mockup conceptual da plataforma (SVG)
- Página: Home (com riscos silenciosos)
- Página: /early-access (com benefícios)
- SEO técnico (meta, sitemap.xml, robots.txt)

### Semana 02 · Páginas de produto (entrega 13 Mai · AB2Lex)
- Página: /como-funciona
- Página: /funcionalidades
- Página: /integracoes
- Página: /precos
- Diagramas SVG (ciclo de vida, fluxo SOMA)
- Tabela pricing + FAQ accordion

### Semana 03 · Landings por persona (entrega 20 Mai)
- Página: /para-operacoes
- Página: /para-pmes
- Página: /para-advogados
- Componentes: cenário antes/depois, gatilhos, objection handler
- Variantes do mockup por persona

### Semana 04 · Conteúdo e ajustes (entrega 27 Mai)
- Página: /sobre
- Página: /resolucao-de-disputas
- Setup /blog + 4 artigos publicados
- Páginas legais
- QA, performance, mobile, acessibilidade
- Deploy e teste em staging

---

## 8. Decisões em aberto · pedidos para Rafael

### Bloqueantes (antes da semana 1)

| # | Decisão | Contexto |
|---|---|---|
| 01 | Domínio definitivo | maislegal.tech vai ser exclusivo de +legal_? O que acontece com o SOMA actual em maislegal.tech/soma? |
| 02 | Estado real do produto | Early Access é honrado com produto funcional ou é fila de espera real? |
| 03 | Stack tipográfico | Barlow + Inter + JetBrains Mono (Master Deck) ou continua Barlow + Work Sans + Tailwind blue (site actual)? |

### Importantes (antes da semana 2)

| # | Decisão | Contexto |
|---|---|---|
| 04 | Stat "86% de economia" | Removemos, substituímos por caso real, ou aguardamos fonte verificável? |
| 05 | Stat "23 dias → 6 dias" | Caso real, projecção ou ilustração? Como rotular? |
| 06 | Pricing exacto para escritórios | R$250 firme. Mas qual é o desconto por relacionamentos activos? Há piso ou tecto? |
| 07 | Premium | Percentual de desconto fechado? Lista exacta de templates expandidos? |

### Operacionais (antes da semana 3)

| # | Decisão | Contexto |
|---|---|---|
| 08 | Câmara SOMA | Está activa hoje? O bloco "câmara em 24h" depende disto. |
| 09 | LinkedIn por fundador | Paula, Luis e Raul aprovaram o pilar individual? |
| 10 | Punchline para "qualidade sem preço alto" | Já temos? Ou trabalhamos uma agora? |
| 11 | Bios dos fundadores | Quem fornece o texto curto para a página /sobre? |
| 12 | Imagens dos fundadores | Quem fornece? Estilo (corporate vs natural)? |
| 13 | Newsletter no lançamento | Capturamos email no blog desde o dia 1 ou só depois? |

---

## 9. Banco de copy aprovado por página

Esta secção indica onde está o copy aprovado para cada página, segundo os Knowledge MDs.

| Página | Fonte do copy | Status |
|---|---|---|
| Home | ml-assets.md, ml-site.md (Seção 04) | Hero, 5 problemas, 3 passos, fecho aprovados. Falta microcopy de cards. |
| Como Funciona | ml-site.md (Seção 04, Passo 01-03) | Copy completo dos 3 passos aprovado. |
| Funcionalidades | ml-produto.md (6 blocos descritos) | Copy técnico aprovado. Faltam headlines de bloco. |
| Integrações | ml-produto.md + ml-gtm.md (objeções) | Copy aprovado. |
| Para Operações | ml-personas.md (Persona 1) + ml-jornadas.md (C01, C02) | Hero + cenário + 5 dores + 4 gatilhos + 3 objeções aprovados. |
| Para PMEs | ml-personas.md (Persona 3) + ml-jornadas.md (C03) | Hero + cenário + 5 dores + 4 gatilhos + 3 objeções aprovados. |
| Para Advogados | ml-personas.md (Persona 2) + ml-gtm.md | Hero + 2 cenários + pricing + argumentos aprovados. Falta bloco "como o escritório usa". |
| Resolução de Disputas | ml-site.md (Seção 07) + ml-mercado.md (moat SOMA) | Tabela de 5 linhas + nota de independência aprovados. Falta diagrama do fluxo. |
| Preços | ml-produto.md + ml-sessoes-fundadores.md (18 Abr) | Tabela de planos + FAQ de 6 perguntas aprovados. Headline a confirmar (3 opções). |
| Sobre | ml-historia.md + ml-posicionamento.md | Missão, visão, princípios, posicionamento aprovados. Falta bio em uma frase por fundador. |
| Blog | ml-gtm.md (artigos publicados) | 4 artigos prontos. Hub layout a construir. |
| Early Access | Estrutura definida nesta proposta | Copy do hero a refinar. FAQ específico a redigir. |

---

## 10. Notas de design e branding

**Cores principais (Master Deck):**
- Azul principal: `#1E3A5F`
- Peach (acento em fundos escuros): `#F0CDA7` / `#D4945A`
- Background: `#FAFAF8` (off-white) / `#FFFFFF`
- Texto: `#2F3A4A` (dark) / `#666660` (grey-4) / `#999990` (grey-3)
- Verde sucesso (cenários "depois"): `#2E8B57`
- Vermelho atenção (cenários "antes"): `#C94F4F`

**Tipografia:**
- Títulos: Barlow (700/800)
- Corpo: Inter (400/500/600/700)
- Código e labels técnicos: JetBrains Mono

**Restrições visuais:**
- Sem gradientes
- Sem cerúleo
- Sem roxo/púrpura
- Ícones outline (estilo Lucide/Feather)
- Logo sempre como imagem, nunca re-tipografado
- Compatibilidade Google Slides obrigatória

**Logo:**
- Fundo claro: `Shared/Logos/maislegal-logo-black.png`
- Fundo escuro: `Shared/Logos/maislegal-logo-white.png`
- Aspect ratio: 1803 × 683 px (LOGO_RATIO = 2.640)

---

## 11. Referências

**Knowledge MDs principais consultados:**
- `Knowledge/ml-site.md` — estrutura, copy aprovado, erros conhecidos
- `Knowledge/ml-posicionamento.md` — posicionamento, mensagens-núcleo, claims
- `Knowledge/ml-personas.md` — 3 personas, gatilhos, jornadas
- `Knowledge/ml-produto.md` — funcionalidades, pricing, diferenciais
- `Knowledge/ml-voz-e-tom.md` — voz, vocabulário, padrões
- `Knowledge/ml-branding.md` — cores, tipografia, logo
- `Knowledge/ml-gtm.md` — GTM, canais, cenários, vendas
- `Knowledge/ml-mercado.md` — TAM/SAM/SOM, competidores, moat
- `Knowledge/ml-jornadas.md` — 6 cenários antes/depois, jornadas de ativação
- `Knowledge/ml-assets.md` — banco de copy aprovado
- `Knowledge/ml-decisoes-abertas.md` — claims pendentes, itens bloqueantes

**Decks de validação (Hub de Referência):**
- `maislegal-deck-personas-validacao-v1.html` (24 slides)
- `maislegal-deck-voz-branding-v2.html` (37 slides)
- `maislegal-deck-arquitetura-site-v4.html` (este, em formato visual)
