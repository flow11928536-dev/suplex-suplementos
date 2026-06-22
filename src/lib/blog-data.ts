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
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80", // 🖼️ IMAGEM DO ARTIGO
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
      { type: "paragraph", content: "Sim, para quem realmente tem dificuldade em ganhar peso. O hipercalórico facilita o consumo de calorias que seria difícil obter apenas com comida. No entanto, não substitve uma alimentação adequada - é um complemento." },
      { type: "heading", content: "Como Escolher" },
      { type: "paragraph", content: "Prefira hipercalóricos que usam carboidratos complexos (maltodextrina, palatinose) em vez de açúcares simples. Verifique a quantidade de proteína por dose - o ideal é pelo menos 20g. Evite produtos com excesso de açúcar." },
      { type: "tip", content: "Dica: Use o hipercalórico entre as refeições, não como substituto. E não se esqueça de treinar pesado!" },
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
