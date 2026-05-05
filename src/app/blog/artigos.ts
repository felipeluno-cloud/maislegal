export type Artigo = {
  slug: string;
  titulo: string;
  autor: string;
  role: string;
  initial: string;
  summary: string;
  hook: string;
  pontos: string[];
  conclusao: string;
  categoria: string;
  color: "brand" | "peach" | "soma";
  leitura: string;
  publicado: string;
};

export const ARTIGOS: Artigo[] = [
  {
    slug: "contrato-escrito-para-o-juiz",
    titulo: "O contrato foi escrito para o juiz. Ninguém o escreveu para o dia a dia.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "Contratos mal monitorados criam três custos invisíveis: prazo (multas), reconstrução (semanas de jurídico) e relacionamento (litígio que poderia ter sido conversa).",
    hook:
      "Toda empresa B2B já viu isso acontecer: o contrato é fechado com cuidado, dezenas de horas de negociação, advogado revisando cada cláusula. Depois, é arquivado em Drive. E ninguém mais olha para ele até virar problema.",
    pontos: [
      "Custo 1 · prazo perdido. Renovação automática que ninguém viu, multa de SLA não cobrada, aviso de não renovação ignorado.",
      "Custo 2 · reconstrução. Quando vira disputa, advogado externo passa 2 a 3 semanas reconstruindo o histórico antes de começar a estratégia.",
      "Custo 3 · relacionamento. O conflito que poderia ter sido conversa estruturada vira litígio público, queima a relação comercial e contagia a rede do cliente."
    ],
    conclusao:
      "O contrato precisa ser escrito para durar. Mas precisa ser monitorado para valer. Sem o segundo movimento, o primeiro vira papel.",
    categoria: "Gestão",
    color: "brand",
    leitura: "5 min",
    publicado: "12 abr 2026"
  },
  {
    slug: "advogado-historico-organizado",
    titulo: "O que o seu advogado não consegue fazer sem histórico organizado.",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "Uma defesa sólida começa com informação completa. Sem histórico organizado, o advogado passa semanas reconstruindo fatos antes de começar a estratégia jurídica.",
    hook:
      "Atendi centenas de casos em arbitragem e contencioso. Nenhum começou com o cliente entregando o histórico organizado de cabo a rabo. Sempre tem 11 versões em drives diferentes, e-mails sumindo, combinados verbais que ninguém anotou.",
    pontos: [
      "Sem histórico, o advogado não consegue avaliar a força da posição rapidamente. Demora dias o que poderia ser horas.",
      "Sem histórico, é impossível identificar a versão final assinada com certeza, e a outra parte pode contestar a vigência.",
      "Sem histórico, combinados verbais (concessões de prazo, ajustes de escopo) não viram evidência. Ficam como memória, que vira disputa de versão."
    ],
    conclusao:
      "O custo de reconstruir é pago em horas de honorário. Pior, é pago em casos enfraquecidos por falta de evidência. Histórico íntegro é a primeira linha de defesa.",
    categoria: "Para Advogados",
    color: "peach",
    leitura: "6 min",
    publicado: "08 abr 2026"
  },
  {
    slug: "combinar-pelo-whatsapp",
    titulo: "Combinar pelo WhatsApp é prático. É seguro?",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "Pequenas concessões informais se acumulam ao longo do tempo, e o WhatsApp não vale como evidência quando o conflito chega. Um aditivo formal feito no ambiente colaborativo leva menos de cinco minutos.",
    hook:
      "Cliente liga: aceita estender o prazo de entrega em 15 dias? Você responde por WhatsApp: 'Tudo bem, sem problema.' Combinado feito. Seis meses depois, o contrato está em disputa, e ninguém lembra mais o que ficou combinado naquela tarde.",
    pontos: [
      "WhatsApp tem valor probatório, mas é frágil: a outra parte pode questionar autenticidade, e a sequência pode ser tirada de contexto.",
      "Concessões informais acumuladas viram um contrato paralelo que ninguém formalizou, e que entra em conflito com o que está escrito.",
      "Quando o conflito chega, o juiz ou árbitro precisa reconciliar o contrato escrito com a realidade praticada. Sem aditivo formal, vira jogo de quem lembra melhor."
    ],
    conclusao:
      "Não é sobre nunca usar WhatsApp. É sobre formalizar tudo o que vira combinado de verdade, com aprovação documentada das partes. Ambiente colaborativo torna isso questão de minutos, não dias.",
    categoria: "Educação",
    color: "peach",
    leitura: "4 min",
    publicado: "04 abr 2026"
  },
  {
    slug: "conflitos-contratuais-custam-mais",
    titulo: "Por que conflitos contratuais custam mais do que parecem.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "O custo visível é o valor em disputa, mais honorários. Os custos invisíveis: tempo de gestão, relacionamento queimado, reputação em diligência prévia, oportunidade de resolução precoce perdida.",
    hook:
      "Empresas tendem a calcular o custo de uma disputa pela soma de honorário advocatício e valor em disputa. Esse é o custo visível. O custo total, na prática, é muito maior.",
    pontos: [
      "Tempo de gestão. Cada disputa consome horas semanais do diretor que cuida da relação. Esse tempo é o mais caro da empresa.",
      "Relacionamento queimado. Cliente em disputa não renova, não indica, e fala mal para rede dele.",
      "Reputação em diligência prévia. Processo público aparece em qualquer pesquisa básica que prospects ou investidores fazem.",
      "Oportunidade perdida. A janela de resolução precoce, antes do conflito escalar, raramente é aproveitada quando ninguém está monitorando."
    ],
    conclusao:
      "Disputa custa caro mesmo quando você ganha. Por isso a +legal_ é desenhada para evitar que ela aconteça, ou para resolvê-la em sigilo quando for inevitável.",
    categoria: "Disputas",
    color: "soma",
    leitura: "7 min",
    publicado: "01 abr 2026"
  },
  {
    slug: "docusign-vs-clm",
    titulo: "Assinatura digital não é gestão de contratos. Confundir os dois sai caro.",
    autor: "Raul Mariotti",
    role: "Tecnologia",
    initial: "R",
    summary:
      "DocuSign, ClickSign e similares resolvem a etapa da assinatura. Não cobrem nem o que vem antes (negociação, versão única, comentários) nem o que vem depois (obrigações, alertas, aditivos).",
    hook:
      "Toda semana alguém me pergunta: vocês concorrem com a DocuSign? Não concorremos, integramos. A pergunta certa é outra: o que acontece com o contrato depois que ele é assinado?",
    pontos: [
      "Assinatura digital é uma etapa, normalmente de 5 a 10 minutos do ciclo de um contrato que vai durar 12 a 36 meses.",
      "O ciclo do contrato (negociação, monitoramento, aditivos, resolução) é onde os custos reais aparecem, e não é coberto por ferramenta de assinatura.",
      "Trocar planilha + drive + e-mail por DocuSign não é gestão de contratos. É apenas digitalizar a assinatura."
    ],
    conclusao:
      "A pergunta a se fazer não é 'qual ferramenta de assinatura usar'. É 'o que acontece com o contrato depois que ele é assinado'. A +legal_ existe para responder essa segunda pergunta.",
    categoria: "Educação",
    color: "brand",
    leitura: "5 min",
    publicado: "28 mar 2026"
  },
  {
    slug: "lgpd-contratos-b2b",
    titulo: "LGPD em contratos B2B: o NDA que ninguém leu pode custar 2% do faturamento.",
    autor: "Paula Abi-Chahine",
    role: "Câmara SOMA",
    initial: "P",
    summary:
      "A maioria dos contratos B2B carrega cláusula de confidencialidade detalhada sobre dado pessoal. Quase ninguém transforma essa cláusula em rotina. Quando o dado escorrega, a multa LGPD chega antes da explicação.",
    hook:
      "A LGPD não distingue entre contrato B2B e B2C quando o assunto é dado pessoal. Se a sua empresa trata dado de pessoa física no curso de um contrato comercial, você é controlador ou operador, e responde por isso.",
    pontos: [
      "NDAs corporativos detalham o que é dado sensível, quem pode acessar, por quanto tempo, e como deve ser tratado. Quase nenhuma empresa traduz isso em rotina operacional.",
      "Quando um dado escorrega (e-mail vazado, planilha compartilhada errada, ex-funcionário levou base), a violação é da empresa, mesmo se o erro foi humano.",
      "Multa LGPD pode chegar a 2% do faturamento, com teto de R$ 50 milhões por infração. Para uma empresa de R$ 25 milhões/ano, isso é R$ 500 mil de uma só vez."
    ],
    conclusao:
      "A solução não é ler o NDA mais uma vez. É tornar a cláusula de confidencialidade uma obrigação rastreável dentro do ambiente de contratos, com alertas e logs de acesso. Sem isso, é loteria.",
    categoria: "LGPD",
    color: "brand",
    leitura: "8 min",
    publicado: "24 mar 2026"
  },
  {
    slug: "clausula-escalonada-mediacao-primeiro",
    titulo: "Cláusula escalonada: começar pela mediação, escalar só se precisar.",
    autor: "Paula Abi-Chahine",
    role: "Câmara SOMA",
    initial: "P",
    summary:
      "A cláusula escalonada de resolução de disputas começa pela mediação e escala para arbitragem só se a mediação não resolver. Bem desenhada, ela reduz custo, preserva relacionamento e mantém sigilo.",
    hook:
      "Toda empresa que tem contrato B2B recorrente deveria conhecer a cláusula escalonada. É a forma mais inteligente de proteger a relação comercial sem abrir mão da garantia de execução.",
    pontos: [
      "Mediação é estruturada, mas é conversa. Funciona bem quando as partes ainda querem manter a relação, e o conflito é sobre interpretação ou ajuste, não sobre má-fé.",
      "Arbitragem é decisão vinculante. Funciona quando a mediação não resolveu, ou quando o conflito é grave o suficiente para exigir decisão de terceiro.",
      "A cláusula escalonada combina os dois: começa pela mediação, com prazo definido, e escala para arbitragem se não resolver. Honorários da mediação podem virar crédito na arbitragem (incentivo financeiro para começar pelo caminho leve)."
    ],
    conclusao:
      "Inserir cláusula escalonada no seu contrato master leva 5 minutos. Pode ser o que separa uma renegociação amigável de um litígio público de 18 meses.",
    categoria: "Disputas",
    color: "soma",
    leitura: "6 min",
    publicado: "20 mar 2026"
  },
  {
    slug: "gestao-sla-outsourcing",
    titulo: "Gestão de SLA: três tipos de descumprimento que ninguém cobra (mas deveria).",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "Empresas de outsourcing TI perdem entre 2% e 5% da fatura anual em SLAs descumpridos que não foram cobrados. O dinheiro está no contrato, e ninguém vai buscar.",
    hook:
      "Trabalhei em três startups B2B que tinham contratos de outsourcing com terceiros. Em todas, achei multa contratual prevista no contrato que nunca foi cobrada. O dinheiro estava lá. Ninguém olhou.",
    pontos: [
      "SLA de disponibilidade. Contrato prevê 99,5%, fornecedor entrega 99,2%, multa é 0,5% por ponto percentual. Ninguém calcula. Ninguém cobra.",
      "SLA de tempo de resposta. Contrato prevê 4 horas, fornecedor responde em 12. Cada incidente vira multa pequena. Acumulado em 12 meses, vira valor relevante.",
      "SLA de entrega. Marco mensal previsto, atraso recorrente, multa contratual existe. Time aceita o atraso para não brigar. Cobrança vira gestão de relacionamento, e a empresa paga a conta."
    ],
    conclusao:
      "Cada cláusula de SLA precisa virar obrigação rastreada, com cálculo automático de multa quando descumprida. Não para brigar, mas para ter a conversa baseada em dado, não em memória.",
    categoria: "Gestão",
    color: "brand",
    leitura: "7 min",
    publicado: "16 mar 2026"
  },
  {
    slug: "renovacao-automatica-janela",
    titulo: "Renovação automática: a janela de 90 dias e como nunca mais perder.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "Cláusula de renovação automática com aviso prévio de 90 dias é padrão em outsourcing, locação, manutenção e serviços recorrentes. Esquecer a janela significa renovar com mesmo preço, mesma cláusula, e zero negociação.",
    hook:
      "Atendi um cliente que perdeu R$ 180 mil em uma renovação automática de software. Tinha 90 dias para avisar que não renovaria. Ninguém marcou no calendário. Renovou.",
    pontos: [
      "Renovação automática é padrão de mercado em B2B recorrente. Não é falha de quem desenhou o contrato. É como o mercado funciona.",
      "A janela de aviso varia de 30 a 180 dias. 90 é o mais comum em contratos médios.",
      "Esquecer a janela não é só 'manter o contrato'. É manter ele com mesmo preço (sem renegociação), mesma cláusula (sem ajuste), mesmo escopo (sem revisão). Ano após ano."
    ],
    conclusao:
      "A solução não é confiar na memória do diretor. É virar a cláusula em alerta automático: 90, 60 e 30 dias antes da janela. Aí você decide se renova, renegocia ou sai. Mas decide.",
    categoria: "Gestão",
    color: "brand",
    leitura: "5 min",
    publicado: "12 mar 2026"
  },
  {
    slug: "nda-pratica-corporativa",
    titulo: "NDA na prática: por que assinar não é o mesmo que cumprir.",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "NDA é o contrato mais assinado e o menos cumprido na realidade corporativa. Cláusula detalhada, lista do que é confidencial, prazo de proteção. Tudo escrito. Tudo esquecido depois da assinatura.",
    hook:
      "Toda relação comercial B2B começa com NDA. Quase nenhuma cumpre o NDA depois que o trabalho começa. Não por má-fé, normalmente. Por descuido operacional.",
    pontos: [
      "NDA detalha o que é informação confidencial. Lista nunca vira rotina, e o time não sabe na prática o que pode falar fora.",
      "NDA define prazo de proteção (normalmente 2 a 5 anos depois do fim do contrato). Quando o contrato acaba, o time esquece, e a obrigação continua.",
      "NDA prevê multa por violação. Quase nunca cobrada, porque rastrear a violação exige histórico estruturado que a empresa não tem."
    ],
    conclusao:
      "NDA assinado e arquivado no Drive vale o papel em que está. NDA virado em obrigação rastreável, com lista de dados confidenciais visível ao time e prazo de proteção monitorado, vale a proteção que prometeu.",
    categoria: "Para Advogados",
    color: "peach",
    leitura: "6 min",
    publicado: "08 mar 2026"
  },
  {
    slug: "glossario-clausulas-contratuais",
    titulo: "Glossário rápido: 12 cláusulas contratuais que toda empresa B2B deveria reconhecer.",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "Cláusula compromissória, escalonada, de não-concorrência, de confidencialidade, de rescisão antecipada. Cada uma protege algo específico, e cada uma tem armadilhas próprias. Glossário rápido para quem não é advogado.",
    hook:
      "Diretor de Operações ou Sócio de PME não precisa virar advogado para entender contrato. Mas precisa saber reconhecer 12 tipos de cláusula que aparecem na maioria dos contratos B2B, e o que cada uma significa na prática.",
    pontos: [
      "Cláusula compromissória · arbitragem como meio de resolução, em vez de judiciário.",
      "Cláusula escalonada · mediação primeiro, arbitragem depois.",
      "Cláusula de confidencialidade (NDA) · o que é segredo, por quanto tempo, com qual penalidade.",
      "Cláusula de não-concorrência · proíbe atuar no mesmo segmento por prazo definido.",
      "Cláusula de rescisão antecipada · quando e como o contrato pode ser encerrado antes do prazo.",
      "Cláusula penal (multa) · sanção por descumprimento, normalmente em valor fixo ou percentual.",
      "Cláusula de SLA · padrão de serviço acordado e penalidade por descumprimento.",
      "Cláusula de exclusividade · uma das partes não pode contratar concorrente.",
      "Cláusula de garantia · qualidade do produto/serviço prometido, com prazo de cobertura.",
      "Cláusula de propriedade intelectual · quem é dono do que foi criado durante o contrato.",
      "Cláusula de força maior · eventos imprevisíveis que suspendem obrigações.",
      "Cláusula de foro · onde o conflito vai ser resolvido (comarca, câmara arbitral)."
    ],
    conclusao:
      "Entender essas 12 cláusulas é o ponto de partida para ler contrato sem virar advogado. Reconhecer o tipo te dá poder de fazer pergunta, mesmo sem saber redigir.",
    categoria: "Educação",
    color: "peach",
    leitura: "10 min",
    publicado: "04 mar 2026"
  },
  {
    slug: "camara-digital-vs-tradicional",
    titulo: "Câmara digital ou tradicional: como escolher (sem cair na xexelenta).",
    autor: "Paula Abi-Chahine",
    role: "Câmara SOMA",
    initial: "P",
    summary:
      "Câmaras digitais resolvem em meses, custam menos, e funcionam 100% online. Câmaras tradicionais têm marca, rede de árbitros consolidada, e história de decisões. Como escolher, e como evitar a câmara xexelenta que vai ter laudo anulado.",
    hook:
      "O mercado de arbitragem no Brasil tem CAMARB e FIESP de um lado, câmaras digitais novas do outro lado, e um terceiro grupo que ninguém quer comentar: as câmaras frágeis cujos laudos são anulados pelo judiciário com frequência.",
    pontos: [
      "Câmara tradicional · marca, lista consolidada de árbitros, custo alto. Faz sentido para disputas de alto valor (acima de R$ 200 mil) e relevância institucional.",
      "Câmara digital séria · procedimentos padronizados, custo previsível, tempo curto, sigilo por padrão. Faz sentido para disputas comerciais B2B típicas (R$ 50 mil a R$ 2M), com agilidade e custo controlado.",
      "Câmara xexelenta · custo baixo, lista de árbitros sem credenciais sólidas, laudo anulado pelo judiciário. Você economiza no procedimento, paga em ter que começar de novo."
    ],
    conclusao:
      "Câmara digital não é sinônimo de câmara fraca. A diferença está na qualidade dos árbitros, no rigor dos procedimentos e na reputação institucional. SOMA foi desenhada para ter o rigor das tradicionais com a eficiência das digitais.",
    categoria: "Disputas",
    color: "soma",
    leitura: "8 min",
    publicado: "28 fev 2026"
  }
];
