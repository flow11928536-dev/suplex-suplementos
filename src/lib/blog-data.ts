// ============================================================
// DADOS DO BLOG - ARTIGOS SOBRE SUPLEMENTOS
// ============================================================
// 📝 INSTRUÇÕES:
// - Para adicionar novos artigos, copie a estrutura abaixo
// - 🖼️ Substitua o campo "image" pela URL da imagem do artigo
// - Cada artigo deve ter conteúdo rico em palavras-chave para SEO
// ============================================================

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: BlogSection[]
  author: string
  date: string
  readingTime: number
  category: string
  image: string // 🖼️ IMAGEM DO ARTIGO - Substitua pela URL
  keywords: string[]
}

export interface BlogSection {
  type: "heading" | "paragraph" | "list" | "quote" | "tip"
  content?: string
  items?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Whey Protein: Guia Completo 2026 - Tudo o Que Você Precisa Saber",
    slug: "whey-protein-guia-completo-2026",
    excerpt: "Descubra o que é whey protein, seus tipos, benefícios, como tomar e qual escolher. Guia definitivo com base científica para iniciantes e avançados.",
    author: "Equipe Suplex",
    date: "2026-06-15",
    readingTime: 12,
    category: "Whey Protein",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&q=80",
    keywords: ["whey protein", "proteína do soro do leite", "suplemento proteico", "hipertrofia", "ganho de massa muscular"],
    content: [
      { type: "paragraph", content: "O Whey Protein é sem dúvida o suplemento mais popular do mundo fitness. Mas você sabe exatamente o que é, como funciona e qual tipo escolher? Neste guia completo, vamos explicar tudo o que você precisa saber sobre o whey protein para tomar a melhor decisão na hora de comprar." },
      { type: "heading", content: "O que é Whey Protein?" },
      { type: "paragraph", content: "Whey Protein é a proteína extraída do soro do leite, um subproduto do processo de fabricação do queijo. Durante a produção do queijo, o leite se separa em duas partes: a coalhada (sólida) e o soro (líquido). Esse soro é rico em proteínas de altíssima qualidade, contendo todos os 9 aminoácidos essenciais que o corpo não consegue produzir." },
      { type: "paragraph", content: "A proteína do soro do leite tem o mais alto valor biológico de todas as proteínas, superando até mesmo a clara do ovo. Isso significa que ela é absorvida e utilizada pelo corpo de forma extremamente eficiente, tornando-a a escolha número um de atletas e praticantes de musculação em todo o mundo." },
      { type: "heading", content: "Tipos de Whey Protein" },
      { type: "paragraph", content: "Existem três tipos principais de whey protein, cada um com características específicas de pureza, absorção e preço:" },
      { type: "list", items: [
        "Whey Protein Concentrado: A forma mais comum e acessível. Contém 70-80% de proteína, com pequenas quantidades de lactose e gordura. Ideal para a maioria das pessoas.",
        "Whey Protein Isolado: Passa por um processo de filtragem que remove gorduras, carboidratos e lactose, resultando em 90%+ de proteína pura. Ideal para intolerantes à lactose ou em dietas restritivas.",
        "Whey Protein Hidrolisado: As proteínas são quebradas em peptídeos menores, permitindo absorção quase instantânea. É a forma mais avançada e cara, ideal para atletas de alta performance.",
      ]},
      { type: "heading", content: "Benefícios do Whey Protein" },
      { type: "list", items: [
        "Aumenta a síntese de proteína muscular, promovendo hipertrofia",
        "Acelera a recuperação pós-treino, reduzindo dores musculares",
        "Ajuda na manutenção da massa magra durante dietas de emagrecimento",
        "Pode reduzir a pressão arterial em pessoas com hipertensão",
        "Tem ação antioxidante e pode fortalecer o sistema imunológico",
        "Aumenta a saciedade, ajudando no controle do apetite",
      ]},
      { type: "heading", content: "Como Tomar Whey Protein" },
      { type: "paragraph", content: "A forma ideal de consumir whey protein depende dos seus objetivos. Para a maioria das pessoas, 1-2 scoops (25-50g de proteína) por dia é suficiente. O momento mais popular é logo após o treino, quando os músculos estão mais receptivos à absorção de nutrientes." },
      { type: "tip", content: "Dica: Misturar whey protein com carboidratos (como banana ou aveia) no pós-treino potencializa a recuperação e a síntese de proteína muscular." },
      { type: "heading", content: "Qual Whey Protein Escolher?" },
      { type: "paragraph", content: "A escolha do whey protein ideal depende de vários fatores: orçamento, intolerâncias alimentares, objetivos e preferências de sabor. Para iniciantes, o whey concentrado oferece o melhor custo-benefício. Para quem tem intolerância à lactose, o isolado é a melhor opção. Já para atletas profissionais, o hidrolisado oferece a absorção mais rápida." },
      { type: "heading", content: "Conclusão" },
      { type: "paragraph", content: "O whey protein é o suplemento mais estudado e comprovado do mundo, com décadas de pesquisa validando sua segurança e eficácia. Seja você um iniciante ou um atleta experiente, a suplementação com whey protein pode ajudar a atingir seus objetivos de ganho de massa muscular, recuperação e performance de forma segura e eficaz." },
    ],
  },
  {
    id: "2",
    title: "Creatina Funciona? Tudo o Que a Ciência Diz",
    slug: "creatina-funciona-tudo-o-que-a-ciencia-diz",
    excerpt: "Mais de 500 estudos comprovam: a creatina funciona. Entenda como ela age no corpo, seus benefícios e como usar para máximo resultado.",
    author: "Equipe Suplex",
    date: "2026-06-10",
    readingTime: 10,
    category: "Creatina",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=1200&q=80",
    keywords: ["creatina", "creatina monohidratada", "creatina funciona", "ganho de força", "suplemento muscular"],
    content: [
      { type: "paragraph", content: "A creatina é provavelmente o suplemento mais estudado da história, com mais de 500 estudos científicos publicados. Mas será que ela realmente funciona? A resposta curta é: sim, e muito bem. Neste artigo, vamos explorar em detalhes o que a ciência diz sobre a creatina." },
      { type: "heading", content: "O que é Creatina?" },
      { type: "paragraph", content: "A creatina é uma substância naturalmente produzida pelo corpo (no fígado, rins e pâncreas) a partir de três aminoácidos: glicina, arginina e metionina. Ela é armazenada nos músculos na forma de fosfocreatina, onde atua como uma reserva rápida de energia para contrações musculares intensas e de curta duração." },
      { type: "heading", content: "Como a Creatina Funciona?" },
      { type: "paragraph", content: "Quando você faz um exercício intenso (como levantar pesos), seu corpo usa uma molécula chamada ATP (adenosina trifosfato) como energia. O ATP é quebrado em ADP, liberando energia. A fosfocreatina doa um grupo fosfato ao ADP, regenerando o ATP rapidamente, permitindo que você continue treinando com intensidade por mais tempo." },
      { type: "heading", content: "Benefícios Comprovados pela Ciência" },
      { type: "list", items: [
        "Aumento de força e potência muscular em 10-15%",
        "Ganho de massa muscular (por retenção de água intramuscular e aumento de síntese proteica)",
        "Melhora o desempenho em exercícios explosivos (sprints, saltos, levantamento de peso)",
        "Acelera a recuperação entre séries",
        "Pode melhorar a função cerebral e cognição",
        "Reduz a fadiga em exercícios de alta intensidade",
      ]},
      { type: "heading", content: "Como Tomar Creatina" },
      { type: "paragraph", content: "Existem duas estratégias principais para usar a creatina: saturação e manutenção." },
      { type: "list", items: [
        "Fase de saturação (opcional): 20g por dia divididas em 4 doses por 5-7 dias. Resultados mais rápidos.",
        "Manutenção: 3-5g por dia continuamente. Resultados aparecem em 3-4 semanas.",
      ]},
      { type: "tip", content: "Dica: A creatina funciona melhor quando tomada com carboidratos, que aumentam a absorção através do pico de insulina. Tente tomar com suco ou após uma refeição." },
      { type: "heading", content: "Mitos e Verdades" },
      { type: "paragraph", content: "Mito: Creatina engorda. Verdade: Creatina não aumenta gordura corporal. Pode causar retenção de água intramuscular, o que aumenta o peso na balança, mas não é gordura." },
      { type: "paragraph", content: "Mito: Creatina prejudica os rins. Verdade: Estudos em pessoas saudáveis não mostram danos renais. Pessoas com problemas renais pré-existentes devem consultar um médico." },
      { type: "heading", content: "Conclusão" },
      { type: "paragraph", content: "A creatina é o suplemento com melhor relação custo-benefício do mercado. Com mais de 500 estudos comprovando sua eficácia e segurança, ela é essencial para qualquer pessoa que queira melhorar o desempenho físico e ganhar massa muscular." },
    ],
  },
  {
    id: "3",
    title: "Pré-Treino: Como Escolher e Usar Corretamente",
    slug: "pre-treino-como-escolher-e-usar-corretamente",
    excerpt: "Energia, foco e bombeamento. Aprenda a escolher o melhor pré-treino para seu objetivo e use de forma segura e eficaz.",
    author: "Equipe Suplex",
    date: "2026-06-05",
    readingTime: 8,
    category: "Pré-Treino",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80",
    keywords: ["pré-treino", "suplemento pré-treino", "energia treino", "cafeína", "beta-alanina"],
    content: [
      { type: "paragraph", content: "O pré-treino é um dos suplementos mais populares entre os praticantes de musculação. Mas você sabe o que ele faz exatamente e como escolher o melhor? Neste guia, vamos explicar tudo o que você precisa saber." },
      { type: "heading", content: "O que é um Pré-Treino?" },
      { type: "paragraph", content: "Pré-treinos são suplementos formulados para aumentar energia, foco, força e resistência durante o exercício. Eles combinam ingredientes que atuam em sinergia para melhorar o desempenho físico e mental." },
      { type: "heading", content: "Principais Ingredientes" },
      { type: "list", items: [
        "Cafeína: O ingrediente mais importante. Aumenta energia, foco e queima de gordura. Dose ideal: 150-300mg.",
        "Beta-Alanina: Retarda a fadiga muscular. Causa formigamento temporário (normal e inofensivo).",
        "L-Citrulina: Melhora o fluxo sanguíneo e o bombeamento muscular (pump).",
        "Creatina: Aumenta força e potência (alguns pré-treinos incluem).",
        "Taurina: Melhora a resistência e reduz o estresse oxidativo.",
        "Arginina: Precursor de óxido nítrico, melhora a vascularização.",
      ]},
      { type: "heading", content: "Como Escolher o Melhor Pré-Treino" },
      { type: "paragraph", content: "Ao escolher um pré-treino, verifique sempre a lista de ingredientes e suas doses. Evite produtos com 'blend proprietário' que não especificam a quantidade de cada ingrediente. Prefira produtos com doses clínicas comprovadas." },
      { type: "heading", content: "Como Usar com Segurança" },
      { type: "list", items: [
        "Comece com meia dose para avaliar sua tolerância à cafeína",
        "Não consumir após as 16h (pode prejudicar o sono)",
        "Não exceder a dose recomendada pelo fabricante",
        "Cicle o uso: 5 dias sim, 2 dias não, para evitar tolerância",
        "Não combine com outras fontes de cafeína",
      ]},
      { type: "heading", content: "Conclusão" },
      { type: "paragraph", content: "O pré-treino é uma ferramenta poderosa para melhorar o desempenho, mas deve ser usado com consciência. Escolha produtos de marcas confiáveis, respeite as doses e faça pausas para evitar tolerância." },
    ],
  },
  {
    id: "4",
    title: "BCAA vs Whey Protein: Qual a Diferença?",
    slug: "bcaa-vs-whey-protein-qual-a-diferenca",
    excerpt: "Qual suplemento escolher: BCAA ou Whey Protein? Entenda a diferença, benefícios e quando usar cada um.",
    author: "Equipe Suplex",
    date: "2026-05-28",
    readingTime: 7,
    category: "Aminoácidos",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    keywords: ["BCAA", "whey protein", "aminoácidos", "recuperação muscular", "suplementos"],
    content: [
      { type: "paragraph", content: "BCAA e Whey Protein são dois dos suplementos mais populares do mundo. Mas qual a diferença entre eles? Qual você deve tomar? Precisa dos dois? Vamos esclarecer todas essas dúvidas." },
      { type: "heading", content: "O que é BCAA?" },
      { type: "paragraph", content: "BCAA (Branched-Chain Amino Acids) são três aminoácidos de cadeia ramificada: Leucina, Isoleucina e Valina. Eles são chamados de essenciais porque o corpo não os produz, devendo ser obtidos através da alimentação ou suplementação." },
      { type: "heading", content: "O que é Whey Protein?" },
      { type: "paragraph", content: "Whey Protein é uma proteína completa extraída do soro do leite. Contém todos os 9 aminoácidos essenciais, incluindo os BCAAs. Em 30g de whey protein, você encontra cerca de 6-7g de BCAA naturalmente." },
      { type: "heading", content: "Principais Diferenças" },
      { type: "list", items: [
        "Whey Protein fornece proteína completa (todos os aminoácidos). BCAA fornece apenas 3 aminoácidos.",
        "Whey Protein tem mais calorias. BCAA tem zero calorias.",
        "Whey Protein é melhor para ganho de massa. BCAA é melhor para anti-catabolismo durante o treino.",
        "Whey Protein é mais barato por grama de proteína. BCAA é mais caro.",
      ]},
      { type: "heading", content: "Qual Escolher?" },
      { type: "paragraph", content: "Para a maioria das pessoas, o Whey Protein é a melhor escolha, pois fornece todos os aminoácidos necessários. O BCAA é mais útil em situações específicas: treinos em jejum, dietas muito restritivas, ou como intra-workout para reduzir o catabolismo." },
      { type: "tip", content: "Dica: Se você já toma Whey Protein, provavelmente não precisa de BCAA. O whey já contém BCAA em sua composição natural." },
    ],
  },
  {
    id: "5",
    title: "Como Ganhar Massa Muscular em 90 Dias",
    slug: "como-ganhar-massa-muscular-em-90-dias",
    excerpt: "Guia prático com treino, dieta e suplementação para ganhar massa muscular em 3 meses. Resultados reais com estratégia comprovada.",
    author: "Equipe Suplex",
    date: "2026-05-20",
    readingTime: 15,
    category: "Ganho de Massa",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    keywords: ["ganhar massa muscular", "hipertrofia", "ganho de massa", "treino musculação", "suplementos para massa"],
    content: [
      { type: "paragraph", content: "Ganhar massa muscular não é simples, mas com a estratégia certa é totalmente possível em 90 dias. Neste guia, vamos detalhar tudo o que você precisa: treino, dieta e suplementação." },
      { type: "heading", content: "Pilar 1: Treino" },
      { type: "paragraph", content: "O treino é o estímulo que diz ao seu corpo para construir músculo. Sem treino adequado, nenhum suplemento ou dieta vai funcionar. Foque em exercícios compostos (agachamento, supino, levantamento terra, barra fixa) com progressão de carga." },
      { type: "list", items: [
        "Treine 4-5 vezes por semana",
        "Foquem em exercícios compostos (multi-articulares)",
        "Use progressão de carga: aumente peso ou repetições a cada treino",
        "Faça 8-12 repetições por série (faixa de hipertrofia)",
        "Descanse 60-90 segundos entre séries",
        "Dê pelo menos 48h de descanso para cada grupo muscular",
      ]},
      { type: "heading", content: "Pilar 2: Dieta" },
      { type: "paragraph", content: "Para ganhar massa muscular, você precisa comer mais calorias do que gasta (superávit calórico). Mas não é só comer qualquer coisa - a qualidade dos alimentos importa." },
      { type: "list", items: [
        "Coma 300-500 calorias acima do seu gasto diário",
        "Consuma 1.6-2.2g de proteína por kg de peso corporal",
        "Carboidratos são essenciais para energia e recuperação",
        "Não fuja das gorduras - são importantes para hormônios",
        "Coma a cada 3-4 horas",
        "Hidrate-se: beba pelo menos 3-4 litros de água por dia",
      ]},
      { type: "heading", content: "Pilar 3: Suplementação" },
      { type: "paragraph", content: "Suplementos não são mágicos, mas podem acelerar seus resultados quando usados corretamente. Aqui estão os essenciais:" },
      { type: "list", items: [
        "Whey Protein: 25-50g pós-treino para recuperação muscular",
        "Creatina: 5g por dia para mais força e massa",
        "Hipercalórico: se tem dificuldade em comer o suficiente",
        "Multivitamínico: para garantir que não haja deficiências",
      ]},
      { type: "heading", content: "Pilar 4: Descanso" },
      { type: "paragraph", content: "O músculo não cresce no treino, cresce no descanso. Durma 7-9 horas por noite. O sono é quando o corpo libera o hormônio do crescimento, essencial para a hipertrofia." },
      { type: "tip", content: "Dica: O ZMA tomado antes de dormir pode melhorar a qualidade do sono e otimizar a recuperação muscular." },
      { type: "heading", content: "Cronograma de 90 Dias" },
      { type: "paragraph", content: "Mês 1: Adaptação e aprendizado dos exercícios. Foque na técnica e estabeleça a rotina. Mês 2: Aumente a intensidade e a carga. Comece a ver resultados. Mês 3: Máxima intensidade. Os resultados serão mais visíveis." },
    ],
  },
  {
    id: "6",
    title: "Suplementos para Emagrecimento: O Que Realmente Funciona",
    slug: "suplementos-para-emagrecimento-o-que-realmente-funciona",
    excerpt: "Termogênicos, L-carnitina, chá verde... Descubra quais suplementos para emagrecimento têm comprovação científica.",
    author: "Equipe Suplex",
    date: "2026-05-15",
    readingTime: 9,
    category: "Emagrecimento",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    keywords: ["suplementos para emagrecer", "termogênico", "queimador de gordura", "emagrecimento", "perda de peso"],
    content: [
      { type: "paragraph", content: "Existem centenas de suplementos para emagrecimento no mercado, mas quais realmente funcionam? Vamos analisar os que têm comprovação científica." },
      { type: "heading", content: "1. Termogênicos (Cafeína)" },
      { type: "paragraph", content: "A cafeína é o ingrediente ativo mais comprovado para queima de gordura. Ela aumenta o metabolismo em 3-11% e melhora o desempenho físico. Termogênicos combinam cafeína com outros ingredientes como chá verde e pimenta caiena." },
      { type: "heading", content: "2. Chá Verde (EGCG)" },
      { type: "paragraph", content: "O chá verde contém EGCG (epigalocatequina galato), um antioxidante que aumenta a oxidação de gordura. Estudos mostram que o chá verde pode aumentar a queima de gordura em 10-17%." },
      { type: "heading", content: "3. L-Carnitina" },
      { type: "paragraph", content: "A L-carnitina transporta ácidos graxos para dentro das mitocôndrias, onde são queimados para energia. Embora os resultados sejam modestos, pode ajudar quando combinada com exercício." },
      { type: "heading", content: "4. Proteína em Pó" },
      { type: "paragraph", content: "A suplementação de proteína não é apenas para ganho de massa. Ela aumenta a saciedade, preserva a massa magra durante o emagrecimento e tem efeito termogênico (o corpo gasta mais calorias para digerir proteína do que carboidratos ou gorduras)." },
      { type: "heading", content: "O Que NÃO Funciona" },
      { type: "list", items: [
        "Garcinia Cambogia: Evidências insuficientes",
        "Chá de Hibisco: Efeito mínimo, quase nulo",
        "Canela: Não tem efeito significativo na perda de peso",
        "Retroativos sem café: Marketing, não ciência",
      ]},
      { type: "heading", content: "A Verdade Sobre Emagrecimento" },
      { type: "paragraph", content: "Nenhum suplemento vai te fazer emagrecer sozinho. A base do emagrecimento é: déficit calórico + exercício + sono adequado. Suplementos podem ajudar 5-10%, mas os outros 90-95% vêm da dieta e do treino." },
      { type: "tip", content: "Dica: O melhor 'suplemento' para emagrecimento é a proteína em pó. Ela preserva massa magra, aumenta saciedade e tem efeito termogênico natural." },
    ],
  },
  {
    id: "7",
    title: "Colágeno Hidrolisado: Benefícios Comprovados para Pele e Articulações",
    slug: "colageno-hidrolisado-beneficios-comprovados",
    excerpt: "O colágeno realmente funciona? Veja o que a ciência diz sobre seus benefícios para pele, cabelo, unhas e articulações.",
    author: "Equipe Suplex",
    date: "2026-05-10",
    readingTime: 8,
    category: "Colágeno",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
    keywords: ["colágeno hidrolisado", "colágeno", "pele", "articulações", "cabelo", "unhas"],
    content: [
      { type: "paragraph", content: "O colágeno hidrolisado se tornou um dos suplementos mais populares do Brasil, especialmente entre mulheres. Mas será que realmente funciona? Vamos ver o que a ciência diz." },
      { type: "heading", content: "O que é Colágeno Hidrolisado?" },
      { type: "paragraph", content: "O colágeno é a proteína mais abundante do corpo humano, representando 30% de todas as proteínas. Ele forma a estrutura da pele, cabelo, unhas, ossos, articulações e músculos. A partir dos 30 anos, a produção natural diminui cerca de 1% ao ano." },
      { type: "paragraph", content: "O colágeno hidrolisado passa por um processo que quebra a proteína em peptídeos menores, facilitando a absorção pelo organismo." },
      { type: "heading", content: "Benefícios Comprovados" },
      { type: "list", items: [
        "Melhora a elasticidade e hidratação da pele em 15-30%",
        "Reduz rugas e linhas de expressão",
        "Fortalece cabelos e unhas",
        "Melhora a saúde articular e reduz dores",
        "Pode aumentar a massa muscular quando combinado com treino",
        "Auxilia na saúde óssea",
      ]},
      { type: "heading", content: "Como Tomar" },
      { type: "paragraph", content: "A dose recomendada é de 10-15g por dia. Pode ser dissolvido em água, suco, café ou vitaminas. O ideal é consumir em jejum pela manhã para melhor absorção. Resultados começam a aparecer em 4-12 semanas de uso contínuo." },
      { type: "tip", content: "Dica: Tome colágeno com vitamina C para potencializar a síntese de colágeno no corpo." },
    ],
  },
  {
    id: "8",
    title: "Hipercalórico Vale a Pena? Guia Completo",
    slug: "hipercalorico-vale-a-pena-guia-completo",
    excerpt: "Quem tem dificuldade em ganhar peso precisa do hipercalórico? Veja se vale a pena e como usar corretamente.",
    author: "Equipe Suplex",
    date: "2026-05-01",
    readingTime: 7,
    category: "Hipercalóricos",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    keywords: ["hipercalórico", "ganho de peso", "ganho de massa", "ectomorfo", "suplemento calórico"],
    content: [
      { type: "paragraph", content: "Se você é daqueles que come de tudo e não ganha peso, o hipercalórico pode ser a solução. Mas vale a pena? Vamos analisar." },
      { type: "heading", content: "O que é Hipercalórico?" },
      { type: "paragraph", content: "Hipercalóricos são suplementos de alta densidade calórica que combinam carboidratos, proteínas e gorduras. Uma única dose pode fornecer de 500 a 1000 calorias, facilitando o consumo calórico necessário para ganho de peso." },
      { type: "heading", content: "Para Quem é Indicado?" },
      { type: "list", items: [
        "Pessoas com metabolismo acelerado (ectomorfos)",
        "Atletas em fase de bulking",
        "Pessoas que não conseguem comer o suficiente",
        "Adolescentes em fase de crescimento",
      ]},
      { type: "heading", content: "Vale a Pena?" },
      { type: "paragraph", content: "Sim, para quem realmente tem dificuldade em ganhar peso. O hipercalórico facilita o consumo de calorias que seria difícil obter apenas com comida. No entanto, não substitui uma alimentação adequada - é um complemento." },
      { type: "heading", content: "Como Escolher" },
      { type: "paragraph", content: "Prefira hipercalóricos que usam carboidratos complexos (maltodextrina, palatinose) em vez de açúcares simples. Verifique a quantidade de proteína por dose - o ideal é pelo menos 20g. Evite produtos com excesso de açúcar." },
      { type: "tip", content: "Dica: Use o hipercalórico entre as refeições, não como substituto. E não se esqueça de treinar pesado!" },
    ],
  },

  // ============================================================
  // ✅ NOVO POST - Creatina: Guia Completo com Mitos e Verdades
  // ============================================================
  {
    id: "9",
    title: "Creatina: O Que É, Para Que Serve, Mitos e Verdades (Guia Completo 2026)",
    slug: "creatina-o-que-e-para-que-serve-mitos-e-verdades",
    excerpt: "Creatina faz mal aos rins? Causa queda de cabelo? Engorda? Descubra a verdade com base científica. Guia completo sobre o suplemento mais estudado do mundo: como tomar, dose certa, quem pode usar e tudo sobre mitos e verdades.",
    author: "Equipe Suplex",
    date: "2026-06-27",
    readingTime: 18,
    category: "Creatina",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80",
    keywords: [
      "creatina", "creatina monohidratada", "creatina para que serve", "creatina faz mal",
      "creatina engorda", "creatina rins", "creatina queda de cabelo", "creatina como tomar",
      "creatina mitos e verdades", "melhor creatina", "creatina creapure", "creatina antes ou depois do treino",
      "creatina efeitos colaterais", "creatina para idosos", "creatina para mulher",
      "creatina monohidratada para que serve", "creatina faz mal para os rins", "creatina causa queda de cabelo",
      "creatina é segura", "creatina dose diária", "creatina quanto tomar"
    ],
    content: [
      // ─── INTRODUÇÃO ───────────────────────────────────────────
      {
        type: "paragraph",
        content: "A creatina é o suplemento mais estudado da história da nutrição esportiva — mais de 700 estudos científicos publicados, e a conclusão é sempre a mesma: ela funciona, é segura e oferece o melhor custo-benefício do mercado. Mesmo assim, ela ainda carrega mitos e dúvidas que assustam muita gente. Neste guia completo, vamos responder as perguntas mais frequentes sobre creatina com base na ciência, sem enrolação."
      },

      // ─── O QUE É ──────────────────────────────────────────────
      { type: "heading", content: "O que é creatina e para que serve?" },
      {
        type: "paragraph",
        content: "A creatina é uma substância produzida naturalmente pelo próprio corpo humano — no fígado, rins e pâncreas — a partir de três aminoácidos: glicina, arginina e metionina. Ela também está presente em alimentos como carne vermelha e peixe. No músculo, ela é armazenada como fosfocreatina, funcionando como uma reserva de energia rápida usada durante exercícios intensos e de curta duração, como musculação, sprints e esportes explosivos."
      },
      {
        type: "paragraph",
        content: "Quando suplementamos creatina, aumentamos os estoques de fosfocreatina no músculo, o que permite treinar com mais intensidade, recuperar energia mais rápido entre séries e, com o tempo, ganhar mais força e massa muscular. É por isso que ela é o suplemento mais recomendado por nutricionistas e treinadores no mundo inteiro."
      },
      {
        type: "list",
        items: [
          "Aumenta a força e potência muscular em 10 a 20%",
          "Melhora o desempenho em exercícios explosivos (levantamento de peso, sprints, saltos)",
          "Acelera a recuperação entre séries e entre treinos",
          "Favorece o ganho de massa muscular ao longo do tempo",
          "Pode melhorar a função cognitiva e memória",
          "Tem efeitos benéficos documentados para idosos (preservação muscular e óssea)",
          "Pode reduzir a fadiga em esforços de alta intensidade",
        ]
      },
      {
        type: "quote",
        content: "A creatina é considerada pela ISSN (International Society of Sports Nutrition) o suplemento ergogênico nutricional mais eficaz disponível para atletas, com segurança comprovada tanto a curto quanto a longo prazo."
      },

      // ─── COMO FUNCIONA ────────────────────────────────────────
      { type: "heading", content: "Como a creatina age no corpo?" },
      {
        type: "paragraph",
        content: "Durante exercícios intensos, o corpo usa ATP (adenosina trifosfato) como principal fonte de energia. O ATP é quebrado em ADP (adenosina difosfato) liberando energia — mas esse estoque dura apenas alguns segundos. É aí que a fosfocreatina entra: ela doa um grupo fosfato ao ADP, regenerando o ATP rapidamente e permitindo que você continue treinando com alta intensidade por mais tempo."
      },
      {
        type: "paragraph",
        content: "Com mais fosfocreatina disponível nos músculos (resultado da suplementação), você consegue fazer mais repetições, levantar mais peso e ter menos queda de desempenho ao longo do treino. Com o tempo, isso se traduz em mais hipertrofia e mais força."
      },
      {
        type: "tip",
        content: "A creatina não é um anabolizante. Ela não interfere em hormônios. Seu mecanismo é puramente energético — ela recarrega o combustível do músculo durante o treino."
      },

      // ─── TIPOS DE CREATINA ────────────────────────────────────
      { type: "heading", content: "Quais são os tipos de creatina? Qual a melhor?" },
      {
        type: "paragraph",
        content: "Existem vários tipos de creatina no mercado, mas a ciência é clara: a creatina monohidratada é a forma mais estudada, mais segura e tão eficaz quanto qualquer outra. Não existe evidência científica de que formas mais caras (como creatina HCL, tampão ou etil éster) sejam superiores."
      },
      {
        type: "list",
        items: [
          "Creatina Monohidratada: a forma clássica, mais estudada e com melhor custo-benefício. É a recomendação número 1 da ciência.",
          "Creatina Creapure: é creatina monohidratada com certificado de pureza alemão (99,9% de pureza). Considerada o padrão ouro de qualidade.",
          "Creatina Micronizada: mesma composição da monohidratada, porém com partículas menores que dissolvem melhor na água.",
          "Creatina HCL: alega maior absorção com doses menores, mas sem vantagem comprovada sobre a monohidratada.",
          "Creatina Alcalina: marketing sem suporte científico sólido que a diferencie da monohidratada.",
          "Creatina em cápsula: mesma creatina monohidratada em formato diferente. Prática, mas mais cara por grama.",
        ]
      },
      {
        type: "tip",
        content: "Dica de ouro: priorize creatina monohidratada com Selo Creapure ou laudos de pureza aprovados pela ABENUTRI. São as mais seguras e com qualidade comprovada."
      },

      // ─── COMO TOMAR ───────────────────────────────────────────
      { type: "heading", content: "Como tomar creatina? Qual a dose certa?" },
      {
        type: "paragraph",
        content: "A dose padrão recomendada pela ciência é de 3 a 5 gramas por dia, todos os dias — inclusive nos dias sem treino. Não é necessário fazer a fase de saturação (20g/dia por 5-7 dias), mas ela pode acelerar os resultados iniciais para quem quer sentir o efeito mais rápido."
      },
      {
        type: "list",
        items: [
          "Dose diária padrão: 3 a 5 gramas (equivale a 1 scoop ou 1 colher de chá rasa)",
          "Com saturação: 20g por dia divididos em 4 doses por 5-7 dias, depois 3-5g/dia de manutenção",
          "Sem saturação: 3-5g/dia direto, com resultado em 3 a 4 semanas",
          "Tome todos os dias, inclusive nos dias sem treino — a consistência é fundamental",
          "Pode ser tomada com água, suco, leite, whey ou café — qualquer líquido funciona",
          "Por peso corporal: 0,03g por kg (ex: 80kg = 2,4g, arredonde para 3g)",
        ]
      },

      // ─── ANTES OU DEPOIS ──────────────────────────────────────
      { type: "heading", content: "Creatina: antes ou depois do treino?" },
      {
        type: "paragraph",
        content: "Estudos indicam que tomar creatina logo após o treino pode ter uma leve vantagem em relação ao pré-treino, possivelmente porque o músculo está mais receptivo a absorver nutrientes nesse momento. Porém, a diferença é pequena e o mais importante é tomar todos os dias, na hora que for mais conveniente para você. O horário exato importa muito menos do que a consistência diária."
      },
      {
        type: "tip",
        content: "Se quiser seguir a ciência: tome creatina após o treino nos dias que treinar, e em qualquer horário nos dias de descanso. O mais importante é não esquecer de tomar."
      },

      // ─── MITOS E VERDADES ─────────────────────────────────────
      { type: "heading", content: "Mitos e Verdades sobre a Creatina" },
      {
        type: "paragraph",
        content: "A creatina é um dos suplementos mais mal compreendidos do mercado. Veja abaixo os mitos mais comuns e o que a ciência realmente diz:"
      },

      { type: "heading", content: "❌ MITO: Creatina faz mal aos rins" },
      {
        type: "paragraph",
        content: "VERDADE: Não faz. Este é o mito mais difundido e o mais refutado pela ciência. Dezenas de estudos em pessoas saudáveis, incluindo uso de longo prazo (anos), não mostraram nenhum dano renal. A confusão acontece porque a creatina aumenta os níveis de creatinina no sangue — um subproduto do metabolismo da creatina — e médicos menos informados podem interpretar isso como sinal de problema renal. Na prática, é apenas um efeito esperado e inofensivo. Pessoas com doença renal pré-existente devem consultar um médico antes de usar."
      },

      { type: "heading", content: "❌ MITO: Creatina causa queda de cabelo" },
      {
        type: "paragraph",
        content: "VERDADE: Não há evidência científica robusta que confirme isso. Essa teoria veio de um único estudo de 2009 que mostrou aumento nos níveis de DHT (diidrotestosterona) em jogadores de rúgbi após uso de creatina. DHT é um hormônio que, em pessoas geneticamente predispostas, pode acelerar a queda de cabelo. Porém, esse estudo nunca foi replicado, não mediu queda de cabelo real e usou uma dose específica de carregamento. A maioria dos especialistas considera a evidência fraca demais para tirar conclusões. Não existe nenhum estudo que tenha medido queda de cabelo real em usuários de creatina."
      },

      { type: "heading", content: "❌ MITO: Creatina engorda" },
      {
        type: "paragraph",
        content: "VERDADE: Creatina não aumenta gordura corporal. O que ela pode causar é uma retenção de água intramuscular — o músculo retém mais água junto com a creatina. Isso pode aumentar o peso na balança em 1 a 2 kg, mas é água dentro do músculo, não gordura. Esse efeito é temporário e, na prática, faz o músculo parecer mais cheio e volumoso. Se parar de usar creatina, esse peso some em poucos dias."
      },

      { type: "heading", content: "❌ MITO: Creatina é anabolizante" },
      {
        type: "paragraph",
        content: "VERDADE: Creatina não é anabolizante. Ela não é um hormônio, não interfere no sistema endócrino e não tem nenhuma relação com esteroides. É um suplemento alimentar derivado de aminoácidos, produzido naturalmente pelo próprio corpo. A ANVISA classifica a creatina como suplemento alimentar, não como medicamento ou substância controlada."
      },

      { type: "heading", content: "❌ MITO: Creatina causa acne e espinhas" },
      {
        type: "paragraph",
        content: "VERDADE: Não existe evidência científica que relacione o uso de creatina com aparecimento de acne. Espinhas são causadas principalmente por fatores como genética, hormônios, oleosidade da pele e bactérias. Se você notou aumento de acne ao usar creatina, provavelmente coincidiu com outros fatores."
      },

      { type: "heading", content: "❌ MITO: Creatina não funciona para mulheres" },
      {
        type: "paragraph",
        content: "VERDADE: Creatina funciona igualmente bem para mulheres. Os estudos incluem participantes de ambos os sexos com resultados consistentes. Mulheres tendem a ter estoques naturais de creatina menores que homens, o que pode tornar a suplementação ainda mais impactante para elas."
      },

      { type: "heading", content: "❌ MITO: Creatina faz mal ao coração" },
      {
        type: "paragraph",
        content: "VERDADE: Não há evidência de que creatina cause problemas cardíacos em pessoas saudáveis. Pelo contrário, algumas pesquisas sugerem benefícios para o músculo cardíaco, especialmente em pacientes com insuficiência cardíaca. Pessoas com condições cardíacas pré-existentes devem sempre consultar seu médico antes de usar qualquer suplemento."
      },

      { type: "heading", content: "✅ VERDADE: Creatina deve ser tomada todos os dias" },
      {
        type: "paragraph",
        content: "Sim, a creatina deve ser tomada todos os dias, inclusive nos dias sem treino. Isso é necessário para manter os estoques musculares saturados. Pular os dias de descanso reduz a eficácia da suplementação."
      },

      { type: "heading", content: "✅ VERDADE: Creatina tem benefícios para o cérebro" },
      {
        type: "paragraph",
        content: "Estudos mostram que a creatina pode melhorar a memória de curto prazo, raciocínio e função cognitiva, especialmente em situações de privação de sono ou em vegetarianos (que têm estoques naturais menores). O cérebro também usa ATP como energia e se beneficia do aumento dos estoques de fosfocreatina."
      },

      { type: "heading", content: "✅ VERDADE: Creatina é especialmente benéfica para idosos" },
      {
        type: "paragraph",
        content: "A creatina é especialmente benéfica para pessoas acima de 50 anos. Com o envelhecimento, ocorre perda natural de massa muscular (sarcopenia) e os estoques de creatina diminuem. A suplementação ajuda a preservar a massa muscular, melhora a força funcional, a saúde óssea e pode ter efeitos protetores no cérebro em idosos."
      },

      // ─── QUEM PODE E QUEM NÃO PODE ───────────────────────────
      { type: "heading", content: "Quem pode e quem não pode tomar creatina?" },
      {
        type: "paragraph",
        content: "A creatina é segura para a grande maioria da população. Veja os grupos específicos:"
      },
      {
        type: "list",
        items: [
          "✅ Adultos saudáveis: podem tomar sem restrições",
          "✅ Mulheres: podem e se beneficiam igualmente aos homens",
          "✅ Idosos: especialmente indicada — ajuda a combater a sarcopenia",
          "✅ Vegetarianos e veganos: se beneficiam ainda mais, pois consomem pouca creatina na dieta",
          "✅ Pessoas com diabetes controlada: podem usar, mas devem monitorar com o médico",
          "✅ Pessoas com pressão alta controlada: geralmente podem usar, mas devem consultar o médico",
          "⚠️ Pessoas com doença renal: devem evitar ou usar apenas com acompanhamento médico",
          "⚠️ Grávidas e lactantes: por precaução, recomenda-se evitar ou consultar o médico",
          "⚠️ Menores de 18 anos: não há estudos suficientes — recomendação é aguardar a maioridade",
          "⚠️ Pessoas com doenças hepáticas graves: devem consultar o médico antes",
        ]
      },

      // ─── COMO ESCOLHER ────────────────────────────────────────
      { type: "heading", content: "Como escolher uma boa creatina? Como saber se é pura?" },
      {
        type: "paragraph",
        content: "O mercado brasileiro tem marcas de qualidade variável. Veja o que observar na hora de comprar:"
      },
      {
        type: "list",
        items: [
          "Procure o Selo Creapure: indica que a creatina é fabricada na Alemanha com 99,9% de pureza e rastreabilidade total",
          "Verifique os laudos da ABENUTRI: o site abenutri.org publica análises independentes de creatina no Brasil",
          "Ingredientes: a lista deve ter apenas um ingrediente — Creatine Monohydrate (creatina monohidratada)",
          "Marcas com laudos aprovados: Dark Lab, Soldiers Nutrition, Dux Nutrition, Vitafor Creapure, Integral Médica, Growth Supplements, Nutrify Creapure, entre outras",
          "Evite marcas sem laudo disponível ou reprovadas em testes independentes",
          "Teste caseiro (não definitivo): creatina pura dissolve bem em água quente e não tem cheiro ou sabor intenso",
        ]
      },
      {
        type: "quote",
        content: "Creatina reprovada em análise geralmente contém menos creatina do que o declarado no rótulo, ou apresenta impurezas. Sempre verifique os laudos antes de comprar."
      },

      // ─── FAQ ──────────────────────────────────────────────────
      { type: "heading", content: "Perguntas Frequentes sobre Creatina (FAQ)" },

      { type: "heading", content: "Creatina quebra o jejum intermitente?" },
      {
        type: "paragraph",
        content: "A creatina pura tem zero calorias e zero carboidratos, portanto tecnicamente não quebra o jejum no sentido metabólico. Porém, como ela pode estimular respostas celulares (via mTOR), alguns especialistas mais rígidos recomendam tomar fora da janela de jejum. Para a maioria das práticas de jejum com foco em perda de gordura, tomar creatina em jejum não representa um problema."
      },

      { type: "heading", content: "Pode tomar creatina com café?" },
      {
        type: "paragraph",
        content: "Sim. Não há problema em misturar creatina com café. Antigas pesquisas sugeriam que a cafeína poderia interferir na absorção da creatina, mas estudos mais recentes não confirmam esse efeito. Se for mais prático para você tomar junto com o café da manhã, pode fazê-lo sem preocupação."
      },

      { type: "heading", content: "Pode tomar creatina com whey protein?" },
      {
        type: "paragraph",
        content: "Sim, é uma das combinações mais populares e eficientes. Creatina e whey protein podem ser tomados juntos sem nenhuma interação negativa. Misturá-los no pós-treino é prático e potencializa tanto a recuperação muscular quanto o reabastecimento de energia."
      },

      { type: "heading", content: "Creatina vencida faz mal?" },
      {
        type: "paragraph",
        content: "Creatina vencida não é perigosa, mas pode ter perdido parte da eficácia. Com o tempo, a creatina se degrada em creatinina, um subproduto inativo. Uma creatina vencida pode simplesmente ser menos eficaz, não necessariamente prejudicial à saúde."
      },

      { type: "heading", content: "Creatina empedrada pode ser tomada?" },
      {
        type: "paragraph",
        content: "Sim. A creatina empedra quando absorve umidade do ambiente, mas isso não afeta sua qualidade ou segurança. Para desfazê-la, basta machucar os torrões com uma colher. Para evitar, mantenha o pote bem fechado e longe de umidade."
      },

      { type: "heading", content: "Quantas gramas de creatina tomar por dia?" },
      {
        type: "paragraph",
        content: "A dose padrão é de 3 a 5 gramas por dia para a maioria das pessoas. Alguns protocolos baseados em peso corporal sugerem 0,03g por kg — ou seja, para uma pessoa de 80kg, seriam 2,4g, que arredonda para 3g. Não há benefício comprovado em tomar mais de 5g por dia na fase de manutenção."
      },

      { type: "heading", content: "Em quanto tempo a creatina faz efeito?" },
      {
        type: "paragraph",
        content: "Sem fase de saturação, os efeitos começam a aparecer em 3 a 4 semanas de uso diário. Com a fase de saturação (20g/dia por 5-7 dias), os resultados podem ser sentidos em 5 a 7 dias. A melhora de força e desempenho costuma ser percebida antes do ganho visual de massa muscular."
      },

      { type: "heading", content: "O que acontece se parar de tomar creatina?" },
      {
        type: "paragraph",
        content: "Ao parar de tomar creatina, os estoques musculares voltam aos níveis normais em 4 a 6 semanas. Você pode perder de 1 a 2 kg de peso (água intramuscular) e notar leve redução na força e no volume muscular. Você não perde a massa muscular real construída durante o uso — apenas o efeito de retenção hídrica intramuscular."
      },

      { type: "heading", content: "Creatina pode ser tomada antes de dormir?" },
      {
        type: "paragraph",
        content: "Sim. A creatina não tem cafeína e não interfere no sono. Pode ser tomada em qualquer horário, inclusive à noite. Se isso for mais conveniente para a sua rotina, não há contraindicação."
      },

      { type: "heading", content: "Idosos podem tomar creatina?" },
      {
        type: "paragraph",
        content: "Não só podem como é especialmente recomendada para pessoas acima de 50 anos. A sarcopenia (perda de massa muscular com o envelhecimento) é um sério problema de saúde, e a creatina é um dos suplementos com mais evidências para combatê-la. Estudos mostram melhora de força, mobilidade e até função cognitiva em idosos que usam creatina."
      },

      { type: "heading", content: "Creatina em cápsula ou em pó — qual é melhor?" },
      {
        type: "paragraph",
        content: "A eficácia é a mesma — o que muda é a praticidade e o preço. A creatina em pó é mais barata por grama e permite ajustar a dose com precisão. A cápsula é mais conveniente para levar na bolsa e evita medir a quantidade. Se o orçamento permitir, ambas funcionam igual."
      },

      { type: "heading", content: "Creatina serve para emagrecer?" },
      {
        type: "paragraph",
        content: "Diretamente, não. A creatina não é um suplemento termogênico e não queima gordura. No entanto, ela ajuda indiretamente: ao aumentar a força e o desempenho no treino, você treina mais intenso e gasta mais calorias. Além disso, o ganho de massa muscular aumenta o metabolismo basal, ajudando no emagrecimento a longo prazo."
      },

      { type: "heading", content: "Creatina tem efeitos colaterais?" },
      {
        type: "paragraph",
        content: "Em pessoas saudáveis usando doses recomendadas (3-5g/dia), os efeitos colaterais são raros e leves. Os mais relatados são desconforto gastrointestinal (náusea ou cólica), especialmente quando tomada em jejum ou em doses muito altas. Para evitar, tome com alimentos e mantenha boa hidratação. Aumente a ingestão de água ao usar creatina, pois ela puxa mais água para os músculos."
      },

      // ─── CONCLUSÃO ────────────────────────────────────────────
      { type: "heading", content: "Vale a pena tomar creatina?" },
      {
        type: "paragraph",
        content: "Sim — e com muita margem. A creatina monohidratada é o suplemento com a melhor relação custo-benefício-segurança do mercado. Com centenas de estudos validando sua eficácia, recomendação da ISSN e classificação da ANVISA como suplemento seguro, e preço acessível, não há motivo para quem treina ignorá-la."
      },
      {
        type: "paragraph",
        content: "Os mitos sobre danos aos rins, queda de cabelo e outros efeitos colaterais graves não têm respaldo científico sólido em pessoas saudáveis. A creatina é, literalmente, algo que seu próprio corpo já produz naturalmente. A suplementação apenas aumenta os estoques musculares além do que a dieta e a produção natural conseguem fornecer."
      },
      {
        type: "tip",
        content: "Resumo final: tome 3-5g de creatina monohidratada por dia, todos os dias, no horário que for mais fácil de lembrar. Prefira marcas com laudo de pureza aprovado. Beba bastante água. E treine bem — a creatina potencializa o treino, mas não o substitui."
      },
    ],
  },
]

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category)
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(p => p.id !== currentPost.id && (p.category === currentPost.category || p.keywords.some(k => currentPost.keywords.includes(k))))
    .slice(0, limit)
}