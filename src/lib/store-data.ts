// ============================================================
// DADOS DOS PRODUTOS - SITE DE AFILIADOS DE SUPLEMENTOS
// ============================================================
// 📝 INSTRUÇÕES PARA EDIÇÃO:
// - Para cada produto, substitua o campo "affiliateLink" pelo seu link de afiliado do Mercado Livre
// - Substitua o campo "image" pela URL da imagem do produto
// - Adicione/remova produtos conforme necessário
// ============================================================

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categoryName: string
  affiliateLink: string // 🔗 LINK DE AFILIADO - Substitua pelo seu link do Mercado Livre
  image: string // 🖼️ IMAGEM DO PRODUTO - Substitua pela URL da imagem
  badge?: string
  sold?: string
  rating: number
  reviews: number
  shortDescription: string
  description: string
  benefits: string[]
  howToUse: string
  ingredients?: string
  whoShouldUse?: string
  faq?: { question: string; answer: string }[]
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  image: string // 🖼️ IMAGEM DA CATEGORIA
  description: string
  longDescription: string
  subcategories?: { name: string; slug: string }[]
}

// ============================================================
// CATEGORIAS
// ============================================================

export const categories: Category[] = [
  {
    id: "1",
    name: "Whey Protein",
    slug: "whey-protein",
    icon: "🥤",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    description: "Proteínas para ganho de massa muscular",
    longDescription: "O Whey Protein é o suplemento proteico mais popular do mundo, extraído do soro do leite. É a forma mais rápida e eficiente de fornecer aminoácidos essenciais para os músculos, promovendo hipertrofia, recuperação e performance. Existem três tipos principais: concentrado, isolado e hidrolisado, cada um com características específicas de absorção e pureza.",
    subcategories: [
      { name: "Whey Concentrado", slug: "whey-concentrado" },
      { name: "Whey Isolado", slug: "whey-isolado" },
      { name: "Whey Hidrolisado", slug: "whey-hidrolisado" },
      { name: "Whey Vegano", slug: "whey-vegano" },
    ],
  },
  {
    id: "2",
    name: "Creatina",
    slug: "creatina",
    icon: "💪",
    image: "/images/categorias/creatina-icone.webp",
    description: "Força, potência e performance",
    longDescription: "A creatina é um dos suplementos mais estudados e comprovados cientificamente do mundo. Ela aumenta os níveis de fosfocreatina nos músculos, fornecendo energia rápida para exercícios de alta intensidade. Resulta em mais força, potência, volume muscular e recuperação acelerada.",
  },
  {
    id: "3",
    name: "Pré-Treino",
    slug: "pre-treino",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=400&q=80",
    description: "Energia e foco para treinos intensos",
    longDescription: "Pré-treinos são suplementos formulados para aumentar energia, foco, força e resistência durante o exercício. Contêm ingredientes como cafeína, beta-alanina, citrulina e taurina que potencializam o desempenho físico e mental.",
  },
  {
    id: "4",
    name: "Aminoácidos",
    slug: "aminoacidos",
    icon: "🧬",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    description: "BCAA, Glutamina e EAA",
    longDescription: "Aminoácidos são os blocos construtores das proteínas. Suplementos como BCAA e Glutamina ajudam na recuperação muscular, reduzem o catabolismo e melhoram a performance. Essenciais para quem treina pesado.",
    subcategories: [
      { name: "BCAA", slug: "bcaa" },
      { name: "Glutamina", slug: "glutamina" },
      { name: "EAA", slug: "eaa" },
    ],
  },
  {
    id: "5",
    name: "Hipercalóricos",
    slug: "hipercaloricos",
    icon: "🍔",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    description: "Ganho de peso e massa",
    longDescription: "Hipercalóricos são suplementos de alta densidade calórica que combinam carboidratos, proteínas e gorduras boas. Ideais para pessoas que têm dificuldade em ganhar peso ou querem acelerar o ganho de massa muscular.",
  },
  {
    id: "6",
    name: "Vitaminas e Minerais",
    slug: "vitaminas-e-minerais",
    icon: "💊",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80",
    description: "Multivitamínicos e suplementos essenciais",
    longDescription: "Vitaminas e minerais são micronutrientes essenciais para o funcionamento do organismo. Suplementação garante que você atinja as doses diárias recomendadas, prevenindo deficiências e otimizando a saúde.",
    subcategories: [
      { name: "Multivitamínicos", slug: "multivitaminicos" },
      { name: "Vitamina C", slug: "vitamina-c" },
      { name: "Vitamina D", slug: "vitamina-d" },
      { name: "Ômega 3", slug: "omega-3" },
      { name: "ZMA", slug: "zma" },
    ],
  },
  {
    id: "7",
    name: "Emagrecimento",
    slug: "emagrecimento",
    icon: "🔥",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    description: "Termogênicos e queimadores de gordura",
    longDescription: "Suplementos termogênicos aceleram o metabolismo, aumentam a queima de gordura e proporcionam mais energia. Quando combinados com dieta e exercício, potencializam a perda de peso.",
  },
  {
    id: "8",
    name: "Colágeno",
    slug: "colageno",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    description: "Pele, cabelo, unhas e articulações",
    longDescription: "O colágeno hidrolisado é a proteína mais abundante do corpo. Sua suplementação melhora a elasticidade da pele, fortalece cabelos e unhas, e protege as articulações. Essencial a partir dos 30 anos.",
  },
  {
    id: "9",
    name: "Snacks e Barras",
    slug: "snacks-e-barras",
    icon: "🍫",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
    description: "Proteínas práticas para o dia a dia",
    longDescription: "Barras de proteína e snacks são opções práticas para levar proteína onde quiser. Perfeitos para pré ou pós-treino, lanche da tarde ou quando precisa de uma refeição rápida e nutritiva.",
  },
  {
    id: "10",
    name: "Acessórios",
    slug: "acessorios",
    icon: "🏋️",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    description: "Coqueteleiras, shakers e muito mais",
    longDescription: "Acessórios para complementar sua rotina de suplementação: coqueteleiras, shakers, medidores e outros itens que facilitam o consumo dos seus suplementos.",
  },
]

// ============================================================
// PRODUTOS - MAIS VENDIDOS NO BRASIL
// ============================================================

export const products: Product[] = [
 {
  id: "1",
  name: "W100 Whey Concentrado Pouch 900g Cookies & Cream Nutrata",
  slug: "w100-whey-concentrado-900g-cookies-cream-nutrata",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/1ccBUUV",
  image: "/images/produtos/w100-whey-concentrado-900g-cookies-cream-nutrata.webp",
  badge: "Mais Vendido",
  rating: 4.8,
  reviews: 7323,
  shortDescription: "Whey Concentrado 100% WPC com 20g de proteína por dose, Low Carb, baixo teor de sódio e livre de acessulfame K e aspartame.",
  description: "O W100 Whey Concentrado da Nutrata é elaborado com 100% WPC (Proteína Concentrada do Soro do Leite), produzido pelo processo CFM (Cross-Flow Microfiltration), que filtra o soro do leite a frio preservando todos os peptídeos bioativos. Com mais de 10 mil unidades vendidas e 1º lugar na categoria no Mercado Livre, é um dos wheys mais confiáveis do Brasil. Possui alto valor nutricional, elevado teor de aminoácidos essenciais com destaque para os de cadeia ramificada (BCAAs), auxiliando diretamente no ganho de massa muscular. Sua fórmula é Low Carb, com baixo teor de sódio e livre de adoçantes artificiais como acessulfame K e aspartame.",
  benefits: [
    "100% WPC - Proteína Concentrada do Soro do Leite",
    "20g de proteína por dose com alto valor biológico",
    "Elevado teor de aminoácidos essenciais e BCAAs",
    "Low Carb - baixo teor de carboidratos",
    "Baixo teor de sódio",
    "Livre de acessulfame K e aspartame",
    "Peptídeos bioativos do soro preservados",
    "Mais de 10 mil vendidos - 1º lugar no Mercado Livre",
    "Processo CFM - filtrado a frio",
  ],
  howToUse: "Diluir 30g (2 colheres dosadoras) em 200ml de água. Consumir 1 a 2 porções ao dia, preferencialmente após o treino, ou conforme orientação do nutricionista ou médico. Recomendado consumir junto com alimentos para facilitar a assimilação.",
  ingredients: "Proteína concentrada do soro do leite (CFM), aroma idêntico ao natural de baunilha, espessante goma xantana, acidulante ácido cítrico, antiumectante dióxido de silício e edulcorante sucralose. Não contém glúten. Contém lactose. Alérgicos: contém derivados de leite e soja. Aromatizado artificialmente.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação acima de 19 anos que buscam ganho de massa muscular, recuperação pós-treino e aumento da ingestão proteica diária. Pessoas com intolerância à lactose devem evitar este produto.",
  faq: [
    {
      question: "O W100 contém glúten?",
      answer: "Não. O W100 Whey Concentrado Nutrata é livre de glúten, porém contém lactose e derivados de leite e soja."
    },
    {
      question: "Quantas doses tem na embalagem de 900g?",
      answer: "A embalagem de 900g rende aproximadamente 30 doses de 30g cada."
    },
    {
      question: "O W100 tem adoçantes artificiais?",
      answer: "É livre de acessulfame K e aspartame. Utiliza apenas sucralose como edulcorante."
    },
    {
      question: "Pode tomar com leite?",
      answer: "Pode, mas a sugestão do fabricante é diluir em água. Com leite o sabor fica mais cremoso e aumenta o valor proteico da dose."
    },
    {
      question: "Qual a idade mínima recomendada?",
      answer: "A idade mínima recomendada pelo fabricante é 19 anos."
    },
  ],
},
  {
  id: "2",
  name: "Whey Protein Concentrado 1kg Chocolate Belga Soldiers Nutrition",
  slug: "whey-protein-concentrado-1kg-chocolate-belga-soldiers-nutrition",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/2wwWPof",
  image: "/images/produtos/whey-protein-concentrado-1kg-chocolate-belga-soldiers-nutrition.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  rating: 4.8,
  reviews: 28049,
  shortDescription: "Whey Concentrado 100% importado com matéria-prima de alta qualidade, rico em proteínas e aminoácidos essenciais para hipertrofia.",
  description: "O Whey Protein Concentrado da Soldiers Nutrition é 100% importado, com laudo de fabricação e matéria-prima de altíssima qualidade. Com 1kg de proteína concentrada no sabor Chocolate Belga, é um dos wheys mais vendidos do Brasil com mais de 100 mil unidades vendidas e 3º lugar em Suplementos Alimentares no Mercado Livre. Sua fórmula fornece uma combinação completa de aminoácidos essenciais que otimizam o crescimento muscular, favorecem a reparação muscular pós-treino e mantêm a massa magra. Além disso, atua como antioxidante e apoia o sistema imunológico. Não contém glúten e é dispensado de registro conforme RDC nº27/2010.",
  benefits: [
    "100% importado com laudo de fabricação",
    "Mais de 100 mil vendidos - 3º em Suplementos Alimentares no Mercado Livre",
    "Combinação completa de aminoácidos essenciais",
    "Otimiza o crescimento e hipertrofia muscular",
    "Mantém a massa muscular magra",
    "Favorece a reparação muscular pós-treino",
    "Papel antioxidante e suporte imunológico",
    "Não contém glúten",
  ],
  howToUse: "Diluir 50g (3 colheres de sopa) em 300ml de água ou leite. Consumir 1 a 2 porções ao dia, preferencialmente após o treino, ou conforme orientação do nutricionista ou médico.",
  ingredients: "Proteína concentrada do soro do leite 100% importada, cacau em pó Chocolate Belga, aromatizantes. Não contém glúten. Registro isento conforme RDC 27/2010 e RDC 240/2018.",
  whoShouldUse: "Indicado para praticantes de musculação e esportes de força que buscam ganho de massa muscular, recuperação pós-treino e aumento da ingestão proteica diária.",
  faq: [
    {
      question: "O Whey Soldiers Nutrition tem glúten?",
      answer: "Não. O produto é livre de glúten, conforme indicado pelo fabricante."
    },
    {
      question: "Quantas doses tem na embalagem de 1kg?",
      answer: "A embalagem de 1kg rende aproximadamente 20 doses de 50g cada."
    },
    {
      question: "O produto tem registro na ANVISA?",
      answer: "O produto é isento de registro conforme RDC nº27 de agosto de 2010 e RDC 240/2018, o que é totalmente legal e comum para suplementos alimentares no Brasil."
    },
    {
      question: "A matéria-prima é realmente importada?",
      answer: "Sim. A Soldiers Nutrition utiliza proteína concentrada do soro do leite 100% importada, com laudo de fabricação que comprova a qualidade da matéria-prima."
    },
  ],
},
  {
  id: "3",
  name: "Whey Protein Ultra Refil 900g Baunilha FTW",
  slug: "whey-protein-ultra-refil-900g-baunilha-ftw",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/2yg8dxf",
  image: "/images/produtos/whey-protein-ultra-refil-900g-baunilha-ftw.webp",
  badge: "Mais Vendido",
  rating: 4.8,
  reviews: 28877,
  shortDescription: "Whey Concentrado com 15g de proteína e 7,6g de EAAs por dose, sabor Baunilha. Mais de 10 mil vendidos.",
  description: "O Whey Ultra Protein FTW é um suplemento proteico em pó formulado com proteína concentrada do soro do leite (WPC). Com mais de 10 mil unidades vendidas e 3º lugar em Suplementos Alimentares FTW no Mercado Livre, é uma das opções mais acessíveis e eficientes do mercado. Cada porção de 60g fornece 15g de proteína e 7,6g de aminoácidos essenciais (EAAs), contribuindo para complementar a ingestão diária de proteínas, especialmente em dietas voltadas à prática esportiva. A embalagem refil de 900g rende cerca de 15 porções. Não contém glúten.",
  benefits: [
    "15g de proteína por porção",
    "7,6g de aminoácidos essenciais (EAAs) por dose",
    "Mais de 10 mil vendidos - 3º em Suplementos Alimentares FTW",
    "Formulado com WPC - proteína concentrada do soro do leite",
    "Não contém glúten",
    "Rende cerca de 15 porções por embalagem",
    "Ideal para consumo no pós-treino",
  ],
  howToUse: "Diluir 3 medidas dosadoras (60g) em 200ml de água ou leite gelado. Misturar bem até completa dissolução. Consumir preferencialmente após o treino ou conforme recomendação de profissional habilitado.",
  ingredients: "Proteína do soro do leite concentrado (WPC), maltodextrina, espessante goma xantana, edulcorantes sucralose e acessulfame de potássio, corante e aromatizante idêntico ao natural. Não contém glúten. Contém lactose.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que praticam atividades físicas e buscam complementar a ingestão diária de proteínas. Não indicado para gestantes, lactantes ou crianças sem orientação profissional.",
  faq: [
    {
      question: "O Whey FTW Ultra contém glúten?",
      answer: "Não. O produto é livre de glúten, porém contém lactose."
    },
    {
      question: "Quantas porções tem a embalagem de 900g?",
      answer: "A embalagem rende cerca de 15 porções de 60g cada."
    },
    {
      question: "Qual a idade mínima recomendada?",
      answer: "O produto é indicado para adultos maiores de 19 anos."
    },
    {
      question: "Pode ser consumido por gestantes?",
      answer: "Não. Gestantes, lactantes e crianças não devem consumir sem orientação de profissional habilitado."
    },
    {
      question: "Após aberto, quanto tempo dura o produto?",
      answer: "Após aberto, consumir em até 30 dias. Conservar em local seco, fresco e ao abrigo da luz e umidade."
    },
  ],
},
  {
  id: "4",
  name: "Whey Concentrado W100 900g Double Chocolate Nutrata",
  slug: "whey-concentrado-w100-900g-double-chocolate-nutrata",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/1wkV7CU",
  image: "/images/produtos/whey-concentrado-w100-900g-double-chocolate-nutrata.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 1999,
  shortDescription: "Whey Concentrado 100% WPC com 20g de proteína por dose, Low Carb, livre de acessulfame K e aspartame. Sabor Double Chocolate.",
  description: "O Whey Concentrado W100 da Nutrata é elaborado com 100% WPC (Proteína Concentrada do Soro do Leite), produzido pelo processo CFM que preserva todos os peptídeos bioativos do soro. Com mais de 10 mil unidades vendidas e 8º em Suplementos Nutrata no Mercado Livre, é uma das opções mais confiáveis do mercado. Possui alto valor nutricional, elevado teor de aminoácidos essenciais com destaque para os BCAAs, auxiliando no ganho de massa muscular. Sua fórmula é Low Carb, livre de adoçantes artificiais como acessulfame K e aspartame. O sabor Double Chocolate é irresistível e combina perfeitamente com água ou leite.",
  benefits: [
    "100% WPC - Proteína Concentrada do Soro do Leite",
    "20g de proteína por dose com alto valor biológico",
    "Elevado teor de aminoácidos essenciais e BCAAs",
    "Low Carb - baixo teor de carboidratos",
    "Livre de acessulfame K e aspartame",
    "Peptídeos bioativos do soro preservados",
    "Mais de 10 mil vendidos - 8º em Suplementos Nutrata",
    "Não contém glúten",
  ],
  howToUse: "Diluir 30g (2 dosadores) em 200ml de água. Consumir 1 porção ao dia, preferencialmente após o treino, ou conforme orientação do nutricionista ou médico.",
  ingredients: "Proteína de soro do leite concentrada, cacau em pó, aromatizantes, espessante goma xantana, antiumectante dióxido de silício e edulcorante sucralose. Contém lactose. Não contém glúten. Alérgicos: contém derivados de leite e soja.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação acima de 19 anos que buscam ganho de massa muscular e aumento da ingestão proteica diária. Contém lactose — pessoas com intolerância severa devem evitar.",
  faq: [
    {
      question: "O W100 Double Chocolate contém glúten?",
      answer: "Não. O produto é livre de glúten, porém contém lactose e derivados de leite e soja."
    },
    {
      question: "Quantas doses tem a embalagem de 900g?",
      answer: "A embalagem de 900g rende aproximadamente 30 doses de 30g cada."
    },
    {
      question: "O produto tem adoçantes artificiais?",
      answer: "Não. É livre de acessulfame K e aspartame. Utiliza apenas sucralose como edulcorante."
    },
    {
      question: "Qual a idade mínima recomendada?",
      answer: "O produto é indicado para pessoas acima de 19 anos."
    },
  ],
},
  {
  id: "5",
  name: "Pré-Treino Evolution Workout 300g Limonada Suíça Soldiers Nutrition",
  slug: "pre-treino-evolution-workout-300g-limonada-suica-soldiers-nutrition",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1rcofgv",
  image: "/images/produtos/pre-treino-evolution-workout-300g-limonada-suica-soldiers-nutrition.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  rating: 4.7,
  reviews: 31127,
  shortDescription: "Pré-treino termogênico com cafeína, beta-alanina, taurina e vitaminas. Mais de 50 mil vendidos. Sabor Limonada Suíça.",
  description: "O Evolution Workout 300g da Soldiers Nutrition é uma fórmula completa desenvolvida para otimizar o desempenho durante os treinos, proporcionando energia, resistência e foco. Com mais de 50 mil unidades vendidas e 2º lugar em Suplementos Alimentares Soldiers Nutrition no Mercado Livre, é um dos pré-treinos mais populares do Brasil. Sua fórmula combina Beta Alanina, Taurina, Arginina, Tirosina, Cisteína e 200mg de Cafeína, além de vitaminas B3, B6, B12 e zinco para suporte nutricional completo durante o treino. Adoçado com sucralose.",
  benefits: [
    "200mg de cafeína para energia e foco máximos",
    "2000mg de Beta Alanina para redução da fadiga muscular",
    "2000mg de Taurina para resistência e hidratação celular",
    "1000mg de Arginina para bombeamento e vascularização",
    "1000mg de Tirosina para foco e concentração mental",
    "Vitaminas B3, B6, B12 e zinco para suporte nutricional",
    "Mais de 50 mil vendidos - 2º em Suplementos Soldiers Nutrition",
    "Adoçado com sucralose",
  ],
  howToUse: "Diluir 1 dose (10g) em 200ml de água gelada. Consumir 30 minutos antes do treino. Não exceder a dose diária recomendada. Não consumir à noite devido ao teor de cafeína.",
  ingredients: "Beta Alanina (2000mg), Taurina (2000mg), Arginina (1000mg), Tirosina (1000mg), Cisteína (250mg), Cafeína (200mg), Vitamina B3, Vitamina B6, Vitamina B12, Zinco, aromatizantes, edulcorante sucralose.",
  whoShouldUse: "Indicado para adultos acima de 18 anos que praticam atividades físicas de alta intensidade e buscam mais energia, foco e resistência nos treinos. Não recomendado para gestantes, lactantes ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "O Evolution causa formigamento?",
      answer: "Sim. A Beta Alanina pode causar formigamento temporário (parestesia) na pele. É inofensivo e passa em alguns minutos."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém 200mg de cafeína, o que pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 30 doses de 10g cada."
    },
    {
      question: "O produto vicia?",
      answer: "A cafeína pode causar tolerância com o uso contínuo. Recomenda-se ciclar o uso para manter a eficácia."
    },
    {
      question: "Qual a idade mínima recomendada?",
      answer: "O produto é indicado para pessoas acima de 18 anos."
    },
  ],
},
  {
  id: "6",
  name: "Testo Essencial para Mulheres 60 Cápsulas Essencial Labs",
  slug: "testo-essencial-para-mulheres-60-capsulas-essencial-labs",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/1GXLDnm",
  image: "/images/produtos/testo-essencial-para-mulheres-60-capsulas-essencial-labs.webp",
  badge: "Mais Vendido",
  rating: 5.0,
  reviews: 60,
  shortDescription: "Suplemento feminino com Feno Grego, Boro, Arginina, ZMA e Vitaminas B6, B12 e Biotina para energia, vitalidade e performance.",
  description: "O Testo Essencial para Mulheres da Essencial Labs é um suplemento desenvolvido exclusivamente para a fisiologia feminina. Diferente dos suplementos hormonais masculinos, sua fórmula foi calibrada para oferecer energia natural, equilíbrio hormonal e performance física sem efeitos indesejados. A combinação de Feno Grego, Boro, Arginina e ZMA atua como precursor natural, enquanto as vitaminas B6, B12 e Biotina cuidam do metabolismo energético, saúde do cabelo e funcionamento do sistema nervoso. Cada pote contém 60 cápsulas, equivalente a 30 doses. Livre de glúten, lactose e açúcar.",
  benefits: [
    "Fórmula exclusiva desenvolvida para mulheres",
    "Feno Grego para equilíbrio hormonal natural",
    "Arginina para melhora da circulação e performance",
    "ZMA (Zinco + Magnésio) para recuperação e sono de qualidade",
    "Vitaminas B6 e B12 para energia e metabolismo",
    "Biotina para saúde do cabelo, pele e unhas",
    "Livre de glúten, lactose e açúcar",
    "30 doses por pote",
  ],
  howToUse: "Ingerir 2 cápsulas ao dia, preferencialmente com uma refeição. Consumir conforme orientação de médico ou nutricionista. Após aberto, consumir em até 60 dias.",
  ingredients: "Extrato de semente de feno grego, L-Arginina, tetraborato de sódio decahidratado, bisglicinato de zinco, vitamina B6 (cloridrato de piridoxina), vitamina B12 (metilcobalamina), D-biotina, dióxido de silício, amido de milho. Cápsula: gelatina e glicerina. Não contém glúten, lactose ou açúcar.",
  whoShouldUse: "Indicado para mulheres acima de 19 anos que buscam mais energia, disposição e performance física no dia a dia e nos treinos. Não indicado para gestantes, lactantes ou crianças.",
  faq: [
    {
      question: "Este produto é exclusivo para mulheres?",
      answer: "Sim. A fórmula foi desenvolvida especialmente para a fisiologia feminina, com dosagens e ingredientes calibrados para as necessidades da mulher."
    },
    {
      question: "O Testo Essencial é vegano?",
      answer: "Não. As cápsulas contêm gelatina de origem animal, portanto o produto não é vegano."
    },
    {
      question: "Contém glúten ou lactose?",
      answer: "Não. O produto é livre de glúten, lactose e açúcar."
    },
    {
      question: "Gestantes podem consumir?",
      answer: "Não. O produto não é indicado para gestantes, lactantes ou crianças."
    },
    {
      question: "Quanto tempo dura um pote?",
      answer: "Cada pote contém 60 cápsulas, o que equivale a 30 dias de uso na dose recomendada de 2 cápsulas diárias."
    },
  ],
},
  {
  id: "7",
  name: "Glutamina 100% Pura 300g G7 Legacy",
  slug: "glutamina-100-pura-300g-g7-legacy",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/2HdeM9R",
  image: "/images/produtos/glutamina-100-pura-300g-g7-legacy.webp",
  rating: 4.8,
  reviews: 284,
  shortDescription: "Glutamina micronizada 100% pura, sem aditivos, para recuperação muscular, imunidade e saúde intestinal.",
  description: "Se você treina pesado, seu corpo paga o preço — e a Glutamina 100% Pura da G7 Legacy existe exatamente para isso. Durante exercícios intensos, os níveis de glutamina no músculo despencam até 50%, comprometendo a recuperação, a imunidade e até a saúde intestinal. A suplementação repõe esse déficit de forma direta e sem rodeios: um ingrediente, zero aditivos, 100% glutamina micronizada. Sem sabor, sem cor, sem conservantes — dissolve em qualquer líquido e vai direto ao ponto. Para quem leva o treino a sério e não quer floreado no pote.",
  benefits: [
    "100% glutamina micronizada — zero aditivos ou conservantes",
    "Acelera a recuperação muscular pós-treino",
    "Fortalece o sistema imunológico",
    "Melhora a saúde e permeabilidade intestinal",
    "Reduz o catabolismo muscular",
    "Sem sabor — mistura com qualquer líquido",
    "Rende até 60 doses de 5g por pote",
  ],
  howToUse: "Misturar 5g a 10g (1 a 2 colheres de medida) em água, suco ou shake. Consumir preferencialmente após o treino e/ou antes de dormir. Conservar em local fresco, seco e longe da luz solar.",
  ingredients: "Glutamina micronizada 100% pura. Não contém outros ingredientes.",
  whoShouldUse: "Indicado para atletas e praticantes de atividades físicas intensas acima de 19 anos que buscam recuperação acelerada, proteção imunológica e saúde intestinal. Excelente opção para quem está em dieta restritiva ou fase de cutting.",
  faq: [
    {
      question: "Qual o melhor horário para tomar glutamina?",
      answer: "Os melhores momentos são logo após o treino, para acelerar a recuperação, e antes de dormir, para evitar o catabolismo noturno. Pode ser consumida nos dois momentos no mesmo dia."
    },
    {
      question: "Quantas doses tem o pote de 300g?",
      answer: "Na dose de 5g por dia, o pote rende 60 doses. Na dose de 10g, rende 30 doses."
    },
    {
      question: "Glutamina corta o efeito de outros suplementos?",
      answer: "Não. A glutamina é compatível com whey protein, creatina, BCAA e demais suplementos. Pode ser misturada no mesmo shake sem problemas."
    },
    {
      question: "Precisa tomar todos os dias?",
      answer: "Para melhores resultados, sim. A suplementação diária mantém os níveis de glutamina elevados, especialmente em períodos de treino intenso."
    },
  ],
},
  {
  id: "8",
  name: "Hipercalórico Anabolic Mass 28500 3kg Chocolate ProFit",
  slug: "hipercalorico-anabolic-mass-28500-3kg-chocolate-profit",
  category: "hipercaloricos",
  categoryName: "Hipercalóricos",
  affiliateLink: "https://meli.la/1VR66UW",
  image: "/images/produtos/hipercalorico-anabolic-mass-28500-3kg-chocolate-profit.webp",
  badge: "Mais Vendido",
  sold: "+100 mil vendidos",
  rating: 4.8,
  reviews: 51939,
  shortDescription: "Hipercalórico com 32g de proteína, 25 vitaminas e minerais e 3g de creatina por dose. Ideal para ganho de massa e peso. 3kg.",
  description: "Ganhar massa muscular vai além de treinar pesado — o corpo precisa de combustível de qualidade e em quantidade. O Anabolic Mass 28500 da ProFit foi desenvolvido para quem tem dificuldade em ganhar peso ou está em fase de bulking sério. Com mais de 100 mil unidades vendidas e 16º em Saúde no Mercado Livre, é um dos hipercalóricos mais confiáveis do Brasil. Cada dose entrega 32g de proteína de alto valor biológico, combinada com whey protein, albumina, colágeno e waxy maize, além de 25 vitaminas e minerais essenciais e 3g de creatina para força e volume muscular. Tudo isso em uma embalagem de 3kg que garante semanas de suplementação consistente.",
  benefits: [
    "32g de proteína por dose — whey, albumina e colágeno",
    "3g de creatina por dose para força e volume muscular",
    "25 vitaminas e minerais essenciais",
    "Carboidratos complexos com waxy maize para energia sustentada",
    "Mais de 100 mil vendidos — aprovado por quem treina sério",
    "Ideal para ectomorfos e fase de bulking",
    "Embalagem econômica de 3kg",
    "Gluten Free",
  ],
  howToUse: "Misturar 1 dose em 400ml de água ou leite. Consumir 1 a 2 vezes ao dia, preferencialmente após o treino e entre refeições. Para máximo ganho de massa, manter superávit calórico na dieta.",
  ingredients: "Maltodextrina, whey protein concentrado, albumina, colágeno hidrolisado, waxy maize, creatina monohidratada, cacau em pó, vitaminas (A, C, D, E, B1, B2, B3, B5, B6, B7, B9, B12), minerais (cálcio, ferro, magnésio, zinco, selênio, cobre, manganês, cromo, molibdênio, iodeto), aromatizantes, edulcorantes.",
  whoShouldUse: "Indicado para pessoas acima de 18 anos com dificuldade em ganhar peso (ectomorfos), atletas em fase de bulking e praticantes de musculação que precisam aumentar o consumo calórico e proteico diário.",
  faq: [
    {
      question: "Hipercalórico engorda barriga?",
      answer: "Depende do contexto. Quando usado com treino e dieta adequados, o excedente calórico vai prioritariamente para os músculos. Sem treino, qualquer excesso calórico pode virar gordura."
    },
    {
      question: "Quantas doses tem a embalagem de 3kg?",
      answer: "A quantidade de doses varia conforme a porção utilizada. Com doses de 100g, a embalagem rende aproximadamente 30 doses."
    },
    {
      question: "Pode tomar com leite?",
      answer: "Sim. Com leite o valor calórico aumenta ainda mais, potencializando o ganho de massa. Ideal para quem tem dificuldade em atingir as calorias diárias."
    },
    {
      question: "Tem creatina na fórmula?",
      answer: "Sim. Cada dose contém 3g de creatina monohidratada, que contribui para força, potência e volume muscular."
    },
    {
      question: "É indicado para mulheres?",
      answer: "Sim, desde que o objetivo seja ganho de massa e peso. Mulheres em dieta de emagrecimento devem evitar hipercalóricos."
    },
  ],
},
  {
  id: "9",
  name: "Kit 2x Colágeno + Ácido Hialurônico Verisol 216g Cranberry Renova Be",
  slug: "kit-2x-colageno-acido-hialuronico-verisol-216g-cranberry-renova-be",
  category: "colageno",
  categoryName: "Colágeno",
  affiliateLink: "https://meli.la/2GTL8Zb",
  image: "/images/produtos/kit-2x-colageno-acido-hialuronico-verisol-216g-cranberry-renova-be.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.9,
  reviews: 3742,
  shortDescription: "Kit com 2 potes de Colágeno Verisol + Ácido Hialurônico, Vitaminas E, C, B6, Biotina e Zinco. Zero lactose, zero glúten. Sabor Cranberry.",
  description: "Sua pele, cabelo e articulações pedem atenção — e o Kit Colágeno + Ácido Hialurônico da Renova Be entrega exatamente isso. Com mais de 10 mil unidades vendidas e 4º lugar em Suplementos Alimentares Renova Be no Mercado Livre, este kit com 2 potes de 216g combina o colágeno Verisol, a marca de peptídeos bioativos de colágeno mais estudada do mundo, com Ácido Hialurônico para hidratação profunda da pele. A fórmula ainda é enriquecida com Biotina, Vitamina C, Vitamina E, Vitamina B6 e Zinco — nutrientes essenciais para pele firme, cabelos fortes e unhas saudáveis. Zero lactose, zero glúten e sabor refrescante de Cranberry. Acompanha creme facial de brinde.",
  benefits: [
    "Peptídeos Bioativos de Colágeno Verisol — a mais estudada do mundo",
    "Ácido Hialurônico para hidratação profunda da pele",
    "Biotina para cabelos fortes e unhas saudáveis",
    "Vitaminas C, E e B6 para ação antioxidante e firmeza da pele",
    "Zinco para saúde da pele e sistema imunológico",
    "Zero lactose e zero glúten",
    "Kit com 2 potes de 216g + creme facial de brinde",
    "Mais de 10 mil vendidos — 4º em Suplementos Renova Be",
  ],
  howToUse: "Misturar 1 medida (12g) em 150ml de água gelada. Consumir 1 vez ao dia, preferencialmente em jejum pela manhã para melhor absorção. Resultados visíveis a partir de 4 semanas de uso contínuo.",
  ingredients: "Peptídeos Bioativos de Colágeno Verisol, Ácido Hialurônico, Biotina, Fibra Polidextrose, Maltodextrina, Vitamina C, Zinco, Vitamina E, Vitamina B6, Acidulante Ácido Cítrico, Aromatizantes, Antiumectante Dióxido de Silício, Edulcorante Sucralose e Edulcorante Natural Stévia. Não contém glúten.",
  whoShouldUse: "Indicado para mulheres e homens acima de 19 anos que buscam melhorar a elasticidade da pele, reduzir rugas, fortalecer cabelos e unhas e proteger as articulações. Especialmente recomendado a partir dos 25 anos, quando a produção natural de colágeno começa a diminuir.",
  faq: [
    {
      question: "Qual a diferença do Colágeno Verisol para o colágeno comum?",
      answer: "O Verisol é uma marca patenteada de peptídeos bioativos de colágeno com estudos clínicos comprovando eficácia na redução de rugas e melhora da elasticidade da pele, sendo mais eficiente que o colágeno hidrolisado comum."
    },
    {
      question: "Quantas doses tem cada pote de 216g?",
      answer: "Cada pote de 216g rende 18 doses de 12g. O kit com 2 potes garante 36 dias de uso contínuo."
    },
    {
      question: "Contém lactose ou glúten?",
      answer: "Não. O produto é zero lactose e zero glúten, sendo seguro para intolerantes."
    },
    {
      question: "Em quanto tempo aparecem os resultados?",
      answer: "Os primeiros resultados na pele começam a aparecer a partir de 4 semanas de uso contínuo. Para articulações, o prazo pode ser de 8 a 12 semanas."
    },
    {
      question: "O que vem no kit?",
      answer: "O kit inclui 2 potes de 216g do Colágeno + Ácido Hialurônico sabor Cranberry e um creme facial de brinde."
    },
  ],
},
  {
  id: "10",
  name: "Multivitamínico AZCaps 120 Cápsulas Bionutri",
  slug: "multivitaminico-azcaps-120-capsulas-bionutri",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/2tPwqAw",
  image: "/images/produtos/multivitaminico-azcaps-120-capsulas-bionutri.webp",
  sold: "+1000 vendidos",
  rating: 4.8,
  reviews: 284,
  shortDescription: "Multivitamínico completo de A a Z com 120 cápsulas de 500mg. Vitaminas, minerais, zero glúten e zero lactose. 60 dias de suplementação.",
  description: "Seu corpo precisa de mais de 30 micronutrientes essenciais todos os dias — e nem sempre a alimentação consegue suprir tudo isso. O AZCaps da Bionutri resolve esse problema de forma prática e acessível. Com 120 cápsulas de 500mg, este multivitamínico cobre toda a cadeia de vitaminas de A a Z, incluindo Vitamina A, C, D, E, K, complexo B completo e minerais como cálcio, ferro e magnésio. Cada pote rende 60 dias de suplementação contínua — dois meses de suporte nutricional completo em um único frasco. Livre de glúten e lactose, é compatível com a maioria das dietas e indicado a partir dos 16 anos.",
  benefits: [
    "Vitaminas de A a Z em uma única cápsula",
    "Vitaminas A, C, D, E, K e complexo B completo",
    "Minerais essenciais: cálcio, ferro e magnésio",
    "120 cápsulas — 60 dias de suplementação contínua",
    "Cápsulas de 500mg de fácil ingestão e absorção",
    "Zero glúten e zero lactose",
    "Fortalece o sistema imunológico",
    "Aumenta energia e melhora o bem-estar geral",
  ],
  howToUse: "Consumir 2 cápsulas ao dia, preferencialmente junto com a principal refeição para facilitar a absorção. Não exceder a dose diária recomendada.",
  ingredients: "Vitamina A, Vitamina C, Vitamina D, Vitamina E, Vitamina K, Vitamina B1, Vitamina B2, Vitamina B3, Vitamina B5, Vitamina B6, Vitamina B7 (Biotina), Vitamina B9 (Ácido Fólico), Vitamina B12, Cálcio, Ferro, Magnésio, Zinco, Selênio, Cobre, Manganês, Cromo, Molibdênio, Iodeto. Excipientes: celulose microcristalina, dióxido de silício. Cápsula: gelatina. Não contém glúten. Não contém lactose.",
  whoShouldUse: "Indicado para adultos a partir de 16 anos que buscam suporte nutricional completo, praticantes de atividades físicas, pessoas com alimentação restritiva, vegetarianos e veganos que precisam complementar a ingestão de micronutrientes.",
  faq: [
    {
      question: "Quantos dias dura o pote de 120 cápsulas?",
      answer: "Na dose recomendada de 2 cápsulas ao dia, o pote rende exatamente 60 dias de uso contínuo."
    },
    {
      question: "Pode tomar com outros suplementos?",
      answer: "Sim. O AZCaps é compatível com whey protein, creatina e demais suplementos. Porém, evite tomar junto com outros multivitamínicos para não ultrapassar as doses diárias recomendadas."
    },
    {
      question: "Contém glúten ou lactose?",
      answer: "Não. O produto é livre de glúten e lactose, sendo seguro para intolerantes e celíacos."
    },
    {
      question: "A partir de qual idade pode consumir?",
      answer: "O produto é indicado para pessoas a partir de 16 anos."
    },
    {
      question: "Melhor horário para tomar?",
      answer: "Preferencialmente junto com a refeição principal do dia, pois vitaminas lipossolúveis como A, D, E e K são melhor absorvidas na presença de gorduras alimentares."
    },
  ],
},
  {
  id: "11",
  name: "Vitergan Master-N 70 Comprimidos Vitaminas e Minerais Marjan",
  slug: "vitergan-master-n-70-comprimidos-vitaminas-minerais-marjan",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/11htySv",
  image: "/images/produtos/vitergan-master-n-70-comprimidos-vitaminas-minerais-marjan.webp",
  badge: "Mais Vendido",
  sold: "+1000 vendidos",
  rating: 4.9,
  reviews: 253,
  shortDescription: "Suplemento com aminoácidos, cafeína, vitaminas C e B6, magnésio e ferro em comprimidos. Auxilia no metabolismo energético e funcionamento muscular.",
  description: "Quem tem uma rotina intensa sabe que a alimentação nem sempre consegue suprir tudo que o corpo precisa. O Vitergan Master-N da Marjan foi desenvolvido exatamente para fechar essas lacunas nutricionais de forma prática e eficiente. Com 70 comprimidos e 11º lugar em Suplementos Alimentares Marjan no Mercado Livre, sua fórmula única combina aminoácidos essenciais como L-Cisteína e Arginina, cafeína para energia e foco, vitaminas C e B6 para imunidade e metabolismo, além de magnésio e ferro para funcionamento muscular e prevenção de anemia. Tudo isso em um único comprimido que auxilia no metabolismo energético e no funcionamento muscular.",
  benefits: [
    "Aminoácidos L-Cisteína e Arginina para saúde muscular",
    "Cafeína para energia e foco no dia a dia",
    "Vitamina C para imunidade e ação antioxidante",
    "Vitamina B6 para metabolismo energético",
    "Magnésio para funcionamento muscular e redução do cansaço",
    "Ferro para prevenção de anemia e disposição",
    "70 comprimidos — praticidade para a rotina agitada",
    "11º em Suplementos Alimentares Marjan no Mercado Livre",
  ],
  howToUse: "Consumir conforme orientação do médico ou nutricionista. Tomar preferencialmente junto com uma refeição para facilitar a absorção dos nutrientes.",
  ingredients: "L-Cisteína, L-Arginina, Cafeína, Vitamina C (Ácido Ascórbico), Vitamina B6 (Cloridrato de Piridoxina), Magnésio, Ferro, excipientes. Colorido artificialmente.",
  whoShouldUse: "Indicado para adultos acima de 18 anos com rotina agitada que buscam suporte nutricional completo, praticantes de atividades físicas e pessoas que sentem cansaço e falta de energia no dia a dia.",
  faq: [
    {
      question: "Quantos dias dura a embalagem de 70 comprimidos?",
      answer: "Depende da dose prescrita pelo profissional de saúde. Na dose de 1 comprimido ao dia, a embalagem dura 70 dias. Na dose de 2 comprimidos, dura 35 dias."
    },
    {
      question: "O Vitergan Master-N contém cafeína?",
      answer: "Sim. O produto contém cafeína em sua fórmula, o que contribui para energia e foco. Pessoas sensíveis à cafeína devem consultar um médico antes de usar."
    },
    {
      question: "Pode tomar junto com outros suplementos?",
      answer: "Recomenda-se consultar um médico ou nutricionista antes de combinar com outros suplementos para evitar sobredosagem de vitaminas e minerais."
    },
    {
      question: "É indicado para mulheres?",
      answer: "Sim. O ferro presente na fórmula é especialmente benéfico para mulheres, que têm maior tendência à deficiência desse mineral."
    },
    {
      question: "Qual a idade mínima recomendada?",
      answer: "O produto é indicado para pessoas acima de 18 anos."
    },
  ],
},
 {
  id: "12",
  name: "Thermo Flame Black Skull 120 Tabletes",
  slug: "thermo-flame-black-skull-120-tabletes",
  category: "emagrecimento",
  categoryName: "Emagrecimento",
  affiliateLink: "https://meli.la/1M651x9",
  image: "/images/produtos/termogenico-thermo-flame-120-tabletes-black-skull.webp",
  badge: "Mais Vendido",
  rating: 4.8,
  reviews: 19146,
  sold: "+100 mil vendidos",
  shortDescription: "Termogênico hardcore com 360mg de cafeína por dose para máximo foco e energia nos treinos.",
  description: "O Thermo Flame é o termogênico hardcore da Black Skull, desenvolvido para quem leva os treinos a sério. Com 360mg de cafeína por dose em formato de tablete prático, a fórmula de alta potência atua no aumento do estado de alerta, do foco mental e da disposição física — tudo que você precisa para render mais dentro e fora da academia. Sem rodeios, sem fórmulas tímidas: o Thermo Flame entrega energia real para quem treina com intensidade.",
  benefits: [
    "360mg de cafeína por dose para energia imediata",
    "Aumenta o estado de alerta e o foco mental",
    "Mais disposição para treinos intensos",
    "Fórmula concentrada de alta potência",
    "Formato tablete de consumo prático e rápido",
    "Ideal para usar antes dos exercícios",
  ],
  howToUse: "Consumir 1 tablete ao dia. Atletas podem consumir 1 tablete duas vezes ao dia, preferencialmente cerca de 1 hora antes da atividade física. Consumir junto com alimentos para facilitar a assimilação.",
  ingredients: "Cafeína anidra 360mg por dose.",
  whoShouldUse: "Adultos (a partir de 19 anos) que buscam mais energia, foco e disposição para treinos de alta intensidade. Não recomendado para gestantes, lactantes ou pessoas sensíveis à cafeína.",
  faq: [
    { question: "Quantos miligramas de cafeína tem por dose?", answer: "O Thermo Flame fornece 360mg de cafeína por dose, uma das concentrações mais altas do mercado de termogênicos." },
    { question: "Posso tomar duas vezes ao dia?", answer: "Sim. Atletas podem consumir 1 tablete duas vezes ao dia, preferencialmente antes dos treinos ou conforme orientação de profissional habilitado." },
    { question: "A partir de que idade posso usar?", answer: "O produto é indicado para adultos a partir de 19 anos." },
  ],
},
  {
  id: "13",
  name: "Bold Barra de Proteína Caixa Mista 12 Unidades",
  slug: "bold-barra-proteina-caixa-mista-12-unidades",
  category: "snacks-e-barras",
  categoryName: "Snacks e Barras",
  affiliateLink: "https://meli.la/1ddLr4k",
  image: "/images/produtos/barra-proteina-bold-caixa-mista-12-unidades-21g-proteina.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 2189,
  sold: "+50 mil vendidos",
  shortDescription: "Caixa mista com 12 barras Bold de 60g e 21g de proteína cada — 6 sabores diferentes para nunca enjoar.",
  description: "Quem disse que manter a proteína em dia precisa ser chato? A Bold Caixa Mista chegou para provar o contrário. São 12 barras de 60g com 21g de proteína cada, reunindo 6 sabores incríveis em uma única caixa: Bombom Crocante, Cookies Black, Cookies & Cream, Doce de Leite, Pistache e Trufa de Chocolate — 2 unidades de cada. Perfeita para ter sempre à mão no trabalho, na mochila ou em casa, essa caixa é a aliada certa para quem quer praticidade sem abrir mão do sabor e da nutrição. Alta proteína, variedade garantida e zero desculpas para furar a dieta.",
  benefits: [
    "21g de proteína por barra para recuperação e ganho muscular",
    "6 sabores diferentes em uma única caixa",
    "60g por unidade — tamanho ideal para um lanche completo",
    "Prático para levar a qualquer lugar",
    "Ótima opção para pré e pós-treino",
    "Alto teor proteico com sabor de verdade",
  ],
  howToUse: "Consuma 1 barra por dia como lanche entre as refeições, antes ou após o treino. Pode ser consumida à temperatura ambiente. Recomendado para maiores de 19 anos.",
  ingredients: "Proteína do leite (whey e caseína), amendoim, cacau, aveia, adoçantes naturais e artificiais. Composição varia conforme o sabor. Contém glúten, leite e amendoim. Pode conter traços de outros alérgenos.",
  whoShouldUse: "Atletas, praticantes de atividade física e qualquer pessoa que busca aumentar o consumo diário de proteína de forma prática e saborosa.",
  faq: [
    { question: "Quais sabores vêm na caixa mista?", answer: "A caixa traz 2 unidades de cada um dos 6 sabores: Bombom Crocante, Cookies Black, Cookies & Cream, Doce de Leite, Pistache e Trufa de Chocolate." },
    { question: "Quantas gramas de proteína tem cada barra?", answer: "Cada barra Bold de 60g contém 21g de proteína, tornando-a uma das opções mais proteicas do mercado." },
    { question: "Posso comer a barra sem praticar exercícios?", answer: "Sim! A barra Bold pode ser consumida por qualquer pessoa como um lanche proteico e prático no dia a dia, mesmo sem treino." },
  ],
},
  {
  id: "14",
  name: "Tasty Whey 3W Gourmet 900g Original Adaptogen Science",
  slug: "tasty-whey-3w-gourmet-900g-original-adaptogen-science",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/226Kcxd",
  image: "/images/produtos/tasty-whey-3w-gourmet-900g-original-adaptogen-science.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 73048,
  shortDescription: "Whey 3W Gourmet com 24g de proteína por dose, alta solubilidade e menos sódio. Mais de 100 mil vendidos. Sabor Original.",
  description: "O Tasty Whey 3W Gourmet da Adaptogen Science é o whey protein mais saboroso do mercado, com mais de 100 mil unidades vendidas e 3º lugar em Suplementos e Shakers no Mercado Livre. Formulado com tripla fonte proteica (3W), fornece 24g de proteína por dose, com alta solubilidade e menos sódio que os concorrentes. Sua absorção rápida de nutrientes, proteínas e aminoácidos o torna ideal para consumo logo após o treino. Perfeito também para usar em receitas gourmet.",
  benefits: [
    "24g de proteína por dose",
    "5,3g de BCAA por porção",
    "2,3g de Leucina por porção",
    "Tripla fonte proteica (3W)",
    "Alta solubilidade - dissolve facilmente",
    "Menos sódio que os concorrentes",
    "Perfeito para receitas gourmet",
    "Mais de 100 mil vendidos - 3º em Suplementos e Shakers",
  ],
  howToUse: "Adicionar 2 colheres medida (35g) a 200ml de água ou sua bebida de preferência. Consumir preferencialmente logo após o treino.",
  ingredients: "Tripla fonte proteica do soro do leite (concentrado, isolado e hidrolisado), aromatizantes, edulcorantes. Sabores cookies e chocomaltine contêm glúten.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação acima de 19 anos que buscam ganho de massa muscular, recuperação pós-treino e uma proteína com sabor diferenciado para receitas gourmet.",
  faq: [
    {
      question: "O Tasty Whey contém glúten?",
      answer: "Depende do sabor. Os sabores cookies e chocomaltine contêm glúten. O sabor Original é livre de glúten."
    },
    {
      question: "Quantas doses tem a embalagem de 900g?",
      answer: "A embalagem de 900g rende aproximadamente 25 doses de 35g cada."
    },
    {
      question: "Pode usar em receitas?",
      answer: "Sim! O Tasty Whey foi desenvolvido especialmente para uso em receitas gourmet, com alta solubilidade e sabor diferenciado."
    },
    {
      question: "Qual a diferença do 3W para o whey comum?",
      answer: "O 3W combina três fontes proteicas: concentrado, isolado e hidrolisado, oferecendo absorção em diferentes velocidades para melhor aproveitamento pelo organismo."
    },
  ],
},
  {
  id: "15",
  name: "Prodiet Trophic Basic Sabor Baunilha 800g",
  slug: "prodiet-trophic-basic-baunilha-800g",
  category: "suplementos-nutricionais",
  categoryName: "Suplementos Nutricionais",
  affiliateLink: "https://meli.la/2cyHDnu",
  image: "/images/produtos/suplemento-nutricional-po-trophic-basic-prodiet-baunilha-800g.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 361,
  sold: "+1000 vendidos",
  shortDescription: "Suplemento nutricional em pó sabor baunilha para complementar a alimentação diária com vitaminas, minerais e proteínas.",
  description: "Manter uma alimentação equilibrada no dia a dia é um desafio real para a maioria das pessoas. Entre reuniões, treinos e uma rotina que não para, garantir todos os nutrientes que o corpo precisa pode ser mais difícil do que parece. O Trophic Basic Enteral da Prodiet foi desenvolvido justamente para preencher essas lacunas nutricionais: uma fórmula completa em pó, com sabor suave de baunilha, que entrega vitaminas, minerais e proteínas de forma prática e equilibrada. Com 800g por pote, é a escolha certa para quem quer cuidar da saúde sem complicar a rotina.",
  benefits: [
    "Complementa a ingestão diária de vitaminas e minerais",
    "Fonte de proteínas para suporte muscular e recuperação",
    "Fórmula balanceada para nutrição enteral e oral",
    "Sabor baunilha suave e agradável",
    "Prático para incluir na rotina alimentar diária",
    "800g de rendimento por pote",
  ],
  howToUse: "Dissolver a quantidade recomendada em água ou leite e consumir junto com as refeições. Siga a orientação do seu médico ou nutricionista para adequar a dose às suas necessidades individuais.",
  ingredients: "Maltodextrina, proteínas do leite, vitaminas (A, C, D, E, K e complexo B), minerais (cálcio, fósforo, magnésio, zinco, ferro e outros), óleos vegetais e emulsificantes. Contém leite. Pode conter traços de soja e glúten.",
  whoShouldUse: "Pessoas que buscam complementar a alimentação diária, idosos, indivíduos com necessidades nutricionais aumentadas e pacientes em acompanhamento nutricional. Uso sob orientação médica ou de nutricionista.",
  faq: [
    { question: "O Trophic Basic substitui refeições?", answer: "Não. Ele é um suplemento alimentar voltado para complementar a dieta, e não para substituir refeições completas. O uso deve ser orientado por um profissional de saúde." },
    { question: "Pode ser usado por idosos?", answer: "Sim, o Trophic Basic é amplamente indicado para idosos e pessoas com maior dificuldade de atingir as necessidades nutricionais diárias pela alimentação convencional." },
    { question: "Como devo preparar o produto?", answer: "Dissolva a quantidade recomendada em água ou leite morno, mexa bem até dissolver por completo e consuma em seguida. A proporção ideal deve seguir a orientação do profissional de saúde." },
  ],
},
  {
  id: "16",
  name: "ZMA Testo Booster 60 Cápsulas Integralmedica",
  slug: "zma-testo-booster-60-capsulas-integralmedica",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/1mmzMbM",
  image: "/images/produtos/zma-testo-booster-60-capsulas-integralmedica.webp",
  badge: "Premium",
  rating: 4.8,
  reviews: 9527,
  sold: "+50 mil vendidos",
  shortDescription: "ZMA com Zinco, Magnésio e Vitamina B6 para recuperação muscular, equilíbrio hormonal e qualidade do sono.",
  description: "Por trás de cada treino intenso existe uma recuperação que precisa acontecer — e o ZMA Testo Booster da Integralmedica foi feito exatamente para isso. Com mais de 50 mil unidades vendidas, a fórmula clássica de Zinco, Magnésio e Vitamina B6 atua em três frentes essenciais: performance, sono e saúde hormonal. O zinco participa diretamente da síntese proteica e da produção natural de testosterona, enquanto o magnésio relaxa a musculatura e melhora a profundidade do sono — momento em que o corpo mais recupera e cresce. A vitamina B6 completa o trio otimizando a absorção dos minerais e o funcionamento do sistema nervoso. Uma marca com mais de 40 anos no mercado esportivo brasileiro garantindo qualidade em cada cápsula.",
  benefits: [
    "Zinco para síntese proteica e produção natural de testosterona",
    "Magnésio para recuperação muscular e sono reparador",
    "Vitamina B6 para metabolismo energético e absorção dos minerais",
    "Fortalece o sistema imunológico em períodos de treino intenso",
    "Auxilia no ganho de força e massa muscular magra",
    "60 cápsulas com dosagem precisa e prática",
  ],
  howToUse: "Consumir conforme orientação do médico ou nutricionista. Recomenda-se tomar antes de dormir, em estômago vazio ou com pouca comida. Evitar consumir junto com alimentos ricos em cálcio, pois podem interferir na absorção do zinco e magnésio. Indicado para maiores de 18 anos.",
  ingredients: "Zinco, Magnésio e Vitamina B6 (Piridoxina). Excipientes: celulose microcristalina, dióxido de silício. Cápsula: gelatina.",
  whoShouldUse: "Atletas, praticantes de musculação e esportes de força, homens acima de 30 anos e pessoas com deficiência de zinco ou magnésio que buscam melhorar a recuperação, o sono e o equilíbrio hormonal.",
  faq: [
    { question: "Qual o melhor horário para tomar ZMA?", answer: "O ideal é consumir antes de dormir, com o estômago vazio ou com pouca comida. O magnésio facilita o relaxamento muscular e melhora a qualidade do sono, potencializando a recuperação noturna." },
    { question: "Por que evitar cálcio junto com o ZMA?", answer: "O cálcio compete com o zinco e o magnésio na absorção intestinal. Por isso, evite laticínios ou suplementos de cálcio nas duas horas anteriores ao consumo do ZMA." },
    { question: "ZMA realmente aumenta a testosterona?", answer: "O ZMA não é um hormônio, mas o zinco é cofator essencial para a produção natural de testosterona. Em pessoas com deficiência desse mineral, a suplementação pode ajudar a normalizar os níveis hormonais." },
  ],
},
  {
  id: "17",
  name: "L-Arginina em Pó 500g 100% Pura Soldiers Nutrition",
  slug: "l-arginina-po-500g-pura-soldiers-nutrition",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/2k9WxHc",
  image: "/images/produtos/l-arginina-po-500g-100-pura-soldiers-nutrition.webp",
  badge: "Mais Vendido",
  rating: 4.7,
  reviews: 7586,
  sold: "+10 mil vendidos",
  shortDescription: "L-Arginina 100% pura em pó com 500g para bombeamento muscular, vasodilatação e recuperação acelerada.",
  description: "A L-Arginina da Soldiers Nutrition é pureza sem concessões: 500g de aminoácido semi-essencial sem adição de nada mais, acompanhando colher dosadora de 3g para facilitar o uso. Precursora direta do óxido nítrico (NO), a arginina promove vasodilatação intensa, melhorando o fluxo sanguíneo para os músculos durante o treino — aquele efeito de 'pump' que todo atleta conhece e busca. Além do desempenho nos treinos, ela atua na liberação do hormônio do crescimento, no fortalecimento do sistema imunológico, na aceleração da cicatrização e na manutenção da massa muscular. Uma base sólida para quem quer resultados reais.",
  benefits: [
    "Precursora do óxido nítrico para vasodilatação e pump muscular",
    "Estimula a liberação natural do hormônio do crescimento",
    "Melhora a circulação e o fluxo sanguíneo durante o treino",
    "Contribui para o aumento de massa muscular e redução de gordura",
    "Fortalece o sistema imunológico",
    "Acelera a recuperação e a cicatrização muscular",
  ],
  howToUse: "Consumir 1 dose (3g) ao dia, preferencialmente antes do treino ou conforme orientação de profissional habilitado. Dissolver em água ou suco. Acompanha colher dosadora de 3g. Indicado para maiores de 18 anos.",
  ingredients: "L-Arginina 100% pura. Não contém glúten. Produto registrado como isento conforme RDC 27/2010 e RDC 240/2018.",
  whoShouldUse: "Atletas e praticantes de musculação que buscam maior vasodilatação, pump muscular e recuperação acelerada. Indicado para adultos a partir de 18 anos.",
  faq: [
    { question: "A arginina ajuda no pump muscular?", answer: "Sim. A L-Arginina é precursora do óxido nítrico, que promove vasodilatação e aumenta o fluxo de sangue para os músculos, gerando o efeito de pump durante o treino." },
    { question: "Acompanha colher dosadora?", answer: "Sim! O produto vem com uma colher dosadora de 3g incluída na embalagem." },
    { question: "Posso misturar com outros suplementos?", answer: "Sim, a L-Arginina pura combina bem com pré-treinos, creatina e whey protein. Consulte um nutricionista para montar o protocolo ideal para seus objetivos." },
  ],
},
  {
  id: "18",
  name: "Vitamina C 1000mg Vitgold 100 Comprimidos",
  slug: "vitamina-c-1000mg-vitgold-100-comprimidos",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/19osvx6",
  image: "/images/produtos/vitamina-c-1000mg-vitgold-100-comprimidos-imunidade.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 187,
  sold: "+1000 vendidos",
  shortDescription: "Vitamina C 1000mg em comprimidos para imunidade, colágeno e proteção antioxidante — 100 doses por pote.",
  description: "A Vitamina C 1000mg da Vitgold reúne em um único comprimido diário tudo que esse nutriente essencial tem a oferecer. Fabricada nos Estados Unidos com padrão internacional de qualidade, a fórmula entrega 1000mg de ácido ascórbico por porção — dose robusta para quem quer suporte real ao sistema imunológico, especialmente em períodos de maior exigência do organismo. Além de blindar as células contra os danos dos radicais livres, a vitamina C atua diretamente na síntese de colágeno, na absorção do ferro proveniente dos alimentos e no metabolismo energético. Isenta de glúten e lactose, é uma adição simples e poderosa à rotina de qualquer pessoa.",
  benefits: [
    "1000mg de vitamina C por dose para suporte imunológico eficaz",
    "Ação antioxidante contra os danos dos radicais livres",
    "Estimula a produção natural de colágeno",
    "Melhora a absorção de ferro dos alimentos",
    "Contribui para o metabolismo energético",
    "Isento de glúten e lactose",
  ],
  howToUse: "Consumir 1 comprimido ao dia, preferencialmente durante a principal refeição. Indicado para maiores de 19 anos.",
  ingredients: "Ácido ascórbico (Vitamina C) 1000mg. Não contém glúten nem lactose. Produto isento de registro conforme RDC 240/18. Fabricado nos EUA.",
  whoShouldUse: "Adultos que buscam fortalecer a imunidade, melhorar a saúde da pele e das articulações, potencializar a absorção de ferro ou aumentar a proteção antioxidante do organismo.",
  faq: [
    { question: "Posso tomar vitamina C todos os dias?", answer: "Sim. A sugestão de consumo é de 1 comprimido ao dia, durante a refeição principal. Por ser hidrossolúvel, o excesso é eliminado naturalmente pelo organismo." },
    { question: "A Vitamina C Vitgold contém glúten ou lactose?", answer: "Não. O produto é isento de glúten e lactose, sendo adequado para pessoas com intolerâncias ou restrições alimentares." },
    { question: "Onde o produto é fabricado?", answer: "A Vitamina C 1000mg Vitgold é fabricada nos Estados Unidos, seguindo padrões rigorosos de qualidade internacional." },
  ],
},
 {
  id: "19",
  name: "Vitamina D3 + K2 Menaquinona-7 Essencial Labs 60 Cápsulas",
  slug: "vitamina-d3-k2-menaquinona-7-essencial-labs-60-capsulas",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/2wg6Rzg",
  image: "/images/produtos/vitamina-d3-k2-menaquinona-7-60-capsulas-essencial-labs.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 3930,
  sold: "+10 mil vendidos",
  shortDescription: "D3 2000UI + K2 MK-7 149mcg em cápsula de máxima biodisponibilidade para ossos, imunidade e saúde cardiovascular.",
  description: "A dupla D3 + K2 é um dos combos mais estudados da nutrição moderna — e a Essencial Labs entrega essa parceria na sua forma mais eficiente. Cada cápsula reúne 2000UI de Colecalciferol (Vitamina D3) e 149mcg de Menaquinona-7 (Vitamina K2 na forma MK-7), a versão com maior biodisponibilidade e tempo de ação no organismo. Enquanto a D3 atua na absorção do cálcio e no fortalecimento do sistema imunológico, a K2 MK-7 direciona esse cálcio para os ossos e dentes — evitando que ele se deposite nas artérias. O resultado é uma fórmula completa que cuida dos ossos, do coração e da imunidade ao mesmo tempo, em uma única cápsula diária. Sem glúten e com máxima concentração por dose.",
  benefits: [
    "D3 2000UI para absorção de cálcio e fortalecimento imunológico",
    "K2 MK-7 149mcg na forma de maior biodisponibilidade",
    "Direciona o cálcio para os ossos, protegendo as artérias",
    "Suporte à saúde óssea, cardiovascular e imunológica",
    "Fórmula com máxima concentração e biodisponibilidade",
    "Sem glúten — 60 cápsulas por pote",
  ],
  howToUse: "Consumir 1 cápsula ao dia, preferencialmente junto a uma refeição que contenha gordura para melhor absorção, ou conforme orientação do médico ou nutricionista. Indicado para maiores de 19 anos.",
  ingredients: "Menaquinona-7 (Vitamina K2 MK-7) 149mcg, Colecalciferol (Vitamina D3) 2000UI, dióxido de silício (antiumectante), amido de milho (excipiente). Cápsula: gelatina e glicerina (umectante). Não contém glúten.",
  whoShouldUse: "Adultos que buscam saúde óssea, imunidade fortalecida e proteção cardiovascular. Especialmente indicado para quem tem baixa exposição solar ou déficit de vitamina D diagnosticado.",
  faq: [
    { question: "Por que combinar D3 com K2?", answer: "A vitamina D3 aumenta a absorção de cálcio, enquanto a K2 MK-7 garante que esse cálcio seja depositado nos ossos e não nas artérias. Juntas, potencializam os benefícios e tornam a suplementação mais segura e eficiente." },
    { question: "O que é a forma MK-7 da vitamina K2?", answer: "A MK-7 é a forma de vitamina K2 com maior biodisponibilidade e meia-vida longa no organismo, sendo mais eficiente do que outras formas como a MK-4 para manter níveis estáveis ao longo do dia." },
    { question: "Devo tomar com ou sem alimento?", answer: "Preferencialmente junto a uma refeição que contenha gordura, pois as vitaminas D3 e K2 são lipossolúveis e têm absorção otimizada na presença de lipídios." },
  ],
},
  {
  id: "20",
  name: "Glucosamina 1500mg + Condroitina 1200mg + MSM 600mg Recover 30 Doses",
  slug: "glucosamina-condroitina-msm-recover-30-doses",
  category: "saude-articular",
  categoryName: "Saúde Articular",
  affiliateLink: "https://meli.la/32eq9jx",
  image: "/images/produtos/glucosamina-1500mg-condroitina-1200mg-msm-600mg-recover-30-doses.webp",
  badge: "Recomendado",
  rating: 4.4,
  reviews: 1007,
  sold: "+5 mil vendidos",
  shortDescription: "Trio completo para saúde articular: Glucosamina 1500mg + Condroitina 1200mg + MSM 600mg em 30 doses.",
  description: "Quem treina pesado sabe que as articulações precisam de tanta atenção quanto os músculos. O suplemento Glucosamina + Condroitina + MSM da Recover reúne três dos ingredientes mais estudados para saúde articular em doses expressivas por porção: 1500mg de Glucosamina, 1200mg de Condroitina e 600mg de MSM. Essa combinação atua na lubrificação das articulações, na manutenção da cartilagem e na redução do desconforto articular causado pelo desgaste físico. Formulado com matérias-primas selecionadas e produzido com rigoroso controle de qualidade, é a escolha certa para atletas, pessoas ativas e qualquer um que queira preservar a mobilidade e a saúde das articulações a longo prazo.",
  benefits: [
    "1500mg de Glucosamina por dose para suporte articular completo",
    "1200mg de Condroitina para manutenção da cartilagem",
    "600mg de MSM para redução do desconforto articular",
    "Auxilia na lubrificação e mobilidade das articulações",
    "Ideal para atletas e praticantes de atividades de alto impacto",
    "Fórmula com matérias-primas selecionadas e controle de qualidade",
  ],
  howToUse: "Consumir 1 dose ao dia, preferencialmente junto a uma refeição. Indicado para maiores de 18 anos. Siga a orientação do médico ou nutricionista.",
  ingredients: "Glucosamina 1500mg, Condroitina 1200mg, MSM (Metilsulfonilmetano) 600mg por dose. Produto em pó sem sabor. Pode conter traços de alérgenos.",
  whoShouldUse: "Atletas, praticantes de musculação, corredores e pessoas com desgaste articular que buscam preservar a saúde das articulações e melhorar a mobilidade.",
  faq: [
    { question: "Qual a diferença entre Glucosamina, Condroitina e MSM?", answer: "A Glucosamina auxilia na formação e manutenção da cartilagem, a Condroitina contribui para a elasticidade e lubrificação articular, e o MSM é um composto de enxofre orgânico que atua na redução do desconforto e inflamação articular. Juntos, os três potencializam os benefícios para as articulações." },
    { question: "Quanto tempo leva para sentir os efeitos?", answer: "Suplementos articulares geralmente exigem uso contínuo por pelo menos 4 a 8 semanas para resultados perceptíveis. O uso regular e consistente é fundamental." },
    { question: "Posso usar junto com outros suplementos?", answer: "Sim, o produto é compatível com a maioria dos suplementos. Consulte um profissional de saúde para montar o protocolo ideal para suas necessidades." },
  ],
},
{
  id: "21",
  name: "Creatina Monohidratada 250g Growth Supplements",
  slug: "creatina-monohidratada-250g-growth-supplements",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/1D93fhe",
  image: "/images/produtos/creatina-monohidratada-250g-growth-supplements.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 165739,
  sold: "+1 milhão vendidos",
  shortDescription: "Creatina Monohidratada 100% pura sem aditivos, 5g por dose e sabor neutro. O suplemento mais vendido do Brasil.",
  description: "Quando o assunto é creatina, a Growth Supplements dispensa apresentações. Com mais de 1 milhão de unidades vendidas e 2º lugar em Saúde no Mercado Livre, a Creatina Monohidratada 250g é o suplemento mais popular do Brasil — e não é à toa. A fórmula é simples e eficiente: 100% creatina monohidratada, sem aditivos, sem sabor e sem enrolação. Cada dose de 5g entrega o que décadas de pesquisa científica comprovaram: mais força, mais potência e recuperação muscular acelerada. Alta solubilidade, sabor neutro e fabricação com acompanhamento técnico rigoroso. Para quem quer resultado de verdade sem pagar caro.",
  benefits: [
    "100% creatina monohidratada — zero aditivos e zero sabor artificial",
    "5g por dose — quantidade ideal comprovada cientificamente",
    "Aumenta a força e a potência nos treinos de alta intensidade",
    "Acelera a recuperação muscular entre as séries e sessões",
    "Alta solubilidade — mistura fácil em qualquer líquido",
    "Mais de 1 milhão vendidos — o mais confiável do Brasil",
  ],
  howToUse: "Misturar 1 porção (5g) em 200 a 300ml de água ou bebida de sua escolha. Consumir diariamente, preferencialmente após o treino. Manter ingestão adequada de água ao longo do dia. Indicado para maiores de 19 anos.",
  ingredients: "Creatina Monohidratada 100% pura. Não contém aditivos, corantes ou aromatizantes. Verificar alérgenos na embalagem.",
  whoShouldUse: "Praticantes de musculação, atletas de força e qualquer pessoa que busca aumentar a performance física, ganhar massa muscular e melhorar a recuperação pós-treino. Indicado para maiores de 19 anos.",
  faq: [
    { question: "Precisa fazer fase de saturação com a creatina?", answer: "Não é obrigatório. A fase de saturação (20g/dia por 5-7 dias) acelera os resultados iniciais, mas o uso contínuo de 5g por dia chega ao mesmo resultado em 3 a 4 semanas." },
    { question: "Quantas doses tem o pote de 250g?", answer: "Na dose padrão de 5g por dia, o pote rende exatamente 50 doses — cerca de 50 dias de suplementação." },
    { question: "Posso misturar com whey protein ou pré-treino?", answer: "Sim! A creatina monohidratada é neutra e compatível com qualquer suplemento. Pode ser misturada no shake de whey ou no pré-treino sem nenhum problema." },
    { question: "A creatina causa queda de cabelo?", answer: "Não há evidências científicas sólidas que comprovem essa relação. O mito surgiu de um único estudo que mediu DHT, mas sem registrar queda de cabelo. A creatina é considerada segura para uso contínuo." },
  ],
},
{
  id: "22",
  name: "Creatina Monohidratada Pura 500g Dark Lab",
  slug: "creatina-monohidratada-pura-500g-dark-lab",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/1wwH6Bs",
  image: "/images/produtos/creatina-monohidratada-pura-500g-dark-lab.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 621189,
  sold: "+1 milhão vendidos",
  shortDescription: "Creatina 100% pura com pureza comprovada de até 100% em testes independentes. 500g, matéria-prima importada, 1º em Suplementos Dark Lab.",
  description: "A Dark Lab não brinca quando o assunto é pureza — e os números comprovam isso. A Creatina Monohidratada Dark Lab passou por testes independentes que atestaram 98,1% de pureza pela Abenutri e 100% pelo laboratório Felix Bonfim. Com mais de 1 milhão de unidades vendidas e 1º lugar em Suplementos Alimentares Dark Lab no Mercado Livre, é uma das creatinas mais confiáveis do mercado brasileiro. Formulada exclusivamente com matérias-primas importadas e criteriosamente selecionadas, entrega tudo que a ciência comprovou sobre creatina: mais ATP disponível nos músculos, mais força, mais volume, recuperação acelerada e até suporte à função cognitiva. 500g de pureza sem rodeios.",
  benefits: [
    "Pureza comprovada: 98,1% (Abenutri) e 100% (Felix Bonfim) em testes independentes",
    "Matéria-prima 100% importada e criteriosamente selecionada",
    "Aumenta a disponibilidade de ATP para energia rápida nos treinos",
    "Melhora força, potência e volume muscular",
    "Acelera a recuperação entre sessões de treino",
    "Suporte ao ganho de massa muscular magra",
    "Benefícios comprovados também para função cognitiva",
    "Mais de 1 milhão vendidos — 1º em Suplementos Dark Lab",
  ],
  howToUse: "Misturar 1 porção (5g) em 200 a 300ml de água ou bebida de sua preferência. Consumir diariamente, preferencialmente após o treino. Manter hidratação adequada ao longo do dia. Indicado para maiores de 18 anos.",
  ingredients: "Creatina Monohidratada 100% pura, matéria-prima importada. Não contém aditivos, aromatizantes ou corantes.",
  whoShouldUse: "Atletas e praticantes de musculação, esportes de força e alta intensidade que buscam máxima performance, ganho de massa muscular e recuperação acelerada. Indicado para maiores de 18 anos.",
  faq: [
    { question: "A pureza da Dark Lab é realmente comprovada?", answer: "Sim. A creatina Dark Lab passou por dois testes independentes: 98,1% de pureza pela Abenutri e 100% pelo laboratório Felix Bonfim, tornando-a uma das creatinas com maior transparência do mercado." },
    { question: "Quantas doses tem o sachê de 500g?", answer: "Na dose padrão de 5g por dia, o sachê rende 100 doses — mais de 3 meses de suplementação contínua." },
    { question: "Creatina Dark Lab tem sabor?", answer: "Não. É 100% pura, sem sabor, corante ou aromatizante. Pode ser misturada em água, suco, shake ou qualquer bebida sem alterar o sabor." },
    { question: "Posso usar creatina todos os dias, mesmo nos dias sem treino?", answer: "Sim. O uso diário é recomendado para manter os estoques musculares de creatina sempre saturados, garantindo melhor desempenho nos treinos seguintes." },
  ],
},
{
  id: "23",
  name: "Creatina Monohidratada 100g Max Titanium Alta Pureza",
  slug: "creatina-monohidratada-100g-max-titanium-alta-pureza",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/2T9wQPP",
  image: "/images/produtos/creatina-monohidratada-100g-max-titanium-alta-pureza.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  rating: 4.8,
  reviews: 133214,
  sold: "+50 mil vendidos",
  shortDescription: "Creatina Monohidratada 100g Max Titanium com 5g por dose, alta pureza, 0% sódio e sem glúten. 2º em Cuidado da Saúde.",
  description: "Quem já conhece a Max Titanium sabe que a marca não entrega menos do que o melhor. A Creatina Monohidratada 100g é a prova disso: formulada com creatina de alta pureza, 0% de sódio e sem glúten, entrega 5g por porção com excelente solubilidade e preparo descomplicado. Com mais de 50 mil unidades vendidas e 2º lugar em Cuidado da Saúde no Mercado Livre, é ideal para quem quer experimentar a creatina pela primeira vez ou para quem prefere repor o estoque com uma opção mais acessível sem abrir mão da qualidade. Mistura fácil em água ou qualquer bebida — sem grumos, sem sabor e sem desculpas para não suplementar.",
  benefits: [
    "5g de creatina monohidratada de alta pureza por dose",
    "0% sódio — fórmula limpa e sem aditivos desnecessários",
    "Sem glúten — seguro para celíacos",
    "Excelente solubilidade e fácil dissolução",
    "Auxilia no desempenho em exercícios de alta intensidade",
    "Pode ser usado em diversas modalidades esportivas",
  ],
  howToUse: "Diluir 5g (1 dose) em água ou bebida de sua preferência. Consumir diariamente, preferencialmente após o treino. Manter boa hidratação ao longo do dia.",
  ingredients: "Creatina monohidratada e antiumectante dióxido de silício. Não contém glúten. Não contém lactose. Pode conter derivados de leite, ovo e soja.",
  whoShouldUse: "Atletas e praticantes de atividades físicas de alta intensidade que buscam melhorar o desempenho, aumentar a força e acelerar a recuperação muscular.",
  faq: [
    { question: "Quantas doses tem o pote de 100g?", answer: "Na dose padrão de 5g por dia, o pote rende 20 doses — ideal para quem quer testar a creatina antes de investir em embalagens maiores." },
    { question: "A Max Titanium Creatina tem sódio?", answer: "Não. O produto tem 0% de sódio, sendo uma opção limpa para quem controla a ingestão desse mineral." },
    { question: "Contém glúten ou lactose?", answer: "Não contém glúten nem lactose. Porém, pode conter traços de derivados de leite, ovo e soja devido ao processo de fabricação." },
    { question: "Posso comprar em kit com mais unidades?", answer: "Sim. O produto está disponível em kits de 2 ou 10 unidades no Mercado Livre, o que reduz o custo por grama e garante suplementação contínua." },
  ],
},
{
  id: "24",
  name: "Creatina Creapure 250g Growth Supplements Selo Alemão",
  slug: "creatina-creapure-250g-growth-supplements-selo-alemao",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/2y1CEk5",
  image: "/images/produtos/creatina-creapure-250g-growth-supplements-selo-alemao.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 20274,
  sold: "+100 mil vendidos",
  shortDescription: "Creatina Monohidratada com selo Creapure® de origem alemã — o padrão ouro de pureza em suplementação esportiva.",
  description: "Existe creatina e existe Creapure® — e a diferença importa. A Creatina Monohidratada da Growth Supplements com selo Creapure® é produzida na Alemanha com os mais rígidos padrões de controle técnico e pureza do mundo. 100% creatina monohidratada, sem blends, sem adição de aminoácidos extras, sem atalhos. Com mais de 100 mil unidades vendidas e 4º lugar em Suplementos Growth Supplements no Mercado Livre, é a escolha de quem entende que a qualidade da matéria-prima faz toda a diferença nos resultados. Para atletas de força, praticantes de musculação e quem não aceita menos que o melhor em creatina.",
  benefits: [
    "Selo Creapure® — padrão ouro de pureza de origem alemã",
    "100% creatina monohidratada sem blends ou adição de aminoácidos",
    "Suporte ao desempenho em exercícios de alta intensidade e volume",
    "Rigoroso controle técnico e padrões internacionais de qualidade",
    "Livre de glúten",
    "Mais de 100 mil vendidos — 4º em Suplementos Growth Supplements",
  ],
  howToUse: "Consumir 1 porção (5g) ao dia, diluída no líquido de sua preferência. Consumir preferencialmente após o treino. Manter hidratação adequada ao longo do dia. Indicado para maiores de 19 anos.",
  ingredients: "Creatina Monohidratada Creapure® 100% pura. Não contém glúten. Sem blends ou adição de outros aminoácidos.",
  whoShouldUse: "Praticantes de musculação, atletas de força e explosão e qualquer pessoa que busca creatina com certificação internacional de pureza e os melhores resultados em performance.",
  faq: [
    { question: "O que é o selo Creapure®?", answer: "Creapure® é uma marca registrada de creatina monohidratada fabricada na Alemanha pela AlzChem. É considerada o padrão ouro do mercado, com rigoroso controle de pureza e rastreabilidade da matéria-prima." },
    { question: "Qual a diferença entre a creatina Creapure® e a comum?", answer: "A Creapure® passa por processos de síntese e purificação mais rigorosos, com menor chance de contaminações e maior consistência na pureza lote a lote. É a preferida de atletas profissionais ao redor do mundo." },
    { question: "Quantas doses tem o pote de 250g?", answer: "Na dose padrão de 5g por dia, o pote rende 50 doses — aproximadamente 50 dias de suplementação contínua." },
    { question: "Tem diferença de resultado entre a Creapure® e a creatina comum?", answer: "A eficácia da creatina monohidratada é a mesma independente da origem, desde que a pureza seja alta. A vantagem da Creapure® está na garantia de pureza certificada e rastreabilidade, reduzindo riscos de adulteração." },
  ],
},
{
  id: "25",
  name: "Creatina Creapure 120 Comprimidos Growth Supplements",
  slug: "creatina-creapure-120-comprimidos-growth-supplements",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/1HrR7Re",
  image: "/images/produtos/creatina-creapure-120-comprimidos-growth-supplements.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  rating: 4.8,
  reviews: 456,
  sold: "+1000 vendidos",
  shortDescription: "Creatina Creapure em comprimidos — 120 unidades de 1450mg com pureza alemã certificada para força e massa muscular.",
  description: "Para quem não quer medir pó nem carregar colher dosadora, a Creatina Creapure em Comprimidos da Growth Supplements é a solução perfeita. São 120 comprimidos de 1450mg com a mesma matéria-prima Creapure® de origem alemã, reconhecida mundialmente como referência em pureza e confiabilidade. Cada pote traz 174g de creatina monohidratada de alta qualidade, na praticidade de uma cápsula fácil de engolir — ideal para encaixar na rotina pré ou pós-treino sem complicação. A escolha de quem quer a elite da creatina no formato mais conveniente do mercado.",
  benefits: [
    "Creatina Creapure® 100% autêntica — fabricada na Alemanha",
    "120 comprimidos de 1450mg por pote",
    "Formato prático — sem balança, sem colher, sem bagunça",
    "Auxilia no aumento de força e ganho de massa muscular",
    "Melhora o desempenho em exercícios de alta intensidade",
    "Acelera a recuperação muscular pós-treino",
  ],
  howToUse: "Consumir conforme orientação do médico ou nutricionista. Ingerir os comprimidos com água, preferencialmente junto a uma refeição. Indicado para maiores de 18 anos. Não indicado para gestantes.",
  ingredients: "Creatina Monohidratada Creapure® 1450mg por comprimido. Excipientes: celulose microcristalina, dióxido de silício, estearato de magnésio.",
  whoShouldUse: "Atletas e praticantes de musculação que buscam os benefícios da creatina Creapure® com a praticidade do formato em comprimidos. Indicado para maiores de 18 anos. Não indicado para gestantes.",
  faq: [
    { question: "Quantos comprimidos devo tomar por dia?", answer: "Siga sempre a orientação do médico ou nutricionista. A dose habitual de creatina é de 5g por dia — verifique quantos comprimidos equivalem a essa dose conforme a tabela nutricional do produto." },
    { question: "Qual a vantagem do comprimido em relação ao pó?", answer: "O comprimido é mais prático para o dia a dia: não precisa de colher dosadora, balança ou misturar em líquido. Ideal para quem viaja, trabalha fora ou prefere simplicidade na suplementação." },
    { question: "Gestantes podem usar?", answer: "Não. O produto não é indicado para uso durante a gravidez. Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação." },
    { question: "A Creapure® em comprimido tem a mesma eficácia que em pó?", answer: "Sim. A matéria-prima é a mesma — Creatina Monohidratada Creapure® de origem alemã — independente do formato. A eficácia é equivalente ao pó quando consumida na dose correta." },
  ],
},
{
  id: "26",
  name: "Kit Halteres 3 Em 1 Ajustável Até 40kg Barras e Anilhas Ahead Sports",
  slug: "kit-halteres-3-em-1-ajustavel-40kg-barras-anilhas-ahead-sports",
  category: "acessorios",
  categoryName: "Acessórios",
  affiliateLink: "https://meli.la/2cb7okG",
  image: "/images/produtos/kit-halteres-3-em-1-ajustavel-ate-40kg-barras-anilhas-ahead-sports.webp",
  badge: "Recomendado",
  rating: 4.7,
  reviews: 153,
  sold: "+500 vendidos",
  shortDescription: "Kit 3 em 1 com halteres ajustáveis, barras e anilhas até 40kg para treino completo em casa. Acompanha e-book.",
  description: "Montar uma academia em casa nunca foi tão acessível. O Kit Halteres 3 em 1 da Ahead Sports reúne tudo que você precisa para treinar membros superiores com progressão de carga real: dois halteres ajustáveis, conector para transformar em barra e um conjunto completo de anilhas que chegam até 40kg no total. Com 8 anilhas de 3kg, 4 de 2,5kg e 4 de 1,25kg, você monta a carga exata para cada exercício — do aquecimento ao levantamento pesado. Design ergonômico com presilhas de segurança, acompanha e-book exclusivo com guia de treino em casa. Do sofá ao suor, sem sair de casa.",
  benefits: [
    "Kit 3 em 1: halteres, barra e anilhas em um único conjunto",
    "Ajuste de carga de até 40kg no total",
    "Anilhas em 3 tamanhos: 3kg, 2,5kg e 1,25kg para progressão precisa",
    "Conector para unir as barras e ampliar os exercícios possíveis",
    "Design ergonômico com presilhas de segurança",
    "Acompanha e-book com guia completo de treino em casa",
  ],
  howToUse: "Monte os halteres encaixando as anilhas nas barras e fixando com as presilhas de ajuste. Use o conector para unir as duas barras e realizar exercícios com barra. Ajuste o peso conforme o exercício e seu nível de condicionamento. Consulte o e-book incluso para sugestões de treino.",
  ingredients: undefined,
  whoShouldUse: "Iniciantes e intermediários que querem montar uma academia em casa com versatilidade e progressão de carga. Ideal para quem busca fortalecer membros superiores, definir musculatura e aumentar resistência sem sair de casa.",
  faq: [
    { question: "O kit chega completo com todas as anilhas?", answer: "Sim. O kit inclui 2 barras com 4 presilhas cada, 1 conector, 8 anilhas de 3kg, 4 anilhas de 2,5kg e 4 anilhas de 1,25kg — totalizando até 40kg de carga." },
    { question: "Posso usar como barra e como halter?", answer: "Sim! É exatamente essa a proposta do kit 3 em 1. Use cada barra separadamente como halter ou conecte as duas para exercícios com barra." },
    { question: "O que é o e-book incluso?", answer: "É um guia digital com sugestões de treinos para fazer em casa utilizando o kit, ideal para quem está começando e quer aproveitar ao máximo o equipamento." },
    { question: "As presilhas são seguras?", answer: "Sim. O kit conta com presilhas de ajuste que travam as anilhas nas barras, garantindo segurança durante os exercícios." },
  ],
},
{
  id: "27",
  name: "Creatina Gummy Gominhas 60 Unidades Amora Super Nutrition",
  slug: "creatina-gummy-gominhas-60-unidades-amora-super-nutrition",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/2znopDm",
  image: "/images/produtos/creatina-gummy-gominhas-60-unidades-amora-super-nutrition.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  sold: "+1000 vendidos",
  rating: 4.8,
  reviews: 692,
  shortDescription: "Creatina Monohidratada em gominhas sabor amora com 3g por porção. Zero açúcar, zero glúten e zero lactose. 60 unidades.",
  description: "Quem disse que suplementar precisa ser chato? A Creatina Gummy da Super Nutrition chegou para mudar esse jogo — mesma eficácia da creatina monohidratada tradicional, agora no formato de gominhas macias com sabor amora irresistível. Com mais de 1000 unidades vendidas e 8º lugar em Suplementos Super Nutrition no Mercado Livre, cada pote traz 60 gominhas com 3g de creatina monohidratada por porção, sem adição de açúcar, livre de glúten e lactose. Perfeita para quem tem dificuldade de engolir cápsulas ou simplesmente quer tornar a suplementação mais prazerosa sem abrir mão dos resultados.",
  benefits: [
    "3g de creatina monohidratada por porção",
    "Formato inovador em gominhas — fácil e prático",
    "Sabor amora natural irresistível",
    "Zero adição de açúcar",
    "Zero glúten e zero lactose",
    "60 gominhas por pote",
    "Mesma eficácia da creatina tradicional em pó",
    "8º em Suplementos Super Nutrition no Mercado Livre",
  ],
  howToUse: "Consumir 1 porção (2 gominhas = 3g de creatina) ao dia. Pode ser consumida a qualquer momento do dia, com ou sem alimentos. Para melhores resultados, manter o uso contínuo diário.",
  ingredients: "Creatina monohidratada, gelatina, água, aroma natural de amora, corante natural, edulcorantes naturais. Não contém glúten. Não contém lactose. Sem adição de açúcar.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que praticam atividades físicas de alta intensidade e buscam mais força, potência e volume muscular de forma prática e saborosa. Ideal para quem tem dificuldade com suplementos em pó ou cápsulas.",
  faq: [
    {
      question: "A creatina em goma tem a mesma eficácia que a creatina em pó?",
      answer: "Sim. A creatina monohidratada é o ingrediente ativo em ambos os formatos. O que muda é apenas a forma de consumo, não a eficácia."
    },
    {
      question: "Quantas gominhas por dose?",
      answer: "Cada porção equivale a 2 gominhas, fornecendo 3g de creatina monohidratada."
    },
    {
      question: "Quantos dias dura o pote de 60 gominhas?",
      answer: "Na dose recomendada de 2 gominhas ao dia, o pote rende 30 dias de uso contínuo."
    },
    {
      question: "Tem açúcar na fórmula?",
      answer: "Não. O produto não tem adição de açúcar, sendo adoçado com edulcorantes naturais."
    },
    {
      question: "Pode tomar junto com whey protein e pré-treino?",
      answer: "Sim. A creatina é compatível com todos os suplementos. Pode consumir junto ou em horários separados sem problema."
    },
  ],
},
{
  id: "28",
  name: "Top Whey 3W 900g Iogurte Grego de Morango Max Titanium",
  slug: "top-whey-3w-900g-iogurte-grego-morango-max-titanium",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/2znopDm",
  image: "/images/produtos/top-whey-3w-900g-iogurte-grego-morango-max-titanium.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.7,
  reviews: 895,
  shortDescription: "Whey 3W com WPC, WPI e WPH, 25g de proteína por dose, rico em BCAAs e vitaminas. Sabor Iogurte Grego de Morango. Zero glúten.",
  description: "A Max Titanium elevou o nível com o Top Whey 3W — um whey protein completo que combina as três formas mais eficientes de proteína do soro do leite em uma única dose. Com WPC para absorção sustentada, WPI para pureza e baixo teor de carboidratos, e WPH para absorção ultra-rápida, o produto entrega 25g de proteína por porção com 5.487mg de BCAAs, auxiliando na construção muscular e na recuperação pós-treino. A fórmula ainda conta com um mix completo de vitaminas e minerais, tornando-o um dos wheys mais completos do mercado. O sabor Iogurte Grego de Morango com pedaços de morango desidratado é um dos mais elogiados pelos consumidores. Mais de 10 mil vendidos.",
  benefits: [
    "Tripla fonte proteica: WPC + WPI + WPH",
    "25g de proteína por dose",
    "5.487mg de BCAAs por porção",
    "Mix completo de vitaminas e minerais",
    "Baixo teor de carboidratos",
    "Absorção rápida e fácil digestão",
    "Sabor Iogurte Grego de Morango com pedaços reais",
    "Não contém glúten",
  ],
  howToUse: "Adicionar 40g do produto em 200ml de água ou leite desnatado. Consumir preferencialmente após o treino ou conforme orientação de nutricionista ou médico. Após aberto, consumir em até 30 dias.",
  ingredients: "Proteína concentrada do soro do leite (WPC), proteína isolada do soro do leite (WPI), proteína hidrolisada do soro do leite (WPH), cacau alcalino, mix de vitaminas e minerais (vitamina C, B3, E, B5, B6, B2, B1, cobre, vitamina A, ácido fólico, iodo, molibdênio, cromo, selênio, biotina, vitamina B12), emulsificante lecitina de soja, corante caramelo IV, aromatizantes, edulcorante sucralose. Não contém glúten.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação que buscam máxima recuperação muscular, ganho de massa e um whey completo com vitaminas e minerais em uma única dose.",
  faq: [
    {
      question: "Qual a diferença do 3W para o whey comum?",
      answer: "O 3W combina três fontes proteicas: concentrado, isolado e hidrolisado. Isso garante absorção em diferentes velocidades — rápida, média e sustentada — para melhor aproveitamento pelo organismo."
    },
    {
      question: "Quantas doses tem a embalagem de 900g?",
      answer: "A embalagem de 900g rende aproximadamente 22 doses de 40g cada."
    },
    {
      question: "Contém glúten?",
      answer: "Não. O Top Whey 3W é livre de glúten."
    },
    {
      question: "Pode tomar com leite?",
      answer: "Sim. Com leite desnatado o sabor fica ainda mais cremoso e o valor proteico da dose aumenta."
    },
    {
      question: "Após aberto quanto tempo dura?",
      answer: "Após aberto, consumir em até 30 dias. Conservar em local fresco, seco e ao abrigo da luz."
    },
  ],
},
{
  id: "29",
  name: "Pré-Treino Horus 300g Frutas Vermelhas Max Titanium",
  slug: "pre-treino-horus-300g-frutas-vermelhas-max-titanium",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1trcUgs",
  image: "/images/produtos/pre-treino-horus-300g-frutas-vermelhas-max-titanium.webp",
  badge: "Oferta Imperdível",
  sold: "+50 mil vendidos",
  rating: 4.8,
  reviews: 17765,
  shortDescription: "Pré-treino com 2g de Beta-Alanina, 150mg de Cafeína, 1g de Taurina e 1g de Arginina por dose. Mais de 50 mil vendidos. Sabor Frutas Vermelhas.",
  description: "O Horus da Max Titanium é um dos pré-treinos mais vendidos do Brasil — e os números provam isso: mais de 50 mil unidades vendidas e uma das fórmulas mais completas da categoria. Cada porção entrega 2g de Beta-Alanina para retardar a fadiga muscular, 150mg de Cafeína para energia e foco explosivos, 1g de Taurina para resistência e hidratação celular e 1g de L-Arginina para bombeamento e vascularização. O resultado é um treino mais intenso, mais produtivo e com menos cansaço. Disponível em 7 sabores, o Frutas Vermelhas é um dos mais elogiados pelos consumidores. Sem lactose.",
  benefits: [
    "2g de Beta-Alanina para redução da fadiga muscular",
    "150mg de Cafeína para energia e foco explosivos",
    "1g de Taurina para resistência e hidratação celular",
    "1g de L-Arginina para bombeamento e vascularização",
    "Mais de 50 mil vendidos",
    "Disponível em 7 sabores",
    "Sem lactose",
    "Ideal para treinos de alta intensidade",
  ],
  howToUse: "Diluir 8,4g (1 e meio dosador) em 300ml de água gelada. Consumir aproximadamente 30 minutos antes da atividade física. Não exceder a dose diária recomendada.",
  ingredients: "Beta-Alanina (2g), Taurina (1.000mg), L-Arginina (1.000mg), Cafeína (150mg), aromatizantes, edulcorantes. Não contém lactose. Pode conter traços de leite, ovo e soja.",
  whoShouldUse: "Indicado para adultos acima de 18 anos que praticam atividades físicas de alta intensidade e buscam mais energia, foco, resistência e bombeamento muscular nos treinos. Não recomendado para gestantes, lactantes ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "O Horus causa formigamento?",
      answer: "Sim. A Beta-Alanina presente na fórmula pode causar formigamento temporário na pele (parestesia). É completamente inofensivo e passa em alguns minutos."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 35 doses de 8,4g cada."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém 150mg de cafeína, o que pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Horus está disponível em 7 sabores: Amora, Blue Ice, Citrus, Cotton Candy, Frutas Vermelhas, Limão Yuzu e Maçã Verde."
    },
    {
      question: "Contém lactose?",
      answer: "Não contém lactose. Porém, pode conter traços de leite, ovo e soja devido ao processo de fabricação."
    },
  ],
},
{
  id: "30",
  name: "Pré-Treino Panic 150g Limonada com Creatina Adaptogen Science",
  slug: "pre-treino-panic-150g-limonada-com-creatina-adaptogen-science",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1QqgVVH",
  image: "/images/produtos/pre-treino-panic-150g-limonada-com-creatina-adaptogen-science.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  sold: "+10 mil vendidos",
  rating: 4.7,
  reviews: 4903,
  shortDescription: "Pré-treino com creatina adicionada, sabor Limonada reformulado. Mais de 10 mil vendidos. 150g de puro desempenho.",
  description: "O Panic da Adaptogen Science não é um pré-treino qualquer — é uma experiência. Com fórmula reformulada e mais de 10 mil unidades vendidas, o Panic chegou para quem quer treinar no limite sem economizar em sabor ou resultado. O diferencial está na creatina adicionada à fórmula, combinando o efeito imediato do pré-treino com os benefícios de força e volume muscular da creatina em uma única dose. O sabor Limonada é refrescante e faz sucesso entre os consumidores. Disponível em diversas opções de tamanho, de 33g até 900g, para todos os bolsos e rotinas.",
  benefits: [
    "Creatina adicionada na fórmula — dois suplementos em um",
    "Fórmula reformulada e aprimorada",
    "Energia e foco para treinos intensos",
    "Sabor Limonada refrescante e aprovado",
    "Mais de 10 mil vendidos",
    "Disponível em 6 tamanhos diferentes",
    "Ideal para quem quer praticidade na suplementação",
  ],
  howToUse: "Diluir 1 dose em 300ml de água gelada. Consumir aproximadamente 30 minutos antes da atividade física. Não exceder a dose diária recomendada. Não consumir à noite devido ao teor de cafeína.",
  ingredients: "Creatina monohidratada, beta-alanina, cafeína anidra, taurina, aromatizantes, acidulante ácido cítrico, edulcorantes. Aromatizado artificialmente. Verificar rótulo para informações completas.",
  whoShouldUse: "Indicado para adultos acima de 18 anos que praticam atividades físicas de alta intensidade e buscam mais energia, foco e os benefícios da creatina em uma única dose prática. Não recomendado para gestantes, lactantes ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "O Panic já tem creatina na fórmula?",
      answer: "Sim! O Panic tem creatina adicionada, o que significa que você já recebe os benefícios da creatina junto com o pré-treino em uma única dose, sem precisar comprar separado."
    },
    {
      question: "Quantas doses tem a embalagem de 150g?",
      answer: "A embalagem de 150g rende aproximadamente 18 doses. Para mais doses, o produto está disponível em embalagens de até 900g."
    },
    {
      question: "O sabor foi reformulado?",
      answer: "Sim. A Adaptogen Science reformulou a fórmula e os sabores do Panic, deixando o sabor ainda mais agradável e a fórmula mais eficiente."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém cafeína, o que pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
    {
      question: "Quais tamanhos estão disponíveis?",
      answer: "O Panic está disponível em 6 tamanhos: 33g, 100g, 150g, 225g, 300g e 900g, para todos os bolsos e rotinas."
    },
  ],
},
{
  id: "31",
  name: "Pré-Treino Dux Nutrition 300g Frutas Vermelhas",
  slug: "pre-treino-dux-nutrition-300g-frutas-vermelhas",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1v68EjA",
  image: "/images/produtos/pre-treino-dux-nutrition-300g-frutas-vermelhas.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  sold: "+10 mil vendidos",
  rating: 4.8,
  reviews: 4452,
  shortDescription: "Pré-treino com água de coco, Beta-Alanina, Cafeína, Guaraná, BCAAs e vitaminas do complexo B. Energia instantânea e prolongada. Sabor Frutas Vermelhas.",
  description: "A Dux Nutrition é referência em qualidade premium no mercado de suplementos — e o Pre Workout não é diferente. Com mais de 10 mil unidades vendidas, esta fórmula foi desenvolvida para proporcionar energia instantânea e prolongada durante os treinos. O diferencial está na combinação de água de coco em pó para hidratação, Beta-Alanina para resistência muscular, cafeína e guaraná em pó para energia sustentada, BCAAs (Leucina, Isoleucina e Valina) para proteção muscular e um mix completo de vitaminas do complexo B para suporte metabólico. Disponível em 4 sabores, o Frutas Vermelhas é um dos mais elogiados. Após aberto, dura até 120 dias.",
  benefits: [
    "Água de coco em pó para hidratação durante o treino",
    "Beta-Alanina para resistência e redução da fadiga",
    "Cafeína + Guaraná para energia instantânea e prolongada",
    "BCAAs (Leucina, Isoleucina e Valina) para proteção muscular",
    "Mix de vitaminas B1, B2, B3, B9 e B12",
    "Extrato de chá verde para termogênese",
    "Mais de 10 mil vendidos",
    "Disponível em 4 sabores",
  ],
  howToUse: "Adicionar 15g (1 dosador) em 250ml de água e misturar em uma coqueteleira até homogeneizar. Consumir aproximadamente 30 minutos antes do treino. Após aberto, consumir em até 120 dias. Conservar ao abrigo de luz, calor e umidade.",
  ingredients: "Água de coco em pó, beta-alanina, L-Arginina, taurina, mix de vitaminas (vitamina B3, B2, B1, B9, biotina, B12), L-Leucina, L-Isoleucina, L-Valina, cafeína, guaraná em pó, regulador de acidez INS 330, aromatizantes, corante INS 120, extrato de chá verde, edulcorante INS 955. Contém glúten. Pode conter trigo, aveia, amendoim, soja, leite, amêndoa, avelãs e castanha-de-caju.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que praticam atividades físicas de alta intensidade e buscam energia instantânea e prolongada, foco mental e resistência muscular nos treinos. Não recomendado para gestantes, lactantes ou crianças.",
  faq: [
    {
      question: "O Dux Pre Workout contém glúten?",
      answer: "Sim. O produto contém glúten e pode conter traços de trigo, aveia, amendoim, soja, leite, amêndoa, avelãs e castanha-de-caju."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 20 doses de 15g cada."
    },
    {
      question: "Qual a diferença entre o frasco e o pote?",
      answer: "O frasco e o pote contêm o mesmo produto e quantidade. A diferença é apenas na embalagem — o pote é mais prático para uso em casa e o frasco para carregar na mochila."
    },
    {
      question: "Após aberto quanto tempo dura?",
      answer: "Após aberto, consumir em até 120 dias. Conservar ao abrigo de luz, calor e umidade com o pote fechado após o uso."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Dux Pre Workout está disponível em 4 sabores: Frutas Vermelhas, Limonada Rosa, Mango Twist e Maçã Verde."
    },
  ],
},
{
  id: "32",
  name: "Pré-Treino B.O.P.E 300g Limão Black Skull",
  slug: "pre-treino-bope-300g-limao-black-skull",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/16wCLoD",
  image: "/images/produtos/pre-treino-bope-300g-limao-black-skull.webp",
  badge: "Mais Vendido",
  sold: "+500 vendidos",
  rating: 4.9,
  reviews: 57,
  shortDescription: "Pré-treino Xtreme Energy Drink com energia, foco e resistência para treinos intensos. Sabor Limão. Zero glúten. 300g.",
  description: "O B.O.P.E da Black Skull não é pré-treino para quem treina pela metade. Desenvolvido para atletas e praticantes de atividades físicas que buscam performance de verdade, o B.O.P.E entrega energia sustentada do início ao fim do treino, foco mental afiado para a conexão mente-músculo e suporte à recuperação muscular pós-esforço. Sua fórmula Xtreme Energy Drink foi cuidadosamente elaborada para quem precisa superar platôs e alcançar novos patamares de performance. Livre de glúten e disponível em 3 sabores. O sabor Limão é refrescante e faz sucesso entre os consumidores.",
  benefits: [
    "Energia sustentada do início ao fim do treino",
    "Foco mental para conexão mente-músculo",
    "Suporte à recuperação muscular pós-treino",
    "Fórmula Xtreme Energy Drink",
    "Zero glúten",
    "Disponível em 3 sabores",
    "Rende até 60 doses por embalagem",
    "Ideal para treinos de alta intensidade",
  ],
  howToUse: "Misturar 1 colher de chá (aproximadamente 5g) em 150ml de água. Consumir 20 a 30 minutos antes do treino. Ajustar a dosagem conforme tolerância e recomendação de profissional de saúde.",
  ingredients: "Blend energético com cafeína, beta-alanina, taurina, arginina, aromatizantes artificiais de limão, acidulantes, edulcorantes. Livre de glúten. Contém lactose. Verificar rótulo para informações completas.",
  whoShouldUse: "Indicado para adultos acima de 18 anos que praticam atividades físicas intensas e buscam mais energia, foco e resistência nos treinos. Não recomendado para gestantes, lactantes ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "O B.O.P.E contém glúten?",
      answer: "Não. O produto é livre de glúten. Porém contém lactose."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "Com a dose recomendada de 5g, a embalagem de 300g rende aproximadamente 60 doses."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O B.O.P.E está disponível em 3 sabores: Fruit Punch (Frutas Vermelhas), Frutas Amarelas e Lemon (Limão)."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém cafeína, o que pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
    {
      question: "É indicado para iniciantes?",
      answer: "Sim, mas recomenda-se começar com metade da dose para avaliar a tolerância antes de usar a dose completa."
    },
  ],
},
{
  id: "33",
  name: "Pré-Treino Prohibido 360g Strawberry Margarita 3VS Nutrition",
  slug: "pre-treino-prohibido-360g-strawberry-margarita-3vs-nutrition",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1aoXtkV",
  image: "/images/produtos/pre-treino-prohibido-360g-strawberry-margarita-3vs-nutrition.webp",
  badge: "Mais Vendido",
  sold: "+50 mil vendidos",
  rating: 4.7,
  reviews: 37221,
  shortDescription: "Pré-treino Hardcore com 8 ingredientes ativos, creatina, palatinose e cafeína. Energia do início ao fim. Mais de 50 mil vendidos. 360g.",
  description: "Se você está preso no mesmo platô e seus treinos perderam a intensidade, o Prohibido da 3VS Nutrition veio para mudar isso. Com mais de 50 mil unidades vendidas e 1º lugar em Suplementos Alimentares 3VS no Mercado Livre, este pré-treino Hardcore reúne 8 ingredientes ativos numa fórmula pensada para liberar sua performance total. A Palatinose garante energia gradual e sustentada do início ao fim, enquanto a Creatina potencializa força e explosão muscular. A L-Tirosina aguça o foco e a motivação, e a Cafeína Anidra dispara a energia imediata. O resultado? Treinos mais intensos, mais força, mais pump e queima de gordura acelerada.",
  benefits: [
    "Palatinose para energia gradual e sustentada",
    "Creatina para força, explosão e massa magra",
    "Beta-Alanina para resistência e anticatabolismo",
    "L-Tirosina para foco, motivação e síntese de dopamina",
    "Arginina para vasodilatação e pump muscular",
    "Taurina para proteção cardiovascular e hidratação",
    "Cafeína Anidra para energia imediata",
    "Mais de 50 mil vendidos — 1º em Suplementos 3VS",
  ],
  howToUse: "Adicionar 1 medidor (15g) em 300ml de água e agitar bem. Consumir 20 a 30 minutos antes do treino. Não exceder a dose diária recomendada. Indicado para maiores de 19 anos.",
  ingredients: "L-Arginina, Creatina Monohidratada, Palatinose (Isomaltulose), Beta-Alanina, Taurina, L-Alanina, L-Tirosina, Cafeína Anidra, Vitamina B6 (Piridoxina), Vitamina B3 (Ácido Nicotínico), Picolinato de Cromo, Acidulante Ácido Cítrico, aromas idênticos aos naturais de limão, morango e laranja, edulcorante sucralose, antiumectante dióxido de silício, corante vermelho allura e corante amarelo crepúsculo.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que praticam atividades físicas de alta intensidade e buscam mais energia, força, foco, pump e queima de gordura nos treinos. Não recomendado para gestantes, lactantes ou crianças.",
  faq: [
    {
      question: "O Prohibido tem creatina na fórmula?",
      answer: "Sim! O Prohibido já conta com creatina monohidratada na fórmula, dispensando a necessidade de suplementar creatina separadamente."
    },
    {
      question: "O que é Palatinose e por que ela é diferente?",
      answer: "A Palatinose (Isomaltulose) é um carboidrato de liberação gradual de energia, diferente da cafeína que age rápido e cai rápido. Ela mantém seu desempenho sustentado do início ao fim do treino."
    },
    {
      question: "Quantas doses tem a embalagem de 360g?",
      answer: "A embalagem de 360g rende aproximadamente 24 doses de 15g cada."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém cafeína anidra, o que pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
    {
      question: "O Prohibido ajuda a perder gordura?",
      answer: "Sim. A fórmula acelera o metabolismo e facilita a transformação de gordura em energia durante o treino, potencializando a queima calórica."
    },
  ],
},
{
  id: "34",
  name: "Pré-Treino Haze Hardcore 300g Uva Growth Supplements",
  slug: "pre-treino-haze-hardcore-300g-uva-growth-supplements",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/1y83qsb",
  image: "/images/produtos/pre-treino-haze-hardcore-300g-uva-growth-supplements.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.9,
  reviews: 6410,
  shortDescription: "Pré-treino Hardcore com 2g de Beta-Alanina, 150mg de Cafeína e Palatinose para energia sustentada. Zero glúten. Sabor Uva. 300g.",
  description: "A Growth Supplements desenvolveu o Haze Hardcore para quem não aceita treino pela metade. Com mais de 10 mil unidades vendidas e 5º lugar em Suplementos Growth Supplements no Mercado Livre, este pré-treino foi criado em conjunto pela equipe de profissionais e atletas da Growth para garantir que cada ingrediente esteja na dose certa, no momento certo. A combinação de 2g de Beta-Alanina para resistência, 150mg de Cafeína para energia e alerta, 1g de Taurina para hidratação celular, 1g de Arginina para pump e Palatinose para energia gradual e sustentada faz do Haze Hardcore uma das fórmulas mais completas e equilibradas do mercado. Nova fórmula, zero glúten, sabor Uva.",
  benefits: [
    "2g de Beta-Alanina para resistência e redução da fadiga",
    "150mg de Cafeína para energia e estado de alerta",
    "1g de Arginina para pump e vascularização",
    "1g de Taurina para hidratação celular e resistência",
    "Palatinose para energia gradual e sustentada",
    "Desenvolvido com atletas Growth Supplements",
    "Zero glúten — nova fórmula",
    "Mais de 10 mil vendidos — 5º em Suplementos Growth",
  ],
  howToUse: "Misturar 10g (aproximadamente 1 dosador e meio) em 200ml de água gelada. Consumir cerca de 45 minutos antes do treino. Após aberto, consumir em até 40 dias.",
  ingredients: "Beta-Alanina (2g), L-Arginina (1g), Taurina (1g), L-Tirosina (265mg), Cafeína (150mg), Isomaltulose (Palatinose), aromatizante sintético idêntico ao natural, corante artificial, edulcorantes. Livre de glúten.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que treinam com alta intensidade ou volume elevado e buscam melhorar a performance com um pré-treino estruturado e equilibrado. Não recomendado para gestantes, lactantes ou crianças.",
  faq: [
    {
      question: "O Haze Hardcore contém glúten?",
      answer: "Não. O produto é livre de glúten."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 30 doses de 10g cada."
    },
    {
      question: "O que é Palatinose e qual sua vantagem?",
      answer: "A Palatinose (Isomaltulose) é um carboidrato de liberação gradual que mantém a energia estável ao longo de todo o treino, evitando a queda de desempenho no meio ou no final."
    },
    {
      question: "Após aberto quanto tempo dura?",
      answer: "Após aberto, consumir em até 40 dias. Conservar em local fresco, seco e ao abrigo da luz."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Haze Hardcore está disponível em 3 sabores: Açaí com Guaraná, Limão e Uva."
    },
  ],
},
{
  id: "35",
  name: "Pré-Treino Venom Underground 300g Mango Loko Dark Lab",
  slug: "pre-treino-venom-underground-300g-mango-loko-dark-lab",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/2cSQdb5",
  image: "/images/produtos/pre-treino-venom-underground-300g-mango-loko-dark-lab.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.8,
  reviews: 22090,
  shortDescription: "Pré-treino Underground com 400mg de Cafeína, 2g de Beta-Alanina, Colostro Bovino e extrato de café verde. Zero glúten. Sabor Mango Loko.",
  description: "O Venom Underground da Dark Lab não é para iniciantes — e o nome já avisa. Com mais de 10 mil unidades vendidas, este pré-treino foi formulado para quem já conhece o próprio limite e quer ir além. Os 400mg de Cafeína entregam uma explosão de energia como poucos pré-treinos no mercado, potencializados pelo Extrato de Café Verde para termogênese e foco prolongado. A fórmula ainda traz ingredientes premium como Colostro Bovino para recuperação e imunidade, Extrato de Semente de Uva como antioxidante, Alga Chondrus Crispus para suporte mineral e Bisglicinato de Magnésio para função muscular. Uma fórmula completa, sem glúten, para treinos no nível Underground.",
  benefits: [
    "400mg de Cafeína para energia máxima e explosiva",
    "2g de Beta-Alanina para resistência e anticatabolismo",
    "1g de Arginina para pump e vascularização",
    "Colostro Bovino para recuperação e imunidade",
    "Extrato de Café Verde para termogênese e foco",
    "Extrato de Semente de Uva como antioxidante",
    "Bisglicinato de Magnésio para função muscular",
    "Zero glúten — disponível em 4 sabores",
  ],
  howToUse: "Misturar 1 dose em 300ml de água gelada. Consumir 20 a 30 minutos antes do treino. Devido ao alto teor de cafeína (400mg), recomenda-se começar com meia dose para avaliar a tolerância. Não consumir à noite.",
  ingredients: "Beta-Alanina (2g), L-Arginina (1.000mg), Taurina (750mg), Cafeína (400mg), Colostro Bovino em Pó, L-Cisteína, L-Tirosina, N-Acetil L-Metionina, Ácido Ascórbico (Vitamina C), Extrato de Café Verde, Extrato Seco de Semente de Uva, Alga Chondrus Crispus, Bisglicinato de Magnésio, Zinco Aspartato, Vitamina B6, Aroma Idêntico ao Natural, Corante Vermelho de Beterraba, Acidulante Ácido Cítrico, Edulcorante Sucralose. Não contém glúten. Pode conter traços de amendoim, leite, soja e ovo.",
  whoShouldUse: "Indicado para adultos acima de 18 anos com experiência em pré-treinos que buscam máxima energia, foco e performance. Não recomendado para iniciantes, gestantes, lactantes, crianças ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "400mg de cafeína é muito? É seguro?",
      answer: "400mg é considerado o limite diário seguro para adultos saudáveis pela maioria dos órgãos de saúde. Porém, para quem não está acostumado, recomenda-se começar com meia dose (200mg) para avaliar a tolerância."
    },
    {
      question: "O Venom contém glúten?",
      answer: "Não. O produto é livre de glúten. Pode conter traços de amendoim, leite, soja e ovo devido ao processo de fabricação."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 20 doses completas. Iniciantes podem usar meia dose, dobrando o rendimento para 40 doses."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Venom Underground está disponível em 4 sabores: Limão, Mango Loko, Maçã Verde e Ponche de Frutas."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Definitivamente não. Com 400mg de cafeína, o Venom pode prejudicar seriamente o sono. Consuma pelo menos 8 horas antes de dormir."
    },
  ],
},
{
  id: "36",
  name: "Pré-Treino Diabo Verde 300g Frutas Amarelas FTW",
  slug: "pre-treino-diabo-verde-300g-frutas-amarelas-ftw",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/19Z6Axy",
  image: "/images/produtos/pre-treino-diabo-verde-300g-frutas-amarelas-ftw.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.8,
  reviews: 68826,
  shortDescription: "Pré-treino Nova Fórmula com Beta-Alanina, Arginina, Tirosina, Cafeína microencapsulada e Palatinose. Zero glúten. 30 doses. Sabor Frutas Amarelas.",
  description: "O Diabo Verde da FTW é um dos pré-treinos mais vendidos do Brasil — e os números falam por si: mais de 10 mil unidades vendidas e 1º lugar em Suplementos FTW no Mercado Livre. Com nova fórmula reformulada, combina Isomaltulose (Palatinose) para energia gradual e sustentada, Beta-Alanina para resistência muscular, L-Arginina para pump e vascularização, L-Tirosina para foco e motivação, Taurina para hidratação celular e Cafeína Microencapsulada para liberação controlada de energia sem picos e quedas bruscas. Tudo isso em 30 doses de 10g, zero glúten, com o clássico sabor Frutas Amarelas.",
  benefits: [
    "Cafeína microencapsulada para liberação controlada de energia",
    "Isomaltulose (Palatinose) para energia gradual e sustentada",
    "Beta-Alanina para resistência e redução da fadiga",
    "L-Arginina para pump e vascularização muscular",
    "L-Tirosina para foco, motivação e estado mental",
    "Taurina para hidratação celular e resistência",
    "Zero glúten — nova fórmula reformulada",
    "1º em Suplementos FTW no Mercado Livre",
  ],
  howToUse: "Diluir 2 medidas dosadoras (10g) em 200ml de água gelada. Consumir 30 minutos antes da atividade física. A dose diária máxima de Beta-Alanina é de 2g, podendo ser dividida com intervalo mínimo de 2 horas entre as porções. Após aberto, consumir em até 45 dias.",
  ingredients: "Isomaltulose, Beta-Alanina, L-Arginina, L-Taurina, L-Tirosina, Cafeína Microencapsulada, Antiumectante Fosfato Tricálcico, Acidulante Ácido Cítrico, Edulcorantes Sucralose e Acessulfame de Potássio, Aromatizante e Corante. Não contém glúten.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que praticam atividades físicas e buscam mais energia controlada, foco, resistência e pump nos treinos. Não recomendado para gestantes, lactantes ou crianças.",
  faq: [
    {
      question: "O que é cafeína microencapsulada?",
      answer: "A cafeína microencapsulada é envolvida por uma membrana que controla sua liberação no organismo, evitando picos bruscos de energia e a famosa 'queda' pós-cafeína. Isso garante energia mais estável e prolongada durante o treino."
    },
    {
      question: "O Diabo Verde contém glúten?",
      answer: "Não. O produto é livre de glúten."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 30 doses de 10g cada."
    },
    {
      question: "Após aberto quanto tempo dura?",
      answer: "Após aberto, consumir em até 45 dias. Conservar ao abrigo da luz, calor e umidade."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Não é recomendado. O produto contém cafeína microencapsulada, que mesmo com liberação controlada pode prejudicar o sono. Consuma pelo menos 6 horas antes de dormir."
    },
  ],
},
{
  id: "37",
  name: "Pré-Treino Diabo Verde Inferno 300g Tangerina Fire FTW",
  slug: "pre-treino-diabo-verde-inferno-300g-tangerina-fire-ftw",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/2iadpaK",
  image: "/images/produtos/pre-treino-diabo-verde-inferno-300g-tangerina-fire-ftw.webp",
  badge: "⚙️OFERTA IMPERDÍVEL",
  sold: "+1000 vendidos",
  rating: 4.8,
  reviews: 32,
  shortDescription: "Pré-treino Hardcore com 400mg de Cafeína, Beta-Alanina, Taurina e Tirosina. Energia explosiva e foco máximo. Sabor Tangerina Fire. 300g.",
  description: "A FTW foi além do Diabo Verde clássico e criou o Inferno — uma versão ainda mais intensa para quem não tem medo de treinar no limite. Com 400mg de Cafeína por dose, o Diabo Verde Inferno é uma das fórmulas mais potentes do mercado nacional. A combinação de Beta-Alanina para reduzir a fadiga, Taurina para resistência e foco, Tirosina para concentração mental e Cafeína Microencapsulada para liberação controlada e prolongada entrega uma experiência de treino que justifica o nome: é literalmente um inferno de intensidade. Sabor Tangerina Fire, disponível em pote de 300g.",
  benefits: [
    "400mg de Cafeína para energia máxima e explosiva",
    "Cafeína microencapsulada para liberação controlada",
    "Beta-Alanina para resistência e redução da fadiga",
    "Taurina para resistência, foco e hidratação celular",
    "Tirosina para concentração mental e motivação",
    "Fórmula Hardcore — versão mais intensa do Diabo Verde",
    "Sabor Tangerina Fire refrescante",
    "Pump e vascularização intensos",
  ],
  howToUse: "Diluir 1 dose em 200ml de água gelada. Consumir 20 a 30 minutos antes do treino. Iniciantes devem começar com meia dose para avaliar a tolerância. Não misturar com outros estimulantes. Evitar consumo à noite.",
  ingredients: "Beta-Alanina, Taurina, L-Tirosina, Cafeína Microencapsulada (400mg), Isomaltulose, Antiumectante Fosfato Tricálcico, Acidulante Ácido Cítrico, Edulcorantes Sucralose e Acessulfame de Potássio, Aromatizante e Corante Natural de Tangerina.",
  whoShouldUse: "Indicado para adultos acima de 18 anos com experiência em pré-treinos que buscam máxima energia, foco e performance nos treinos. Não recomendado para iniciantes, gestantes, lactantes, crianças ou pessoas sensíveis à cafeína.",
  faq: [
    {
      question: "Qual a diferença entre o Diabo Verde e o Diabo Verde Inferno?",
      answer: "O Diabo Verde Inferno é a versão Hardcore com dosagem de cafeína muito mais elevada (400mg vs versão padrão), desenvolvido para atletas experientes que já têm tolerância a estimulantes."
    },
    {
      question: "400mg de cafeína é seguro?",
      answer: "400mg é o limite diário seguro recomendado para adultos saudáveis. Porém, para quem não está acostumado, recomenda-se começar com meia dose (200mg) para avaliar a tolerância individual."
    },
    {
      question: "Quantas doses tem a embalagem de 300g?",
      answer: "A embalagem de 300g rende aproximadamente 30 doses completas. Iniciantes usando meia dose têm até 60 usos."
    },
    {
      question: "Posso tomar à noite?",
      answer: "Definitivamente não. Com 400mg de cafeína, o Inferno pode prejudicar seriamente o sono. Consuma pelo menos 8 horas antes de dormir."
    },
    {
      question: "Posso misturar com outros estimulantes?",
      answer: "Não. Evite misturar com outros produtos que contenham cafeína ou estimulantes como café, energéticos ou outros pré-treinos para não ultrapassar a dose segura diária."
    },
  ],
},
{
  id: "38",
  name: "Whey Iso Protein Blend Complex 2kg Chocolate XPro Nutrition",
  slug: "whey-iso-protein-blend-complex-2kg-chocolate-xpro-nutrition",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/1CegA6W",
  image: "/images/produtos/whey-iso-protein-blend-complex-2kg-chocolate-xpro-nutrition.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.6,
  reviews: 13357,
  shortDescription: "Blend proteico com Whey Isolado, Soja Isolada e Soja Concentrada. 25g de proteína por dose, zero açúcar, zero glúten e zero lactose. 2kg.",
  description: "Quando o assunto é custo-benefício em proteína, o Iso X Blend Complex da XPro Nutrition é difícil de bater. Com mais de 10 mil unidades vendidas e 1º lugar em Suplementos Alimentares XPro Nutrition no Mercado Livre, este blend reúne três fontes proteicas de alta qualidade: Whey Protein Isolado, Proteína Isolada de Soja e Proteína Concentrada de Soja. O resultado é uma fórmula com 25g de proteína por dose, 83% de concentração proteica, zero açúcar, zero glúten e zero lactose. A embalagem de 2kg garante excelente rendimento para quem busca praticidade e economia sem abrir mão da qualidade.",
  benefits: [
    "25g de proteína por dose — 83% de concentração",
    "Blend triplo: Whey Isolado + Soja Isolada + Soja Concentrada",
    "Zero açúcar adicionado",
    "Zero glúten e zero lactose",
    "Embalagem econômica de 2kg",
    "Excelente solubilidade e fácil preparo",
    "Ótimo custo-benefício",
    "1º em Suplementos Alimentares XPro Nutrition",
  ],
  howToUse: "Diluir 30g (1 scoop) em 200 a 300ml de água, leite ou bebida de preferência. Misturar até completa dissolução. Consumir preferencialmente após o treino ou entre refeições, conforme orientação de nutricionista ou profissional habilitado.",
  ingredients: "Proteína isolada de soja, proteína concentrada de soja, proteína isolada do soro do leite (Whey Isolado), cacau em pó, aromatizantes, edulcorantes. Não contém glúten. Não contém lactose. Contém derivados de leite e soja.",
  whoShouldUse: "Indicado para adultos acima de 18 anos que buscam aumentar a ingestão proteica diária com um blend de múltiplas fontes, excelente custo-benefício e que não podem consumir lactose ou glúten.",
  faq: [
    {
      question: "O Iso X tem lactose?",
      answer: "Não. O produto é livre de lactose, sendo uma ótima opção para pessoas com intolerância."
    },
    {
      question: "Qual a diferença entre blend e whey puro?",
      answer: "O blend combina múltiplas fontes proteicas (animal e vegetal), oferecendo aminoácidos em diferentes velocidades de absorção. O whey puro é de absorção mais rápida. O blend tem melhor custo-benefício e maior rendimento."
    },
    {
      question: "Quantas doses tem a embalagem de 2kg?",
      answer: "A embalagem de 2kg rende aproximadamente 66 doses de 30g cada."
    },
    {
      question: "Contém soja?",
      answer: "Sim. O produto contém proteína isolada e concentrada de soja. Pessoas alérgicas à soja devem evitar este produto."
    },
    {
      question: "Pode substituir uma refeição?",
      answer: "Não. O produto é um suplemento proteico, não um substituto de refeição completa. Deve ser consumido como complemento à alimentação equilibrada."
    },
  ],
},
{
  id: "39",
  name: "Whey Iso Protein Blend Complex 2kg Chocolate Pretorian",
  slug: "whey-iso-protein-blend-complex-2kg-chocolate-pretorian",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/2ZoQgLM",
  image: "/images/produtos/whey-iso-protein-blend-complex-2kg-chocolate-pretorian.webp",
  badge: "Mais Vendido",
  sold: "+100 mil vendidos",
  rating: 4.6,
  reviews: 4924,
  shortDescription: "Whey Isolado Blend Complex com 24g de proteína por dose, alta qualidade proteica e sabor Chocolate. 1º em Suplementos Pretorian. 2kg.",
  description: "A Pretorian é uma das marcas mais respeitadas do mercado de suplementos esportivos — e o Iso Protein Blend Complex comprova isso com mais de 100 mil unidades vendidas e 1º lugar em Suplementos Alimentares Pretorian no Mercado Livre. Com 2kg de proteína de alta qualidade, o produto entrega 24g de proteína por dose com base em Whey Protein Isolado, garantindo absorção rápida, baixo teor de gordura e carboidratos. Disponível em 6 sabores — Baunilha, Chocolate, Cookies, Cookies & Cream, Cookies/Baunilha e Morango — é uma das opções mais versáteis e completas para quem busca ganho muscular e recuperação de qualidade. Acompanha scoop de 30g.",
  benefits: [
    "24g de proteína por dose de alta qualidade",
    "Base em Whey Protein Isolado",
    "Mais de 100 mil vendidos — 1º em Suplementos Pretorian",
    "Embalagem econômica de 2kg",
    "Disponível em 6 sabores",
    "Baixo teor de gordura e carboidratos",
    "Absorção rápida pós-treino",
    "Acompanha scoop de 30g",
  ],
  howToUse: "Diluir 30g (1 scoop) em 200 a 300ml de água ou leite. Misturar até completa dissolução. Consumir preferencialmente após o treino ou entre refeições, conforme orientação de nutricionista ou profissional habilitado.",
  ingredients: "Proteína isolada do soro do leite (Whey Isolado), aromatizantes, cacau em pó, edulcorantes, corante artificial. Contém derivados de leite. Verificar rótulo para informações completas de alérgenos.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação que buscam ganho de massa muscular, recuperação pós-treino e alto aporte proteico diário com uma marca consolidada e confiável no mercado.",
  faq: [
    {
      question: "Quantas doses tem a embalagem de 2kg?",
      answer: "A embalagem de 2kg rende aproximadamente 66 doses de 30g cada."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Iso Protein Blend Complex Pretorian está disponível em 6 sabores: Baunilha, Chocolate, Cookies, Cookies & Cream, Cookies/Baunilha e Morango."
    },
    {
      question: "O produto acompanha scoop?",
      answer: "Sim. O produto acompanha scoop de 30g para facilitar a medição das doses."
    },
    {
      question: "Pode comprar em kit com 2 potes?",
      answer: "Sim. O produto está disponível em opção unitária (1 pote de 2kg) ou em kit com 2 potes para maior economia."
    },
    {
      question: "É indicado para quem está em cutting?",
      answer: "Sim. Por ser base em Whey Isolado com baixo teor de gordura e carboidratos, é uma excelente opção para quem está em fase de definição muscular."
    },
  ],
},
{
  id: "40",
  name: "Whey Protein Fusion Isolate 1,8kg Chocolate Espartanos Nutrition",
  slug: "whey-protein-fusion-isolate-1-8kg-chocolate-espartanos-nutrition",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/1FQijDv",
  image: "/images/produtos/whey-protein-fusion-isolate-1-8kg-chocolate-espartanos-nutrition.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.5,
  reviews: 11418,
  shortDescription: "Blend de Whey Concentrado, Isolado, Albumina e Caseína com 26g de proteína e 5,4g de BCAAs por dose. Sabor Chocolate. 1,8kg.",
  description: "Inspirado na disciplina e força dos guerreiros espartanos, o Protein Fusion da Espartanos Nutrition foi desenvolvido para atletas que não aceitam mediocridade nos resultados. Com mais de 10 mil unidades vendidas e 2º lugar em Suplementos Alimentares Espartanos no Mercado Livre, este blend premium reúne quatro fontes proteicas: Whey Protein Concentrado, Whey Protein Isolado, Albumina e Caseína. Essa combinação única entrega 26g de proteína por dose e 5,4g de BCAAs, com absorção em diferentes velocidades para suporte muscular contínuo — do pós-treino até durante a noite. Disponível em 3 sabores e em embalagem de 1,8kg para máximo rendimento.",
  benefits: [
    "26g de proteína por dose",
    "5,4g de BCAAs por porção",
    "Blend de 4 fontes: Whey Concentrado, Isolado, Albumina e Caseína",
    "Absorção em múltiplas velocidades para suporte contínuo",
    "Mais de 10 mil vendidos — 2º em Suplementos Espartanos",
    "Embalagem econômica de 1,8kg",
    "Disponível em 3 sabores",
    "Ideal para ganho muscular e recuperação",
  ],
  howToUse: "Diluir 1 scoop em 200 a 300ml de água ou leite. Consumir preferencialmente após o treino ou entre refeições. Para suporte noturno, consumir uma dose antes de dormir aproveitando a caseína de absorção lenta.",
  ingredients: "Whey Protein Concentrado, Whey Protein Isolado, Albumina (proteína da clara do ovo), Caseína, cacau em pó, aromatizantes, edulcorantes. Contém derivados de leite e ovo. Verificar rótulo para informações completas de alérgenos.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação que buscam um blend proteico completo com múltiplas fontes, para suporte muscular durante o dia e à noite, com excelente custo-benefício na embalagem de 1,8kg.",
  faq: [
    {
      question: "Por que usar um blend de 4 proteínas?",
      answer: "Cada proteína tem uma velocidade de absorção diferente. O Whey Isolado age rápido no pós-treino, o Concentrado em velocidade média, a Albumina de forma lenta e a Caseína durante horas. Juntas, garantem aminoácidos disponíveis por muito mais tempo."
    },
    {
      question: "Quantas doses tem a embalagem de 1,8kg?",
      answer: "A embalagem de 1,8kg rende aproximadamente 60 doses, dependendo do tamanho do scoop utilizado."
    },
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O Protein Fusion Espartanos está disponível em 3 sabores: Baunilha, Chocolate e Morango."
    },
    {
      question: "Posso tomar antes de dormir?",
      answer: "Sim! Por conter Caseína na fórmula, é uma ótima opção para consumir antes de dormir, pois a Caseína libera aminoácidos lentamente durante o sono, prevenindo o catabolismo noturno."
    },
    {
      question: "Existe versão menor?",
      answer: "Sim. O produto também está disponível na embalagem de 900g para quem quer experimentar antes de comprar o pote maior."
    },
  ],
},
{
  id: "41",
  name: "100% Whey Protein Concentrado 900g Baunilha Max Titanium",
  slug: "100-whey-protein-concentrado-900g-baunilha-max-titanium",
  category: "whey-protein",
  categoryName: "Whey Protein",
  affiliateLink: "https://meli.la/2xtdEsp",
  image: "/images/produtos/whey-protein-concentrado-100-900g-baunilha-max-titanium.webp",
  badge: "Mais Vendido",
  sold: "+50 mil vendidos",
  rating: 4.8,
  reviews: 58100,
  shortDescription: "Whey Concentrado 100% WPC com 21g de proteína e 4.669mg de BCAAs por dose. Gluten Free, matéria-prima de alta qualidade. Sabor Baunilha. 900g.",
  description: "A Max Titanium é uma das marcas mais tradicionais e confiáveis do mercado de suplementos brasileiro — e o 100% Whey Protein Concentrado é a prova disso. Com mais de 50 mil unidades vendidas e 3º lugar em Suplementos Max Titanium no Mercado Livre, este whey é formulado com proteína concentrada do soro do leite (WPC) de alta qualidade, passando por um avançado processo de filtração que preserva proteínas, minerais e nutrientes essenciais, reduzindo gorduras e carboidratos. Cada dose entrega 21g de proteína e 4.669mg de BCAAs, auxiliando no ganho de massa muscular, recuperação pós-treino e manutenção da massa magra. Textura cremosa, fácil dissolução e Gluten Free.",
  benefits: [
    "21g de proteína por dose",
    "4.669mg de BCAAs por porção",
    "100% WPC de matéria-prima de alta qualidade",
    "Processo avançado de filtração preserva nutrientes",
    "Gluten Free",
    "Textura cremosa e fácil dissolução",
    "Mais de 50 mil vendidos — 3º em Suplementos Max Titanium",
    "Disponível em 6 sabores",
  ],
  howToUse: "Misturar 30g (2 dosadores) em 200ml de água ou bebida de preferência, com auxílio de coqueteleira ou liquidificador. Consumir 1 a 2 porções ao dia, preferencialmente após o treino, ou conforme orientação profissional. Indicado para maiores de 19 anos.",
  ingredients: "Proteína concentrada do soro do leite (WPC), aromatizante idêntico ao natural de baunilha, emulsificante lecitina de soja, edulcorante sucralose. Não contém glúten. Contém lactose. Contém derivados de leite e soja. Pode conter ovo.",
  whoShouldUse: "Indicado para atletas e praticantes de musculação acima de 19 anos que buscam ganho de massa muscular, recuperação pós-treino e aumento da ingestão proteica diária com uma marca consolidada e confiável.",
  faq: [
    {
      question: "Quais sabores estão disponíveis?",
      answer: "O 100% Whey Max Titanium está disponível em 6 sabores: Baunilha, Chocolate, Cookies, Cookies & Cream, Leite e Morango. O sabor Cookies & Cream contém glúten — os demais são Gluten Free."
    },
    {
      question: "Quantas doses tem a embalagem de 900g?",
      answer: "A embalagem de 900g rende aproximadamente 30 doses de 30g cada."
    },
    {
      question: "O produto contém lactose?",
      answer: "Sim. O 100% Whey Concentrado Max Titanium contém lactose. Pessoas com intolerância severa devem optar por um whey isolado."
    },
    {
      question: "Existe versão de recarga (refil)?",
      answer: "Sim. O produto está disponível em pote, proteína concentrada, recarga e sachê para atender diferentes necessidades e orçamentos."
    },
    {
      question: "Pode misturar com leite?",
      answer: "Sim. Com leite integral ou desnatado o sabor fica mais cremoso e o valor proteico da dose aumenta."
    },
  ],
},
{
  id: "42",
  name: "Creatina Hardcore 100% Pura 300g Integralmedica",
  slug: "creatina-hardcore-100-pura-300g-integralmedica",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/26kHmZP",
  image: "/images/produtos/creatina-hardcore-100-pura-300g-integralmedica.webp",
  badge: "Recomendado",
  rating: 4.8,
  reviews: 199214,
  sold: "+1 milhão vendidos",
  shortDescription: "Creatina 100% Pura 300g com alta solubilidade, sem grumos e fórmula Hardcore para força, hipertrofia e recuperação.",
  description: "A Creatina Hardcore da Integralmedica é para quem treina de verdade e não aceita menos que o máximo. Com mais de 1 milhão de unidades vendidas, essa é uma das creatinas mais populares do Brasil — e a fórmula explica o sucesso. 100% creatina monohidratada pura, com alta solubilidade que garante dissolução total em qualquer líquido, sem grumos e sem resíduos. A suplementação eleva o armazenamento de fosfocreatina nos músculos, entregando mais energia intramuscular para treinos mais intensos, maior ganho de força, hipertrofia acelerada e recuperação mais rápida entre as sessões. Pode ser usada em qualquer momento do dia — inclusive nos dias de descanso — e combina perfeitamente com carboidratos de alto índice glicêmico para absorção máxima.",
  benefits: [
    "100% creatina monohidratada pura — zero aditivos",
    "Alta solubilidade — dissolve completamente sem formar grumos",
    "Aumenta o armazenamento de fosfocreatina para mais energia intramuscular",
    "Melhora força, potência e hipertrofia muscular",
    "Acelera a recuperação e reduz a fadiga pós-treino",
    "Pode ser consumida a qualquer hora, inclusive nos dias sem treino",
  ],
  howToUse: "Misturar 1 porção (5g) em água, suco ou bebida de preferência. Consumir preferencialmente após o treino ou entre refeições. Para melhor absorção, combinar com carboidratos de alto índice glicêmico. O uso nos dias de descanso também é recomendado para manter os estoques musculares saturados.",
  ingredients: "Creatina Monohidratada 100% pura. Sabor neutro. Verificar alérgenos na embalagem.",
  whoShouldUse: "Atletas e praticantes de musculação que buscam maximizar força, volume muscular e recuperação. Indicado para adultos que treinam com alta intensidade e querem resultados consistentes.",
  faq: [
    { question: "Posso tomar creatina nos dias sem treino?", answer: "Sim! Manter o consumo diário — inclusive nos dias de descanso — é fundamental para manter os estoques musculares de fosfocreatina sempre saturados, garantindo melhor desempenho nos treinos seguintes." },
    { question: "Como potencializar a absorção da creatina?", answer: "Combinar com carboidratos de alto índice glicêmico, como suco de uva ou maltodextrina, eleva a insulina e melhora o transporte da creatina para as células musculares." },
    { question: "Quantas doses tem o pote de 300g?", answer: "Na dose padrão de 5g por dia, o pote rende 60 doses — dois meses de suplementação contínua." },
    { question: "A creatina Hardcore dissolve bem?", answer: "Sim. Um dos principais diferenciais da fórmula é a alta solubilidade, que garante dissolução completa em qualquer líquido, sem formação de grumos ou resíduos no fundo do copo." },
  ],
},
{
  id: "43",
  name: "Creatina Monohydrate 200g Universal Nutrition com Coqueteleira",
  slug: "creatina-monohydrate-200g-universal-nutrition-coqueteleira",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/2gjWpWj",
  image: "/images/produtos/creatina-monohydrate-200g-universal-nutrition-coqueteleira.webp",
  badge: "Oferta Imperdível",
  rating: 4.9,
  reviews: 7236,
  sold: "+10 mil vendidos",
  shortDescription: "Creatina 100% pura 200g + coqueteleira Universal. Zero carboidratos, zero gorduras, glúten free e vegana.",
  description: "A Universal Nutrition é uma das marcas mais respeitadas do mundo em suplementação esportiva — e a Creatina Monohydrate 200g chega com um bônus irresistível: a icônica coqueteleira amarela Universal inclusa. 100% creatina monohidratada em pó, sem aditivos artificiais, zero carboidratos, zero gorduras, glúten free e apta para vegetarianos e veganos. A fórmula eleva os estoques de creatina intramuscular, potencializando a produção de ATP e entregando mais força, resistência à fadiga, volume muscular e recuperação acelerada. Com 1º lugar em Suplementos Alimentares Universal Nutrition no Mercado Livre e mais de 10 mil unidades vendidas, é a combinação perfeita de qualidade internacional e praticidade para o dia a dia.",
  benefits: [
    "100% creatina monohidratada — zero aditivos artificiais",
    "Zero carboidratos e zero gorduras",
    "Glúten free — apta para vegetarianos e veganos",
    "Aumenta os estoques de creatina intramuscular para mais ATP",
    "Melhora força, resistência à fadiga e volume muscular",
    "Acompanha coqueteleira Universal exclusiva",
  ],
  howToUse: "Diluir 1 dosador (3g) em bebida de sua preferência e consumir uma vez ao dia, preferencialmente com carboidratos de alto índice glicêmico para maximizar a absorção. Usar diariamente, inclusive nos dias sem treino. Indicado para maiores de 18 anos.",
  ingredients: "Creatina Monoidratada 100% pura em pó. Não contém glúten. Registro isento conforme RDC 27/2010. Apto para vegetarianos e veganos.",
  whoShouldUse: "Atletas, praticantes de musculação, vegetarianos e veganos que buscam mais força, volume muscular e recuperação acelerada com uma creatina limpa, sem aditivos e de marca internacional.",
  faq: [
    { question: "A coqueteleira vem inclusa mesmo?", answer: "Sim! O kit inclui 2 potes de Creatina Monohydrate 200g e a coqueteleira Universal, tornando o conjunto ainda mais vantajoso." },
    { question: "Veganos podem usar essa creatina?", answer: "Sim. A fórmula é 100% pura, sem ingredientes de origem animal, sendo totalmente apta para vegetarianos e veganos." },
    { question: "A porção é de 3g ou 5g?", answer: "A sugestão de consumo da Universal é de 3g por dose (1 dosador). Siga sempre a orientação da embalagem ou de um profissional de saúde." },
    { question: "Creatina causa retenção de líquido?", answer: "Não. A creatina age dentro das células musculares, e não no espaço extracelular. A retenção hídrica associada à creatina é um mito — o que ocorre é hidratação intramuscular, que contribui para o volume e desempenho muscular." },
  ],
},
{
  id: "44",
  name: "Creatina Monohidratada Refil 500g Universal Nutrition",
  slug: "creatina-monohidratada-refil-500g-universal-nutrition",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/17UsZEm",
  image: "/images/produtos/creatina-monohidratada-refil-500g-universal-nutrition.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 1147,
  sold: "+5 mil vendidos",
  shortDescription: "Creatina Monohidratada 100% pura 500g refil da Universal Nutrition. 3g por dose, sem glúten, sem lactose e fácil dissolução.",
  description: "A Universal Nutrition é eleita pelos atletas como uma das marcas mais confiáveis do mundo — e a Creatina Monohidratada Refil 500g mostra o porquê. Em embalagem econômica tipo saco, entrega 100% creatina monohidratada micronizada, sem sabor e com fácil dissolução em água, sucos ou shakes. Com 3g de creatina por porção, auxilia no aumento de força, potência e resistência em treinos intensos, além de contribuir para a redução da fadiga muscular. Vai além do público atlético: estudos indicam que a creatina também pode beneficiar idosos na prevenção da sarcopenia e manutenção da massa muscular. Sem glúten, sem lactose e indicada para uso diário — inclusive nos dias sem treino.",
  benefits: [
    "100% creatina monohidratada micronizada — máxima pureza",
    "3g de creatina por porção com fácil dissolução",
    "Aumenta força, potência e resistência em treinos intensos",
    "Reduz a fadiga muscular e melhora a recuperação",
    "Pode auxiliar na prevenção da sarcopenia em idosos",
    "Sem glúten e sem lactose — embalagem refil econômica de 500g",
  ],
  howToUse: "Diluir aproximadamente 5g do produto em 200 a 300ml de água ou bebida de preferência, misturando até completa dissolução. Consumir preferencialmente próximo a uma refeição rica em carboidratos para melhor absorção. Usar diariamente, inclusive nos dias sem treino. Indicado para maiores de 18 anos.",
  ingredients: "Creatina Monohidratada 100% pura micronizada. Não contém glúten. Não contém lactose.",
  whoShouldUse: "Atletas, praticantes de atividades físicas e também pessoas sedentárias ou idosos que buscam suporte à manutenção da massa muscular. Indicado para maiores de 18 anos para uso diário contínuo.",
  faq: [
    { question: "A versão refil tem a mesma qualidade que o pote?", answer: "Sim. A creatina é exatamente a mesma — 100% monohidratada micronizada Universal Nutrition. A embalagem refil é apenas mais econômica e prática para reposição." },
    { question: "Quantas doses tem o refil de 500g?", answer: "Com a dose de 5g por dia, o refil rende 100 doses — mais de 3 meses de suplementação contínua." },
    { question: "Idosos podem usar creatina?", answer: "Sim. Estudos mostram que a creatina pode ajudar na manutenção da massa muscular em idosos, contribuindo para a prevenção da sarcopenia e melhora da qualidade de vida." },
    { question: "Precisa tomar nos dias de descanso?", answer: "Sim. A creatina funciona por efeito crônico — o uso diário mantém os estoques musculares saturados, garantindo melhor desempenho nos treinos independentemente do dia de consumo." },
  ],
},
{
  id: "45",
  name: "Creatina Monohydrate 100% Pure 300g Atlhetica Nutrition",
  slug: "creatina-monohydrate-100-pure-300g-atlhetica-nutrition",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/1CKkiQo",
  image: "/images/produtos/creatina-monohydrate-100-pure-300g-atlhetica-nutrition.webp",
  badge: "Oferta Imperdível",
  rating: 4.9,
  reviews: 9699,
  sold: "+50 mil vendidos",
  shortDescription: "Creatina Monoidratada 100% pura 300g com 3g por dose para força, explosão e recuperação muscular. Atlhetica Nutrition.",
  description: "A Atlhetica Nutrition é referência nacional em suplementação esportiva — e a Creatina Monohydrate 100% Pure 300g é um dos seus produtos mais vendidos, com mais de 50 mil unidades e 3º lugar em Suplementos Alimentares Atlhetica no Mercado Livre. A creatina monoidratada é a forma mais estudada cientificamente, formada pela combinação de três aminoácidos: glicina, arginina e metionina. Presente naturalmente em carnes bovinas e peixes, a suplementação eleva os estoques musculares para além do que a alimentação consegue fornecer, entregando mais força, explosão e resistência nos treinos de alta intensidade. Fórmula limpa, sem aditivos e com 3g de creatina pura por porção.",
  benefits: [
    "3g de creatina monoidratada 100% pura por porção",
    "Aumenta a força e a explosão durante os treinos",
    "Melhora a resistência muscular em exercícios de alta intensidade",
    "Acelera a recuperação muscular pós-treino",
    "Forma de creatina mais estudada e comprovada cientificamente",
    "Mais de 50 mil vendidos — 3º em Suplementos Atlhetica Nutrition",
  ],
  howToUse: "Misturar 1 porção (3g) em água ou bebida de preferência, agitando bem até dissolução. Consumir preferencialmente após o treino ou conforme orientação de nutricionista ou médico. Usar diariamente, inclusive nos dias sem treino. Indicado para maiores de 19 anos.",
  ingredients: "Creatina Monoidratada 100% pura. Não contém aditivos artificiais.",
  whoShouldUse: "Atletas competitivos e praticantes de atividades físicas de alta intensidade e curta duração que buscam mais força, explosão e recuperação muscular. Indicado para maiores de 19 anos sob orientação de nutricionista ou médico.",
  faq: [
    { question: "A creatina dissolve completamente na água?", answer: "A creatina monoidratada se mistura facilmente em água, porém pode não se dissolver completamente, podendo acumular um leve resíduo no fundo do recipiente quando deixada em repouso. Agite bem antes de consumir." },
    { question: "Quantas doses tem o pote de 300g?", answer: "Na dose de 3g por porção, o pote rende 100 doses — mais de 3 meses de suplementação diária." },
    { question: "Qual a origem da creatina no organismo?", answer: "A creatina é formada no próprio corpo pela combinação dos aminoácidos glicina, arginina e metionina, e também pode ser obtida naturalmente por alimentos como carnes bovinas e peixes. A suplementação eleva esses estoques além do que a alimentação consegue suprir." },
    { question: "Precisa de acompanhamento profissional?", answer: "A Atlhetica recomenda o uso sob orientação de nutricionista ou médico, especialmente para atletas competitivos que participam de modalidades de alta intensidade." },
  ],
},
{
  id: "46",
  name: "Pré-Workout Insane Clown 350g Sabor Gummy Demons Lab",
  slug: "pre-workout-insane-clown-350g-gummy-demons-lab",
  category: "pre-treino",
  categoryName: "Pré-Treino",
  affiliateLink: "https://meli.la/2yzeriE",
  image: "/images/produtos/pre-workout-insane-clown-350g-gummy-demons-lab.webp",
  badge: "Mais Vendido",
  rating: 4.8,
  reviews: 19924,
  sold: "+10 mil vendidos",
  shortDescription: "Pré-treino Insane Clown 350g sabor Gummy com aminoácidos em pó para energia, foco e performance máxima. Demons Lab.",
  description: "O Insane Clown da Demons Lab é um pré-treino para quem não aceita treino pela metade. Líder absoluto em Suplementos Demons Lab no Mercado Livre, com mais de 10 mil unidades vendidas e quase 20 mil avaliações — a reputação fala por si. A fórmula combina aminoácidos em pó cuidadosamente selecionados para preparar o organismo para o esforço máximo: mais energia na largada, foco elevado durante toda a sessão e menor fadiga ao longo do treino. O sabor Gummy (Doces Mastigáveis) entrega uma experiência agradável sem deixar a desejar na eficácia. Embalagem de 350g com custo-benefício entre os melhores da categoria.",
  benefits: [
    "Fórmula com aminoácidos em pó para energia e desempenho",
    "Aumenta o foco e a disposição durante o treino",
    "Reduz a sensação de fadiga em exercícios intensos",
    "Sabor Gummy — agradável e fácil de consumir",
    "Mais de 10 mil vendidos — 1º em Suplementos Demons Lab",
    "Ideal para treinos de alta intensidade e longa duração",
  ],
  howToUse: "Misturar 1 porção em água gelada e agitar bem até dissolução completa. Consumir de 20 a 30 minutos antes do treino. Indicado para maiores de 18 anos. Não exceder a dose diária recomendada. Consulte seu médico ou nutricionista antes de iniciar o uso.",
  ingredients: "Aminoácidos em pó (blend proprietário Demons Lab). Consulte o rótulo da embalagem para a lista completa de ingredientes e informações nutricionais.",
  whoShouldUse: "Praticantes de musculação, crossfit, corrida e demais modalidades de alta intensidade que buscam mais energia, foco e resistência durante os treinos. Indicado para maiores de 18 anos, com acompanhamento de nutricionista ou médico.",
  faq: [
    { question: "Qual a quantidade de porções no pote de 350g?", answer: "A quantidade de porções varia conforme a dose recomendada descrita no rótulo. Consulte a tabela nutricional na embalagem para o número exato de servings." },
    { question: "Posso tomar todos os dias, inclusive nos dias sem treino?", answer: "O Insane Clown é formulado para uso pré-treino. Nos dias de descanso, o uso não é indicado, salvo orientação específica de nutricionista ou médico." },
    { question: "O produto contém cafeína?", answer: "A composição completa consta no rótulo da embalagem. Para informações detalhadas sobre cafeína e demais estimulantes presentes na fórmula, consulte a tabela nutricional do produto." },
    { question: "A partir de qual idade é indicado?", answer: "O produto é recomendado para maiores de 18 anos, sempre com acompanhamento de um profissional de saúde." },
  ],
},
{
  id: "47",
  name: "Noherps Lisina 1000mg Vitamina C B6 Zinco 90 Comprimidos Unilife",
  slug: "noherps-lisina-1000mg-vitamina-c-b6-zinco-90-comprimidos-unilife",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/2se4mnQ",
  image: "/images/produtos/noherps-lisina-1000mg-vitamina-c-b6-zinco-90-comprimidos-unilife.webp",
  badge: "Mais Vendido",
  rating: 4.7,
  reviews: 3763,
  sold: "+10 mil vendidos",
  shortDescription: "Lisina 1000mg com Vitamina C, B6, Zinco e Niacina em 90 comprimidos para imunidade, pele e suporte muscular. Unilife.",
  description: "O Noherps Lisina da Unilife reúne em um único comprimido o que o corpo precisa para funcionar bem por dentro e por fora. Líder absoluto em Suplementos Unilife no Mercado Livre, com mais de 10 mil unidades vendidas, a fórmula combina L-Lisina 1000mg — aminoácido essencial que o organismo não produz sozinho — com Vitamina C, Vitamina B6, Zinco e Niacina, formando um complexo completo de suporte nutricional. A lisina atua diretamente na formação de proteínas e colágeno, no fortalecimento imunológico e na recuperação muscular, enquanto os cofatores potencializam sua absorção e ampliam os benefícios para pele, ossos e sistema nervoso. 90 comprimidos por pote, com sabor natural de laranja, acerola e romã.",
  benefits: [
    "1200mg de L-Lisina por porção — aminoácido essencial para proteínas e colágeno",
    "Vitamina C, B6, Zinco e Niacina para imunidade e saúde geral",
    "Apoia a recuperação muscular pós-treino",
    "Contribui para a saúde da pele, ossos e articulações",
    "90 comprimidos — até 3 meses de suplementação",
    "Mais de 10 mil vendidos — 1º em Suplementos Unilife",
  ],
  howToUse: "Tomar 1 porção (2 comprimidos) ao dia, preferencialmente junto às refeições para melhor absorção. Não exceder a dose diária recomendada. Indicado para maiores de 18 anos. Consulte seu médico ou nutricionista antes de iniciar o uso.",
  ingredients: "L-Lisina (cloridrato de lisina), Vitamina C (ácido ascórbico), Vitamina B6 (cloridrato de piridoxina), Zinco (óxido de zinco), Niacina (nicotinamida), Ácido Pantotênico. Contém aromatizante sintético idêntico ao natural de laranja, acerola e romã.",
  whoShouldUse: "Pessoas que buscam reforço imunológico, suporte à saúde da pele e recuperação muscular, além de quem tem dieta com baixo consumo de proteínas animais. Indicado para maiores de 18 anos com acompanhamento de nutricionista ou médico.",
  faq: [
    { question: "Quantas doses tem o pote de 90 comprimidos?", answer: "Na dose de 2 comprimidos por dia, o pote rende 45 doses — aproximadamente um mês e meio de suplementação contínua." },
    { question: "Posso tomar em jejum?", answer: "A Unilife recomenda consumir junto às refeições para facilitar a absorção dos nutrientes e reduzir qualquer desconforto gástrico." },
    { question: "A lisina ajuda no herpes labial?", answer: "A L-Lisina é amplamente estudada como suporte nutricional em casos de herpes recorrente. No entanto, o produto não é um medicamento e não substitui tratamento médico." },
    { question: "Veganos podem usar?", answer: "Consulte o rótulo da embalagem para verificar a origem dos ingredientes e possíveis traços de alérgenos. Em caso de dúvida, entre em contato com a Unilife diretamente." },
  ],
},
{
  id: "48",
  name: "BCAA 3:1:1 60 Cápsulas Dark Lab",
  slug: "bcaa-3-1-1-60-capsulas-dark-lab",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/1bVD9io",
  image: "/images/produtos/bcaa-3-1-1-60-capsulas-dark-lab.webp",
  badge: "42% OFF",
  rating: 4.8,
  reviews: 1926,
  sold: "+10 mil vendidos",
  shortDescription: "BCAA 3:1:1 com Leucina, Isoleucina e Valina em 60 cápsulas para recuperação muscular, anticcatabolismo e hipertrofia. Dark Lab.",
  description: "O BCAA 3:1:1 da Dark Lab entrega os três aminoácidos essenciais de cadeia ramificada — Leucina, Isoleucina e Valina — na proporção que maximiza os resultados: maior concentração de leucina para ativar a síntese proteica e proteger a massa muscular conquistada com tanto esforço. Esses aminoácidos são chamados de essenciais porque o organismo não consegue produzi-los sozinho, tornando a suplementação indispensável para quem treina com intensidade. O BCAA 3:1:1 Dark Lab combate o catabolismo, reduz a fadiga durante o treino e acelera a recuperação pós-sessão — seja na musculação, no cross training ou em qualquer modalidade de alta exigência. Fórmula limpa, sem sabor adicionado, em cápsulas práticas de usar.",
  benefits: [
    "Proporção 3:1:1 com maior concentração de leucina para síntese proteica",
    "Reduz o catabolismo e protege a massa muscular",
    "Acelera a recuperação muscular pós-treino",
    "Diminui a fadiga e o cansaço durante exercícios intensos",
    "Aminoácidos essenciais que o corpo não produz naturalmente",
    "Ideal para fases de cutting e treinos em déficit calórico",
  ],
  howToUse: "Tomar 1 porção (4 cápsulas) ao dia, preferencialmente antes ou após o treino, com água. Nos dias sem treino, consumir junto a uma das refeições principais. Não exceder a dose diária recomendada. Indicado para maiores de 18 anos. Consulte seu médico ou nutricionista antes de iniciar o uso.",
  ingredients: "Leucina, Isoleucina e Valina na proporção 3:1:1. Sem adição de corantes, aromatizantes ou saborizantes artificiais. Consulte o rótulo da embalagem para informações nutricionais completas.",
  whoShouldUse: "Praticantes de musculação, crossfit, corrida e esportes de alta intensidade que buscam recuperação mais rápida, proteção muscular e melhora de desempenho. Especialmente indicado para quem treina em déficit calórico. Indicado para maiores de 18 anos.",
  faq: [
    { question: "Quantas doses tem o pote de 60 cápsulas?", answer: "Na dose de 4 cápsulas por dia, o pote rende 15 doses — ideal para um ciclo de suplementação de duas semanas. Para uso contínuo, considere adquirir mais de uma unidade." },
    { question: "BCAA substitui o whey protein?", answer: "Não. O whey protein é uma proteína completa com todos os aminoácidos essenciais, enquanto o BCAA é um suplemento específico de três aminoácidos. Ambos podem ser usados de forma complementar." },
    { question: "Posso tomar BCAA todos os dias?", answer: "Sim, especialmente nos dias de treino. Nos dias de descanso, o uso também é válido para auxiliar na recuperação muscular, sempre respeitando a dose recomendada." },
    { question: "O BCAA ajuda em fases de emagrecimento?", answer: "Indiretamente sim. Ao preservar a massa muscular durante dietas com déficit calórico, o BCAA contribui para manter o metabolismo ativo e a composição corporal durante o processo de emagrecimento." },
  ],
},
{
  id: "49",
  name: "BCAA 10:1:1 Em Pó 250g Sabor Frutas Vermelhas 3VS Nutrition",
  slug: "bcaa-10-1-1-250g-frutas-vermelhas-3vs-nutrition",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/2BG7CUk",
  image: "/images/produtos/bcaa-10-1-1-250g-frutas-vermelhas-3vs-nutrition.webp",
  badge: "Mais Vendido",
  rating: 4.7,
  reviews: 3399,
  sold: "+1000 vendidos",
  shortDescription: "BCAA 10:1:1 em pó com 3900mg de aminoácidos por dose, sabor Frutas Vermelhas, 50 doses e zero açúcar. 3VS Nutrition.",
  description: "O BCAA 10:1:1 da 3VS Nutrition eleva o padrão dos suplementos de aminoácidos com uma proporção ultra concentrada: 10 partes de leucina para cada parte de isoleucina e valina, entregando 3900mg de aminoácidos de cadeia ramificada por dose. A leucina é o principal gatilho para a síntese proteica muscular — e nessa proporção, o estímulo é máximo. Parte da Victory Series da 3VS, a fórmula em pó garante absorção rápida, é zero açúcar, zero glúten e rende 50 doses por pote. O sabor Frutas Vermelhas torna o consumo agradável sem abrir mão da eficácia. Ideal para quem treina pesado e exige o melhor em recuperação, performance e preservação muscular.",
  benefits: [
    "3900mg de aminoácidos BCAA por dose na proporção ultra concentrada 10:1:1",
    "Máximo estímulo à síntese proteica com alta concentração de leucina",
    "Recuperação muscular acelerada pós-treino",
    "Reduz a fadiga e o catabolismo durante treinos intensos",
    "Zero açúcar e zero glúten — fórmula limpa",
    "50 doses por pote — sabor Frutas Vermelhas",
  ],
  howToUse: "Misturar 1 porção (5g) em 200ml de água gelada e agitar bem até dissolução completa. Consumir antes, durante ou após o treino conforme orientação de nutricionista. Nos dias sem treino, consumir junto a uma das refeições. Indicado para maiores de 18 anos.",
  ingredients: "Leucina (3250mg), Valina (325mg), Isoleucina (325mg) por porção. Zero açúcar, zero glúten. Sem adição de corantes artificiais. Consulte o rótulo da embalagem para a lista completa de ingredientes.",
  whoShouldUse: "Atletas e praticantes de musculação, crossfit e modalidades de alta intensidade que buscam recuperação muscular superior, proteção contra catabolismo e melhor desempenho nos treinos. Especialmente indicado para fases de hipertrofia e cutting. Indicado para maiores de 18 anos.",
  faq: [
    { question: "Qual a diferença entre BCAA 3:1:1 e 10:1:1?", answer: "A proporção indica a concentração de leucina em relação aos outros aminoácidos. O BCAA 10:1:1 oferece muito mais leucina por dose, potencializando o estímulo à síntese proteica muscular — ideal para quem busca resultados mais expressivos." },
    { question: "Quantas doses tem o pote de 250g?", answer: "O pote rende 50 doses na porção de 5g, suficiente para aproximadamente 7 semanas de uso diário." },
    { question: "O produto contém açúcar ou glúten?", answer: "Não. O BCAA 10:1:1 da 3VS Nutrition é zero açúcar e zero glúten, sendo adequado para dietas restritivas e pessoas com sensibilidade ao glúten." },
    { question: "Posso combinar com whey protein?", answer: "Sim. O BCAA e o whey protein são complementares. O whey fornece o perfil completo de aminoácidos para síntese muscular, enquanto o BCAA em pó oferece aporte rápido e direto dos três aminoácidos essenciais mais importantes para recuperação." },
  ],
},
{
  id: "50",
  name: "Aminnu Aminoácidos Essenciais 30 Sachês Sabor Tangerina Central Nutrition",
  slug: "aminnu-aminoacidos-essenciais-30-saches-tangerina-central-nutrition",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/14CKcSQ",
  image: "/images/produtos/aminnu-aminoacidos-essenciais-30-saches-tangerina-central-nutrition.webp",
  rating: 4.8,
  reviews: 3204,
  sold: "+10 mil vendidos",
  shortDescription: "Aminnu com aminoácidos essenciais em pó em 30 sachês sabor Tangerina para recuperação, resistência e manutenção muscular. Central Nutrition.",
  description: "O Aminnu da Central Nutrition é um suplemento de aminoácidos essenciais em formato sachê — prático, preciso e feito para quem leva o treino a sério. 2º lugar em Suplementos Central Nutrition no Mercado Livre, com mais de 10 mil unidades vendidas e 3204 avaliações que confirmam a qualidade. Cada sachê de 10g entrega um blend completo de aminoácidos essenciais, incluindo os três BCAAs — leucina, isoleucina e valina — responsáveis pela recuperação muscular acelerada, redução da fadiga e manutenção da massa magra. O sabor Tangerina torna o consumo agradável em qualquer momento do dia, sem necessidade de balanças ou medidores. 30 sachês por caixa, com praticidade total para levar na bolsa da academia ou para o trabalho.",
  benefits: [
    "Blend completo de aminoácidos essenciais por sachê",
    "Inclui leucina, isoleucina e valina (BCAAs) para recuperação e performance",
    "Formato sachê — dose precisa, sem balança, fácil de levar",
    "Reduz a fadiga muscular e combate o catabolismo",
    "Auxilia na manutenção e recuperação da massa magra",
    "Mais de 10 mil vendidos — 2º em Suplementos Central Nutrition",
  ],
  howToUse: "Dissolver 1 sachê (10g) em 200 a 300ml de água gelada e misturar bem. Consumir antes, durante ou após o treino conforme orientação de nutricionista. Indicado para maiores de 18 anos. Não exceder a dose diária recomendada.",
  ingredients: "Blend de aminoácidos essenciais (inclui leucina, isoleucina e valina). Consulte o rótulo da embalagem para a composição completa e tabela nutricional detalhada.",
  whoShouldUse: "Atletas, praticantes de musculação, crossfit, corrida e esportes de resistência que buscam recuperação muscular mais rápida, menos fadiga e melhor desempenho. Indicado também para quem busca praticidade no dia a dia sem abrir mão da suplementação. Indicado para maiores de 18 anos.",
  faq: [
    { question: "Quantos sachês tem a caixa?", answer: "A caixa contém 30 sachês de 10g cada, suficiente para 30 dias de uso com uma dose diária." },
    { question: "Posso misturar o Aminnu com outros suplementos?", answer: "Sim. O Aminnu pode ser combinado com whey protein, creatina ou pré-treino conforme estratégia nutricional orientada por profissional de saúde." },
    { question: "O produto contém açúcar?", answer: "Consulte o rótulo da embalagem para informações completas sobre açúcares e demais componentes da fórmula." },
    { question: "Qual a vantagem do formato sachê em relação ao pote?", answer: "O sachê oferece dose já medida e embalagem individual, ideal para consumo fora de casa, na academia ou durante viagens, sem risco de errar a dose ou carregar potes volumosos." },
  ],
},
{
  id: "51",
  name: "L-Carnosina 500mg 100 Cápsulas Vegetarianas Now Foods",
  slug: "l-carnosina-500mg-100-capsulas-vegetarianas-now-foods",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/23BEF2Q",
  image: "/images/produtos/l-carnosina-500mg-100-capsulas-vegetarianas-now-foods.webp",
  badge: "Mais Vendido",
  rating: 4.9,
  reviews: 20,
  sold: "+100 vendidos",
  shortDescription: "L-Carnosina 500mg em 100 cápsulas vegetarianas para vitalidade muscular, proteção celular e envelhecimento saudável. Now Foods.",
  description: "A L-Carnosina 500mg da Now Foods é um suplemento premium importado para quem busca mais do que força muscular — busca longevidade celular. A carnosina é um dipeptídeo formado pelos aminoácidos beta-alanina e L-histidina, encontrado naturalmente em altas concentrações nos músculos e no cérebro. Sua principal função é atuar como antioxidante e tamponador de pH muscular, neutralizando o ácido lático acumulado durante os treinos e retardando a fadiga. Além do desempenho físico, a carnosina é amplamente estudada por seus efeitos no envelhecimento saudável, na integridade celular e na proteção contra radicais livres. Cada cápsula entrega 500mg de L-Carnosina pura, em formulação vegetariana e vegana certificada pela Now Foods — referência mundial em suplementação de qualidade.",
  benefits: [
    "500mg de L-Carnosina pura por cápsula — dosagem precisa e eficaz",
    "Antioxidante potente que neutraliza radicais livres e protege as células",
    "Tamponador de pH muscular — reduz a acidez e retarda a fadiga",
    "Suporte à vitalidade e integridade muscular",
    "Estudada por seus efeitos no envelhecimento celular saudável",
    "Formulação 100% vegetariana e vegana — Now Foods",
  ],
  howToUse: "Tomar 1 cápsula, 1 a 2 vezes ao dia, preferencialmente junto às refeições ou conforme orientação de médico ou nutricionista. Não exceder a dose diária recomendada. Indicado para maiores de 18 anos.",
  ingredients: "L-Carnosina (beta-alanil-L-histidina) 500mg por cápsula. Cápsula vegetal (celulose). Sem glúten, sem laticínios, sem ovos, sem soja. Produto vegetariano e vegano.",
  whoShouldUse: "Atletas, praticantes de musculação e pessoas que buscam suporte antioxidante, proteção celular e envelhecimento saudável. Indicado também para quem deseja reduzir a fadiga muscular em treinos intensos. Formulação adequada para vegetarianos e veganos. Indicado para maiores de 18 anos.",
  faq: [
    { question: "O que é L-Carnosina?", answer: "A L-Carnosina é um dipeptídeo natural formado pelos aminoácidos beta-alanina e L-histidina. Está presente em alta concentração nos músculos e no cérebro, atuando como antioxidante e tamponador de acidez muscular." },
    { question: "Quantas doses tem o frasco de 100 cápsulas?", answer: "Tomando 2 cápsulas por dia, o frasco rende 50 doses — aproximadamente 50 dias de suplementação contínua. Com 1 cápsula diária, a duração dobra para 100 dias." },
    { question: "A L-Carnosina é diferente de beta-alanina?", answer: "Sim. A beta-alanina é um dos aminoácidos que formam a carnosina. Ao suplementar diretamente com L-Carnosina, o organismo recebe o dipeptídeo já formado, sem depender da síntese interna." },
    { question: "Vegetarianos e veganos podem usar?", answer: "Sim. O produto utiliza cápsulas de celulose vegetal e não contém ingredientes de origem animal, sendo adequado para dietas vegetarianas e veganas." },
  ],
},
{
  id: "52",
  name: "Zinco Carnosina PepZin GI 37,5mg 60 Cápsulas Swanson",
  slug: "zinco-carnosina-pepzin-gi-37-5mg-60-capsulas-swanson",
  category: "aminoacidos",
  categoryName: "Aminoácidos",
  affiliateLink: "https://meli.la/1zJC6KA",
  image: "/images/produtos/zinco-carnosina-pepzin-gi-375mg-60-capsulas-swanson.webp",
  rating: 4.9,
  reviews: 105,
  sold: "+100 vendidos",
  shortDescription: "Zinco Carnosina com PepZin GI 37,5mg em 60 cápsulas para saúde digestiva, proteção gástrica e equilíbrio intestinal. Swanson.",
  description: "O Zinc Carnosine com PepZin GI da Swanson é um suplemento importado premium voltado para a saúde do trato digestivo. A tecnologia PepZin GI combina zinco e L-carnosina em um complexo quelado de liberação gradual, projetado para aderir à mucosa gástrica e fornecer suporte prolongado à integridade do revestimento do estômago e do intestino. O zinco é um mineral essencial com papel fundamental na imunidade, cicatrização de tecidos e metabolismo celular, enquanto a carnosina atua como antioxidante e protetor da mucosa gastrointestinal. Cada cápsula entrega 37,5mg do complexo PepZin GI, sem glúten, sem lactose e em formulação 100% vegana. Uma escolha sofisticada para quem cuida da saúde digestiva com seriedade.",
  benefits: [
    "Complexo PepZin GI — zinco quelado com L-carnosina para liberação gradual",
    "Suporte à integridade e proteção da mucosa gástrica e intestinal",
    "Zinco essencial para imunidade, cicatrização e metabolismo celular",
    "L-Carnosina antioxidante para proteção do revestimento digestivo",
    "Sem glúten, sem lactose — formulação 100% vegana",
    "Swanson — referência mundial em suplementação importada de qualidade",
  ],
  howToUse: "Tomar 1 cápsula ao dia, preferencialmente junto às refeições para melhor absorção e tolerância gástrica. Não exceder a dose diária recomendada. Indicado para maiores de 18 anos. Consulte seu médico ou nutricionista antes de iniciar o uso.",
  ingredients: "Complexo Zinco Carnosina (PepZin GI) 37,5mg por cápsula. Cápsula vegetal. Sem glúten, sem lactose. Produto vegano. Consulte o rótulo da embalagem para a lista completa de ingredientes.",
  whoShouldUse: "Pessoas que buscam suporte à saúde digestiva, proteção da mucosa gástrica e reforço imunológico com um suplemento importado de alta qualidade. Indicado para veganos e pessoas com restrição a glúten e lactose. Recomendado para maiores de 18 anos com acompanhamento de médico ou nutricionista.",
  faq: [
    { question: "O que é PepZin GI?", answer: "PepZin GI é uma tecnologia patenteada que combina zinco e L-carnosina em um complexo quelado. Essa ligação permite que o composto se fixe na mucosa gástrica e atue de forma prolongada, oferecendo suporte superior à saúde digestiva em comparação ao zinco isolado." },
    { question: "Quantas doses tem o frasco de 60 cápsulas?", answer: "Tomando 1 cápsula por dia conforme recomendado, o frasco rende 60 doses — dois meses completos de suplementação contínua." },
    { question: "Veganos podem usar?", answer: "Sim. O produto utiliza cápsula vegetal e não contém ingredientes de origem animal, sendo adequado para dietas veganas e vegetarianas." },
    { question: "Posso tomar em jejum?", answer: "A Swanson recomenda consumir junto às refeições para facilitar a absorção e evitar qualquer desconforto gástrico." },
  ],
},
{
  id: "53",
  name: "Hipercalórico Dark Mass 3kg Sabor Baunilha Dark Lab",
  slug: "hipercalorico-dark-mass-3kg-baunilha-dark-lab",
  category: "hipercaloricos",
  categoryName: "Hipercalóricos",
  affiliateLink: "https://meli.la/1Am8CMQ",
  image: "/images/produtos/hipercalorico-dark-mass-3kg-baunilha-dark-lab.webp",
  badge: "48% OFF",
  rating: 4.8,
  reviews: 36789,
  sold: "+50 mil vendidos",
  shortDescription: "Hipercalórico Dark Mass 3kg sabor Baunilha com Whey Protein, BCAA, Waxy Maize, Creatina e 25 vitaminas para ganho de massa. Dark Lab.",
  description: "O Dark Mass da Dark Lab é o hipercalórico premium para quem precisa comer mais do que consegue — e transformar isso em músculo. 3º lugar em Suplementos Dark Lab no Mercado Livre, com mais de 50 mil unidades vendidas e quase 37 mil avaliações, é uma das fórmulas mass gainer mais completas do mercado nacional. Cada dose reúne proteínas de alto valor biológico (Whey Protein e Albumina), carboidratos com absorção em diferentes velocidades (Maltodextrina e Waxy Maize) para sustentar a energia ao longo do dia, além de BCAAs e 3g de creatina monoidratada para potencializar a força, a explosão e a recuperação. Completa ainda com 25 vitaminas e minerais essenciais para o funcionamento do organismo. Tudo em um único shake, no sabor Baunilha, sem glúten.",
  benefits: [
    "Whey Protein + Albumina — proteínas de alto valor biológico para hipertrofia",
    "Maltodextrina + Waxy Maize — carboidratos de dupla absorção para energia sustentada",
    "3g de creatina por dose para mais força, explosão e resistência",
    "BCAAs inclusos para recuperação e proteção muscular",
    "25 vitaminas e minerais essenciais por porção",
    "Mais de 50 mil vendidos — 3º em Suplementos Dark Lab",
  ],
  howToUse: "Misturar 1 porção em água ou leite e agitar bem até dissolução completa. Consumir preferencialmente após o treino ou entre as refeições conforme orientação de nutricionista. Após aberto, consumir em até 90 dias. Indicado para maiores de 18 anos.",
  ingredients: "Whey Protein, Albumina, Maltodextrina, Waxy Maize, Creatina Monoidratada, BCAAs (Leucina, Isoleucina e Valina), 25 Vitaminas e Minerais. Não contém glúten. Contém derivados de leite e soja.",
  whoShouldUse: "Pessoas com dificuldade de ganho de peso e massa muscular (hardgainers), atletas em fase de bulking e praticantes de musculação que precisam aumentar o aporte calórico e proteico diário. Indicado para maiores de 18 anos sob orientação de nutricionista ou médico.",
  faq: [
    { question: "Qual a diferença entre hipercalórico e whey protein?", answer: "O whey protein foca no aporte proteico com baixo teor de carboidratos. O hipercalórico como o Dark Mass combina proteínas, carboidratos, creatina e micronutrientes em uma fórmula densa em calorias, ideal para quem precisa aumentar o consumo calórico total para ganhar massa." },
    { question: "O Dark Mass contém glúten?", answer: "Não. O produto é livre de glúten. Porém, contém derivados de leite e soja, sendo contraindicado para alérgicos a esses ingredientes." },
    { question: "Posso tomar Dark Mass sem treinar?", answer: "O produto é formulado para complementar a alimentação de praticantes de atividade física. O consumo sem treino regular pode resultar em ganho de gordura em vez de massa muscular. Consulte um nutricionista para adequar o uso à sua rotina." },
    { question: "Por quanto tempo o pote de 3kg dura após aberto?", answer: "A Dark Lab recomenda consumir o produto em até 90 dias após a abertura da embalagem, mantendo-o em local fresco, seco e protegido da luz solar." },
  ],
},
{
  id: "54",
  name: "Hipercalórico Giant Mass 3kg Bodybuilders Sabor Chocolate",
  slug: "hipercalorico-giant-mass-3kg-bodybuilders-chocolate",
  category: "hipercaloricos",
  categoryName: "Hipercalóricos",
  affiliateLink: "https://meli.la/2me6djk",
  image: "/images/produtos/hipercalorico-giant-mass-3kg-bodybuilders-chocolate.webp",
  rating: 4.6,
  reviews: 2742,
  sold: "+5 mil vendidos",
  shortDescription: "Hipercalórico Giant Mass 3kg da Bodybuilders com proteínas de alto valor biológico, vitaminas e minerais para ganho de massa magra e recuperação muscular.",
  description: "O Hipercalórico Giant Mass 3kg da Bodybuilders é a escolha certa para quem tem metabolismo acelerado e dificuldade em ganhar peso. Com mais de 5 mil unidades vendidas, este suplemento é um dos queridinhos do Mercado Livre para quem busca desenvolver massa muscular de forma consistente. Sua fórmula combina proteínas de alto valor biológico com uma matriz de carboidratos de alta densidade calórica, fornecendo o combustível necessário para treinos intensos e prolongados. Além disso, é enriquecido com vitaminas e sais minerais que auxiliam no equilíbrio nutricional do organismo, e conta com ácidos graxos essenciais como ômega-3 e ômega-6, que contribuem para a saúde cardiovascular e o bom colesterol. Livre de gordura trans, o Giant Mass é um suplemento completo para quem quer ganhar peso com qualidade, evitando a fadiga muscular e garantindo mais disposição no dia a dia. O produto ainda acompanha um e-book exclusivo com dicas de saúde e musculação, um conteúdo extra para potencializar ainda mais seus resultados.",
  benefits: [
    "Fórmula com proteínas de alto valor biológico e aminoácidos essenciais",
    "Rico em carboidratos de alta densidade calórica para energia sustentada",
    "Contém vitaminas e sais minerais para suporte nutricional completo",
    "Ômega-3 e ômega-6 que auxiliam no equilíbrio do colesterol bom",
    "Livre de gordura trans — fórmula mais limpa e saudável",
    "Ideal para quem tem metabolismo rápido e dificuldade para ganhar peso",
    "Mais de 5 mil vendidos no Mercado Livre",
  ],
  howToUse: "Adicionar 60g (6 colheres de sopa rasas) a 300mL de água gelada. Agitar em coqueteleira por 20 segundos ou bater no liquidificador até dissolver completamente. Consumir imediatamente após o preparo. Ingerir 2 porções diárias: 30 minutos antes do treino e 30 minutos após o treino. Em dias sem treino, consumir entre as refeições principais.",
  ingredients: "Proteínas de alto valor biológico, carboidratos complexos, vitaminas, sais minerais, ômega-3, ômega-6. Não contém gordura trans.",
  whoShouldUse: "Pessoas com metabolismo acelerado que têm dificuldade para ganhar peso e buscam desenvolver massa muscular magra. Atletas e praticantes de atividades físicas que precisam de um aporte calórico extra para sustentar treinos de alta intensidade. Indicado para maiores de 19 anos, sob orientação de nutricionista ou médico.",
  faq: [
    { question: "O Giant Mass é indicado para quem quer emagrecer?", answer: "Não. O Giant Mass é um hipercalórico formulado para ganho de peso e massa muscular. Se seu objetivo é emagrecer, existem outros suplementos mais adequados, como termogênicos ou L-carnitina." },
    { question: "Quantas doses vem no pote de 3kg?", answer: "Com a porção recomendada de 60g por dose, o pote de 3kg rende aproximadamente 50 doses — o suficiente para cerca de 25 dias de suplementação (2 doses por dia)." },
    { question: "Precisa tomar todos os dias?", answer: "Sim. Para melhores resultados, o consumo deve ser diário, inclusive nos dias sem treino. A constância é fundamental para o ganho de massa muscular." },
    { question: "Posso misturar com leite em vez de água?", answer: "Sim, pode ser misturado com leite, iogurte ou até frutas para um shake mais cremoso e nutritivo. Apenas lembre-se de que isso aumenta ainda mais o valor calórico da preparação." },
    { question: "Precisa de acompanhamento profissional?", answer: "A Bodybuilders recomenda o uso sob orientação de nutricionista ou médico, especialmente para atletas e pessoas com condições de saúde específicas." },
  ],
},
{
  id: "55",
  name: "Dimethylhex 60 Cápsulas Termogênico Under Labz - Queimador de Gordura e Energia",
  slug: "dimethylhex-60-capsulas-termogenico-under-labz",
  category: "emagrecimento",
  categoryName: "Emagrecimento",
  affiliateLink: "https://meli.la/2hZC6rk",
  image: "/images/produtos/dimethylhex-60-capsulas-termogenico-under-labz.webp",
  badge: "Mais Vendido",
  rating: 4.8,
  reviews: 12544,
  sold: "+50 mil vendidos",
  shortDescription: "Termogênico Dimethylhex 60 cápsulas da Under Labz com cafeína, guaraná, chá verde e L-carnitina para queima de gordura, energia e foco. 2º mais vendido em Suplementos Under Labz.",
  description: "O Dimethylhex da Under Labz é um dos termogênicos mais vendidos do Mercado Livre, com mais de 50 mil unidades comercializadas e a 2ª posição entre os suplementos da marca. Este termogênico em cápsulas foi desenvolvido para potencializar a queima de gordura, aumentar os níveis de energia e melhorar o foco mental durante os treinos e ao longo do dia. Sua fórmula combina ingredientes termogênicos de alto desempenho: Cafeína e Guaraná para estimular o metabolismo, Chá Verde e Gengibre com ação antioxidante e diurética, Extrato de Laranja Moro e Laranja Amarga que auxiliam na oxidação de gorduras, além de L-Carnitina que transporta ácidos graxos para as mitocôndrias, transformando-os em energia. Completam a fórmula vitaminas do complexo B (B1, B2, B3, B5, B6, B9, B12) e Biotina, que garantem o bom funcionamento do sistema nervoso e energético. Sem glúten, o Dimethylhex é indicado para maiores de 18 anos que buscam um suporte eficaz para emagrecimento e desempenho físico, sempre aliado a uma alimentação equilibrada e exercícios regulares.",
  benefits: [
    "Acelera o metabolismo e promove a queima de gordura corporal",
    "Aumenta os níveis de energia e disposição para os treinos",
    "Melhora o foco e a concentração mental",
    "Ação antioxidante e diurética com Chá Verde e Gengibre",
    "Extratos cítricos (Laranja Moro e Laranja Amarga) auxiliam na oxidação de gordura",
    "L-Carnitina facilita o transporte de gorduras para produção de energia",
    "Vitaminas do complexo B garantem suporte energético e nervoso",
    "2º mais vendido em Suplementos Under Labz no Mercado Livre",
  ],
  howToUse: "Consumir 1 cápsula duas vezes ao dia, preferencialmente pela manhã e no início da tarde, ou conforme orientação de nutricionista ou médico. Não exceder a recomendação diária. Tomar com bastante água. Evitar o consumo próximo ao horário de dormir devido à presença de cafeína.",
  ingredients: "Café Verde Moído, Cafeína, Extrato de Laranja Moro (Citrus Sinensis L. Osbeck), Tartarato de L-Carnitina, Guaraná em Pó (Paullinia Cupana), Picolinato de Cromo, Nicotinamida, Pantotenato de Cálcio, Cloridrato de Piridoxina, Biotina, Mononitrato de Tiamina, Riboflavina, Ácido Fólico, Cianocobalamina, Aromatizantes Naturais, Extrato da Casca de Laranja Amarga (Citrus Aurantium), Chá Verde, Gengibre em Pó, Pimenta Caiena, Agentes de Fosfato Tricálcico, Dióxido de Silício, Corantes (Azul Brilhante FCF, Eritrosina, Tartrazina), Gelatina, Estearato de Magnésio. Não contém glúten. Pode conter derivados de leite.",
  whoShouldUse: "Indivíduos com mais de 18 anos que buscam um termogênico para auxiliar na perda de peso, aumento de energia e desempenho físico, desde que aliado a dieta equilibrada e atividade física. Não recomendado para gestantes, lactantes, crianças, pessoas com hipertensão, distúrbios cardíacos, ansiedade ou sensibilidade à cafeína. Consulte sempre um médico ou nutricionista antes de iniciar o uso.",
  faq: [
    { question: "O Dimethylhex realmente emagrece?", answer: "Ele é um termogênico que acelera o metabolismo e auxilia na queima de gordura, mas os resultados dependem de uma alimentação equilibrada e prática de exercícios. Ele é um complemento, não uma solução milagrosa." },
    { question: "Posso tomar mais de 2 cápsulas por dia?", answer: "Não. A recomendação máxima é de 2 cápsulas diárias. Exceder pode causar efeitos colaterais como taquicardia, insônia e nervosismo devido à cafeína." },
    { question: "Contém cafeína? Posso tomar à noite?", answer: "Sim, contém cafeína e guaraná. Evite o consumo após as 16h para não prejudicar o sono." },
    { question: "É seguro para hipertensos?", answer: "Não é recomendado para hipertensos ou pessoas com problemas cardíacos, pois a cafeína pode elevar a pressão arterial. Consulte seu médico antes." },
    { question: "Precisa de receita médica?", answer: "Não, é um suplemento alimentar dispensado de registro na Anvisa (RDC 240/2018), mas recomendamos orientação profissional." },
    { question: "Pode ser tomado por mulheres grávidas?", answer: "Não, é contraindicado para gestantes, lactantes e crianças." },
  ],
},
{
  id: "56",
  name: "Pro Abdomen 60 Cápsulas Termogênico Profit Laboratórios - 400mg Cafeína, Energia e Queima de Gordura",
  slug: "pro-abdomen-60-capsulas-termogenico-profit-laboratorios",
  category: "emagrecimento",
  categoryName: "Emagrecimento",
  affiliateLink: "https://meli.la/2WkSBia",
  image: "/images/produtos/pro-abdomen-60-capsulas-termogenico-profit-laboratorios.webp",
  badge: "Mais Vendido",
  rating: 4.6,
  reviews: 2794,
  sold: "+10 mil vendidos",
  shortDescription: "Termogênico Pro Abdomen 60 cápsulas da Profit Laboratórios com 400mg de cafeína por dose para queimar gordura, aumentar energia, foco e disposição nos treinos. 4º mais vendido em Suplementos Profit.",
  description: "O Pro Abdomen da Profit Laboratórios é um termogênico de alta performance desenvolvido para quem busca potencializar a queima de gordura, aumentar a disposição física e mental e ter mais energia para treinos intensos. Com mais de 10 mil unidades vendidas e a 4ª posição entre os suplementos da marca no Mercado Livre, este termogênico em cápsulas é a escolha certa para acelerar o metabolismo e transformar o corpo. Sua fórmula ultra concentrada entrega 400 mg de cafeína anidra por cápsula — um dos mais potentes estimulantes do sistema nervoso central. A cafeína atua diretamente na quebra de gorduras, liberando ácidos graxos para serem usados como fonte de energia durante os exercícios. Isso significa mais disposição, menos fadiga e treinos mais longos e produtivos. Associado a uma dieta equilibrada e hábitos saudáveis, o Pro Abdomen favorece a metabolização da gordura corporal, ajudando você a alcançar seus objetivos de emagrecimento e definição muscular. Com 60 cápsulas por pote, é o termogênico ideal para atividades aeróbicas e treinos de alta intensidade. Livre de glúten e recomendado para adultos acima de 19 anos.",
  benefits: [
    "400 mg de cafeína anidra por cápsula — dose ultra concentrada para máxima eficiência",
    "Acelera o metabolismo e potencializa a queima de gordura corporal",
    "Aumenta a disposição física e mental para treinos mais intensos",
    "Reduz a sensação de fadiga e cansaço durante os exercícios",
    "Melhora o foco, a concentração e o desempenho atlético",
    "Ideal para atividades aeróbicas e treinos de alta intensidade",
    "Fórmula com cafeína anidra de rápida absorção",
    "4º mais vendido em Suplementos Profit no Mercado Livre",
    "Não contém glúten",
  ],
  howToUse: "Ingerir 1 cápsula ao dia, 30 minutos antes dos treinos. Não exceder a dose recomendada. Tomar com bastante água. Evitar o consumo próximo ao horário de dormir devido à alta concentração de cafeína. Para melhores resultados, associar a uma dieta equilibrada e prática regular de exercícios físicos.",
  ingredients: "Cafeína Anidra, dióxido de silício, estearato de magnésio. Veículo cápsula: gelatina, água purificada, corantes artificiais (azul brilhante, eritrosina e tartrazina) e dióxido de titânio. Não contém glúten.",
  whoShouldUse: "Adultos acima de 19 anos que buscam um termogênico para potencializar a queima de gordura, aumentar a energia e o foco durante os treinos. Indicado para atletas e praticantes de atividades físicas, especialmente modalidades aeróbicas. Não recomendado para gestantes, lactantes, crianças, pessoas com hipertensão, distúrbios cardíacos, ansiedade, insônia ou sensibilidade à cafeína. Consulte sempre um médico ou nutricionista antes de iniciar o uso.",
  faq: [
    { question: "O Pro Abdomen realmente ajuda a emagrecer?", answer: "Sim! O Pro Abdomen é um termogênico com 400 mg de cafeína por cápsula que acelera o metabolismo e favorece a queima de gordura corporal. Porém, os melhores resultados vêm da combinação com uma dieta equilibrada e exercícios físicos regulares." },
    { question: "Quantas cápsulas devo tomar por dia?", answer: "A recomendação é de 1 cápsula ao dia, 30 minutos antes do treino. Não exceda essa dose — a cafeína é ultra concentrada." },
    { question: "Posso tomar o Pro Abdomen à noite?", answer: "Não é recomendado. Por conter 400 mg de cafeína por cápsula, o consumo próximo ao horário de dormir pode causar insônia. Prefira tomar pela manhã ou antes do treino." },
    { question: "Qual a diferença entre Pro Abdomen e Pro Abdomen Hers?", answer: "O Pro Abdomen tradicional tem 400 mg de cafeína por cápsula, enquanto a versão Hers tem 210 mg. O Pro Abdomen é mais potente e indicado para quem já tem tolerância à cafeína." },
    { question: "Pro Abdomen tem glúten ou lactose?", answer: "Não contém glúten. Quanto à lactose, a fórmula não lista derivados de leite, mas consulte a embalagem para confirmar." },
    { question: "Precisa de receita médica para comprar?", answer: "Não, o Pro Abdomen é um suplemento alimentar, não um medicamento. No entanto, recomendamos orientação de um nutricionista ou médico antes de iniciar o uso." },
    { question: "Quanto tempo dura um pote de 60 cápsulas?", answer: "Com 1 cápsula por dia, o pote rende 60 dias (2 meses) de suplementação." },
  ],
},
{
  id: "57", // 🔢 Ajuste o ID conforme o próximo da sua lista
  name: "Vitamina C 120 Cápsulas Growth Supplements Natural",
  slug: "vitamina-c-120-capsulas-growth-supplements-natural",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/SEU-LINK-AQUI", // 🔗 Substitua pelo seu link de afiliado
  image: "/images/produtos/vitamina-c-120-capsulas-growth-supplements-natural.webp",
  badge: "Mais Vendido",
  sold: "+1000 vendidos",
  rating: 4.9,
  reviews: 421,
  shortDescription: "Vitamina C 45mg em 120 cápsulas da Growth Supplements. Antioxidante natural, suporte imunológico, formação de colágeno e recuperação muscular. Sem glúten.",
  description: "Poucas vitaminas têm papel tão amplo e comprovado no organismo quanto a vitamina C — e a Growth Supplements entrega esse nutriente essencial na dose certa, em cápsulas práticas para o dia a dia. Com mais de 1000 unidades vendidas e avaliação de 4.9 no Mercado Livre, a Vitamina C 120 Cápsulas é a escolha de quem quer cuidar da saúde de forma séria e acessível. Cada cápsula de 500mg fornece 45mg de ácido ascórbico — a forma mais estudada e bem absorvida da vitamina C — cobrindo 100% da IDR diária com apenas uma dose. Sua ação antioxidante neutraliza os radicais livres produzidos durante exercícios físicos intensos, protegendo células musculares e reduzindo o tempo de recuperação. Além disso, a vitamina C é cofator indispensável na síntese de colágeno, fortalecendo pele, tendões, ligamentos e vasos sanguíneos. Livre de glúten e com fórmula limpa, é um dos suplementos mais versáteis e indicados para qualquer rotina — atleta ou não.",
  benefits: [
    "45mg de vitamina C por cápsula — 100% da IDR diária em uma única dose",
    "Potente ação antioxidante que neutraliza radicais livres gerados pelo exercício",
    "Estimula a síntese natural de colágeno para pele, tendões e ligamentos",
    "Fortalece e regula o sistema imunológico contra infecções",
    "Auxilia na recuperação muscular pós-treino de alta intensidade",
    "Protege a integridade das paredes dos vasos sanguíneos",
    "Retarda o envelhecimento celular ao combater o estresse oxidativo",
    "Livre de glúten — fórmula limpa e segura para o consumo diário",
    "120 cápsulas — 4 meses de suplementação contínua com 1 dose diária",
  ],
  howToUse: "Tomar 1 cápsula por dia, preferencialmente junto a uma refeição para facilitar a absorção. Não exceder 1 porção diária. Indicado para maiores de 19 anos. Crianças, gestantes, idosos e portadores de qualquer enfermidade devem consultar médico e/ou nutricionista antes do uso.",
  ingredients: "Amido de milho, Vitamina C (ácido ascórbico) 45mg, Gelatina, Umectante Glicerina. Não contém glúten. Peso líquido: 60g. Porção: 1 cápsula de 500mg.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que buscam reforço imunológico, proteção antioxidante, saúde da pele e recuperação muscular. Especialmente recomendado para praticantes de atividades físicas intensas que sofrem maior estresse oxidativo. Também indicado para quem tem alimentação com baixa ingestão de frutas cítricas e vegetais frescos.",
  faq: [
    {
      question: "Qual a quantidade de vitamina C em cada cápsula?",
      answer: "Cada cápsula fornece 45mg de vitamina C (ácido ascórbico), correspondendo a 100% da IDR — Ingestão Diária Recomendada para adultos saudáveis."
    },
    {
      question: "Quantas doses tem o pote de 120 cápsulas?",
      answer: "Com a dose recomendada de 1 cápsula por dia, o pote rende 120 dias de uso contínuo — equivalente a 4 meses completos de suplementação."
    },
    {
      question: "A Vitamina C Growth Supplements contém glúten?",
      answer: "Não. O produto é livre de glúten, sendo seguro para pessoas com doença celíaca ou sensibilidade ao glúten."
    },
    {
      question: "Posso tomar vitamina C em jejum?",
      answer: "A Growth Supplements recomenda consumir junto com alimentos para facilitar a assimilação e reduzir qualquer desconforto gástrico. Prefira tomar na refeição principal do dia."
    },
    {
      question: "A vitamina C realmente ajuda na recuperação muscular?",
      answer: "Sim. Durante exercícios intensos, o corpo produz radicais livres que danificam fibras musculares. A vitamina C atua como antioxidante, neutralizando esses compostos e contribuindo para a recuperação mais rápida após o treino."
    },
    {
      question: "Gestantes e crianças podem tomar?",
      answer: "Gestantes, lactantes, crianças e portadores de enfermidades devem consultar médico e/ou nutricionista antes de iniciar o uso. O produto é indicado para adultos acima de 19 anos sem orientação específica."
    },
    {
      question: "A vitamina C auxilia na produção de colágeno?",
      answer: "Sim. A vitamina C é cofator essencial na síntese de colágeno — a proteína mais abundante do corpo humano. Sem ela, o organismo não consegue produzir colágeno de forma eficiente, comprometendo a saúde da pele, tendões, ligamentos e cartilagens."
    },
  ],
},
{
  id: "58", // 🔢 Ajuste o ID conforme o próximo da sua lista
  name: "Ômega 3 EPA DHA 60 Cápsulas Dark Lab 1000mg",
  slug: "omega-3-epa-dha-60-capsulas-dark-lab-1000mg",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/SEU-LINK-AQUI", // 🔗 Substitua pelo seu link de afiliado
  image: "/images/produtos/omega-3-epa-dha-60-capsulas-dark-lab-1000mg.webp",
  badge: "49% OFF",
  sold: "+1000 vendidos",
  rating: 4.9,
  reviews: 6210,
  shortDescription: "Ômega 3 EPA e DHA 1000mg em 60 cápsulas da Dark Lab. Óleo de peixe de alta qualidade para saúde cardiovascular, função cerebral, imunidade e controle inflamatório. Sem glúten.",
  description: "O Ômega 3 EPA e DHA da Dark Lab é um dos suplementos mais completos e necessários para quem leva a saúde a sério — e os números confirmam: mais de 1000 unidades vendidas e 6210 avaliações com nota 4.9 no Mercado Livre. Formulado com óleo de peixe de alta qualidade, cada cápsula de 1000mg concentra os dois ácidos graxos essenciais mais estudados da ciência nutricional: o EPA (Ácido Eicosapentaenoico) e o DHA (Ácido Docosahexaenoico). O corpo humano não produz esses nutrientes sozinho — eles precisam vir da alimentação ou da suplementação. O EPA atua diretamente no controle de processos inflamatórios e na proteção cardiovascular, enquanto o DHA é componente estrutural do cérebro e da retina, sendo fundamental para memória, raciocínio e saúde ocular. Juntos, formam um dos combos mais poderosos para longevidade e qualidade de vida. Certificado IFOS para garantia de pureza e livre de glúten.",
  benefits: [
    "1000mg de óleo de peixe com alta concentração de EPA e DHA por cápsula",
    "Proteção cardiovascular — reduz triglicerídeos e apoia a saúde do coração",
    "Suporte à função cerebral, memória e raciocínio com DHA",
    "Controle natural de processos inflamatórios com EPA",
    "Fortalecimento do sistema imunológico para maior resistência",
    "Contribui para a saúde ocular — DHA é componente estrutural da retina",
    "Certificado IFOS — padrão internacional de pureza e qualidade",
    "Livre de glúten — fórmula limpa para uso diário",
    "Mais de 6200 avaliações positivas — aprovado por quem usa",
  ],
  howToUse: "Ingerir 1 a 2 cápsulas ao dia, preferencialmente junto às refeições para melhorar a absorção dos ácidos graxos. Pode ser consumido no almoço ou jantar. Não exceder a dose diária recomendada. Indicado para maiores de 19 anos. Consulte médico ou nutricionista antes de iniciar o uso.",
  ingredients: "Óleo de Peixe (fonte de Ômega 3 — EPA e DHA), Gelatina, Umectante Glicerina. Não contém glúten. Peso líquido: 100g. Porção: 1 a 2 cápsulas ao dia.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que buscam saúde cardiovascular, função cerebral, controle inflamatório e suporte imunológico. Especialmente recomendado para praticantes de atividades físicas, pessoas com dieta pobre em peixes e indivíduos acima de 30 anos que desejam prevenir doenças crônicas e preservar a saúde a longo prazo.",
  faq: [
    {
      question: "O que é EPA e DHA e por que são importantes?",
      answer: "EPA (Ácido Eicosapentaenoico) e DHA (Ácido Docosahexaenoico) são ácidos graxos essenciais da família ômega 3 que o organismo não consegue produzir sozinho. O EPA atua no controle inflamatório e na saúde cardiovascular, enquanto o DHA é componente estrutural do cérebro e da retina, sendo essencial para memória e visão."
    },
    {
      question: "Quantas cápsulas devo tomar por dia?",
      answer: "A recomendação é de 1 a 2 cápsulas ao dia, preferencialmente junto às refeições. Para orientação personalizada sobre a dose ideal para seu objetivo, consulte um médico ou nutricionista."
    },
    {
      question: "O Ômega 3 Dark Lab contém glúten?",
      answer: "Não. O produto é livre de glúten, sendo seguro para celíacos e pessoas com sensibilidade ao glúten."
    },
    {
      question: "Por que tomar ômega 3 junto com as refeições?",
      answer: "Os ácidos graxos EPA e DHA são nutrientes lipossolúveis — ou seja, são melhor absorvidos quando consumidos na presença de gorduras alimentares, presentes nas refeições principais. Tomar em jejum pode reduzir a absorção e causar desconforto gástrico em algumas pessoas."
    },
    {
      question: "O ômega 3 realmente ajuda o coração?",
      answer: "Sim. Diversos estudos científicos comprovam que a suplementação com EPA e DHA contribui para a redução dos triglicerídeos, melhora do colesterol HDL e proteção das paredes dos vasos sanguíneos, sendo amplamente recomendado por cardiologistas como suporte à saúde cardiovascular."
    },
    {
      question: "Quantas doses tem o pote de 60 cápsulas?",
      answer: "Tomando 1 cápsula por dia, o pote rende 60 doses — dois meses de suplementação. Na dose de 2 cápsulas diárias, o pote dura 30 dias."
    },
    {
      question: "Pessoas alérgicas a frutos do mar podem tomar?",
      answer: "O produto é derivado de óleo de peixe. Pessoas com alergia a frutos do mar ou peixes devem consultar um médico antes de iniciar o uso, pois pode haver reação cruzada dependendo do tipo de alergia."
    },
  ],
},
{
  id: "59", // 🔢 Ajuste o ID conforme o próximo da sua lista
  name: "Zinco Quelato Easy Boost Bisglicinato 100% 29mg 90 Cápsulas",
  slug: "zinco-quelato-easy-boost-bisglicinato-29mg-90-capsulas",
  category: "vitaminas-e-minerais",
  categoryName: "Vitaminas e Minerais",
  affiliateLink: "https://meli.la/SEU-LINK-AQUI", // 🔗 Substitua pelo seu link de afiliado
  image: "/images/produtos/zinco-quelato-easy-boost-bisglicinato-29mg-90-capsulas.webp",
  badge: "Mais Vendido",
  sold: "+10 mil vendidos",
  rating: 4.9,
  reviews: 2314,
  shortDescription: "Zinco Quelato Bisglicinato 100% 29mg em 90 cápsulas da Easy Boost. 264% do VD por dose, sem glúten, sem lactose, sabor neutro. 1º em Suplementos Easy Boost no Mercado Livre.",
  description: "O zinco é um mineral que participa de mais de 300 reações enzimáticas no corpo humano — e mesmo assim é um dos nutrientes com maior índice de deficiência na população brasileira. O Zinco Quelato Bisglicinato 100% da Easy Boost resolve isso com eficiência: cada cápsula entrega 29mg de zinco na forma quelato, a versão com maior biodisponibilidade do mercado, garantindo absorção superior em comparação ao zinco comum. Com mais de 10 mil unidades vendidas e 1º lugar em Suplementos Alimentares Easy Boost no Mercado Livre, este produto é referência em custo-benefício e qualidade comprovada por mais de 2300 avaliações com nota 4.9. A forma bisglicinato — zinco ligado ao aminoácido glicina — é mais gentil com o trato gastrointestinal e apresenta menor risco de competição com outros minerais na absorção. Cada pote contém 90 cápsulas, o equivalente a 3 meses completos de suplementação. Sem glúten, sem lactose e validade mínima de 12 meses.",
  benefits: [
    "29mg de Zinco Quelato Bisglicinato por cápsula — 264% do Valor Diário",
    "Forma quelato com maior biodisponibilidade — absorção superior ao zinco comum",
    "Fortalece o sistema imunológico e aumenta a resistência a infecções",
    "Essencial para a síntese de proteínas e recuperação muscular pós-treino",
    "Suporte à produção natural de testosterona e equilíbrio hormonal",
    "Contribui para a saúde da pele, cabelos e unhas",
    "Participa de mais de 300 reações enzimáticas no organismo",
    "Sem glúten e sem lactose — seguro para intolerantes",
    "90 cápsulas — 3 meses de suplementação com validade mínima de 12 meses",
  ],
  howToUse: "Ingerir 1 cápsula ao dia (0,7g), preferencialmente junto a uma refeição para facilitar a absorção. Não exceder a dose diária recomendada. Indicado para maiores de 19 anos. Consulte médico ou nutricionista antes de iniciar o uso.",
  ingredients: "Zinco Quelato Bisglicinato 100% 29mg por porção. Porção: 0,7g. Conteúdo: 90 cápsulas. Não contém glúten. Não contém lactose. Sabor neutro.",
  whoShouldUse: "Indicado para adultos acima de 19 anos que buscam reforço imunológico, equilíbrio hormonal, saúde da pele e suporte à recuperação muscular. Especialmente recomendado para atletas, pessoas com dieta restritiva, vegetarianos e veganos — grupos com maior risco de deficiência de zinco. Também indicado para quem busca melhorar a qualidade do sono e a disposição diária.",
  faq: [
    {
      question: "Qual a diferença entre zinco quelato e zinco comum?",
      answer: "O zinco quelato (bisglicinato) é o mineral ligado ao aminoácido glicina, formando um composto de maior estabilidade e absorção intestinal. O zinco comum (óxido ou sulfato) compete com outros minerais na absorção e pode causar desconforto gástrico. O quelato é absorvido com mais eficiência e é mais gentil com o estômago."
    },
    {
      question: "Quantas doses tem o pote de 90 cápsulas?",
      answer: "Com a dose recomendada de 1 cápsula por dia, o pote rende 90 doses — exatamente 3 meses completos de suplementação contínua."
    },
    {
      question: "O Zinco Easy Boost contém glúten ou lactose?",
      answer: "Não. O produto é livre de glúten e lactose, sendo seguro para celíacos, intolerantes à lactose e pessoas com restrições alimentares."
    },
    {
      question: "O zinco realmente ajuda na imunidade?",
      answer: "Sim. O zinco é um dos minerais mais importantes para o funcionamento do sistema imunológico. Ele participa da produção e ativação de células de defesa, reduz a duração de processos infecciosos e protege as células contra danos oxidativos."
    },
    {
      question: "O zinco quelato ajuda na produção de testosterona?",
      answer: "Sim. O zinco é cofator essencial na síntese de testosterona. Homens com deficiência desse mineral frequentemente apresentam níveis hormonais abaixo do ideal. A suplementação, especialmente com a forma quelato de alta absorção, pode ajudar a normalizar os níveis hormonais quando há deficiência."
    },
    {
      question: "Qual a validade do produto?",
      answer: "O pote de Zinco Quelato Easy Boost tem validade mínima de 12 meses a partir da data de compra, garantindo qualidade e segurança durante todo o período de uso."
    },
    {
      question: "Posso tomar zinco junto com outros suplementos?",
      answer: "Sim, na maioria dos casos. Porém, evite tomar junto com suplementos de cálcio, ferro ou magnésio na mesma dose, pois esses minerais competem pela absorção intestinal. O ideal é espaçar o consumo com pelo menos 2 horas de intervalo entre eles."
    },
  ],
},
{
  id: "60", // 🔢 Ajuste o ID conforme o próximo da sua lista
  name: "Creatina Monohidratada Pura 300g Pote 100% FTW Suplemento em Pó",
  slug: "creatina-monohidratada-pura-300g-pote-ftw-suplemento-po",
  category: "creatina",
  categoryName: "Creatina",
  affiliateLink: "https://meli.la/SEU-LINK-AQUI", // 🔗 Substitua pelo seu link de afiliado
  image: "/images/produtos/creatina-monohidratada-pura-300g-pote-ftw-suplemento-po.webp",
  badge: "Mais Vendido",
  sold: "+50 mil vendidos",
  rating: 4.8,
  reviews: 33474,
  shortDescription: "Creatina Monohidratada Micronizada 100% Pura 300g da FTW. 3g por dose, cerca de 100 porções, sem glúten. 3º em Suplementos FTW no Mercado Livre. 47% OFF no Pix.",
  description: "Com mais de 50 mil unidades vendidas e 33 mil avaliações com nota 4.8, a Creatina Monohidratada Pura da FTW é uma das creatinas mais populares e bem avaliadas do Brasil — e não é à toa. A fórmula é direta ao ponto: creatina monohidratada micronizada 100% pura, sem nenhum aditivo, corante ou mistura desnecessária. A micronização garante partículas menores que se dissolvem com mais facilidade em água ou qualquer bebida, sem resíduos e sem aquele gosto residual que incomoda em produtos de qualidade inferior. Cada pote de 300g rende cerca de 100 porções de 3g — mais de 3 meses de suplementação diária em um único frasco. A creatina monohidratada é o suplemento esportivo com o maior volume de pesquisa científica do mundo: décadas de estudos comprovam seu papel no aumento de força, potência, volume muscular e recuperação acelerada entre as sessões de treino. O mecanismo é simples e eficiente — ela eleva os estoques de fosfocreatina nos músculos, ampliando a disponibilidade de ATP durante esforços de alta intensidade. 3º lugar em Suplementos FTW no Mercado Livre, dispensado de registro conforme RDC nº 240/2018 e livre de glúten.",
  benefits: [
    "Creatina monohidratada micronizada 100% pura — zero aditivos ou misturas",
    "3g por dose com cerca de 100 porções por pote — mais de 3 meses de uso",
    "Aumenta os estoques de fosfocreatina para mais energia nos treinos",
    "Melhora força, potência e explosão muscular em exercícios de alta intensidade",
    "Acelera a recuperação muscular entre sessões de treino",
    "Contribui para o ganho de volume e massa muscular magra",
    "Alta solubilidade — dissolve facilmente sem resíduos",
    "Sem glúten — fórmula limpa certificada pela ANVISA",
    "Mais de 50 mil vendidos — 3º em Suplementos FTW no Mercado Livre",
  ],
  howToUse: "Diluir ½ medida dosadora (3g) em 200ml de água ou bebida de preferência. Consumir uma vez ao dia, preferencialmente após o treino. Nos dias sem treino, manter o consumo diário para saturar os estoques musculares. Após aberto, consumir em até 100 dias. Conservar ao abrigo da luz, calor e umidade. Indicado para maiores de 19 anos.",
  ingredients: "Creatina Monohidratada Micronizada 100% pura. Não contém glúten. Dispensado de registro conforme RDC nº 240/2018. Porção: 3g (½ medida dosadora). Rendimento: cerca de 100 porções.",
  whoShouldUse: "Indicado para adultos acima de 19 anos praticantes de musculação, crossfit, esportes de força e qualquer modalidade de alta intensidade que buscam mais força, potência e recuperação muscular. Não indicado para gestantes, lactantes e crianças.",
  faq: [
    {
      question: "A creatina FTW é 100% pura ou tem mistura?",
      answer: "É 100% creatina monohidratada micronizada, sem adição de outros ingredientes, corantes, aromatizantes ou misturas. Fórmula completamente limpa e transparente."
    },
    {
      question: "Quantas doses tem o pote de 300g?",
      answer: "Com a dose recomendada de 3g por dia (½ medida dosadora), o pote rende cerca de 100 porções — o equivalente a mais de 3 meses de suplementação diária contínua."
    },
    {
      question: "Preciso fazer fase de saturação com a creatina FTW?",
      answer: "Não é obrigatório. A fase de saturação (doses maiores por 5 a 7 dias) acelera os resultados iniciais, mas o uso contínuo de 3g por dia atinge o mesmo nível de saturação muscular em 3 a 4 semanas. Ambas as estratégias são válidas."
    },
    {
      question: "Devo tomar creatina nos dias sem treino?",
      answer: "Sim. A creatina age por efeito acumulativo nos músculos. Manter o consumo diário — inclusive nos dias de descanso — garante que os estoques musculares de fosfocreatina permaneçam saturados, maximizando o desempenho nos treinos seguintes."
    },
    {
      question: "A creatina FTW dissolve bem na água?",
      answer: "Sim. Por ser micronizada, as partículas são menores e se dissolvem com muito mais facilidade em água ou qualquer bebida, sem deixar resíduos no fundo do copo."
    },
    {
      question: "Após aberto, quanto tempo posso usar o pote?",
      answer: "Após a abertura, a FTW recomenda consumir o produto em até 100 dias. Mantenha o pote fechado e armazenado em local fresco, seco e ao abrigo da luz e do calor para preservar a qualidade."
    },
    {
      question: "A creatina FTW é registrada na ANVISA?",
      answer: "O produto é dispensado de registro conforme a Resolução RDC nº 240/2018 da ANVISA, o que é totalmente regular para suplementos alimentares nessa categoria no Brasil. As alegações seguem o Anexo V da IN 28 da ANVISA."
    },
  ],
},
]

// ============================================================
// BANNERS DO HERO - 🖼️ COLOQUE AQUI AS IMAGENS DOS BANNERS
// ============================================================

export const heroBanners = [
  {
    id: 1,
    title: "Suplementos com Melhor Preço do Brasil",
    subtitle: "Compare preços e encontre as melhores ofertas de whey protein, creatina e muito mais",
    cta: "Ver Ofertas",
    link: "/categoria/whey-protein",
    image: "/images/banners/banner-suplementos.jpg",
    bgColor: "from-orange-500 via-red-500 to-pink-600",
  },
  {
    id: 2,
    title: "Creatina: O Suplemento Mais Comprovado",
    subtitle: "Aumente força e massa muscular com o suplemento #1 em eficácia científica",
    cta: "Descobrir",
    link: "/categoria/creatina",
    image: "/images/banners/creatina-barata.jpg",
    bgColor: "from-blue-600 via-sky-500 to-cyan-500",
  },
  {
  id: 3,
  title: "Blog de Suplementos",
  subtitle: "Guias completos, reviews e tudo que você precisa saber antes de comprar",
  cta: "Ler Agora",
  link: "/blog",
  image: "/images/banners/whey-gourmet-pamonha.webp",
  bgColor: "from-green-600 via-emerald-500 to-teal-600",
},
  {
    id: 4,
    title: "Pré-Treino para Treinos Explosivos",
    subtitle: "Energia, foco e resistência para ir além dos seus limites",
    cta: "Ver Pré-Treinos",
    link: "/categoria/pre-treino",
    image: "/images/banners/banner-teste.png", // 🖼️ Substitua pela sua imagem
    bgColor: "from-red-600 via-orange-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Hipercalórico para Ganho de Massa",
    subtitle: "Para quem tem dificuldade de ganhar peso e quer resultados reais",
    cta: "Ver Hipercalóricos",
    link: "/categoria/hipercaloricos",
    image: "/images/banners/hipercaloricos.jpg", // 🖼️ Substitua pela sua imagem
    bgColor: "from-purple-600 via-violet-500 to-indigo-500",
  },
  {
    id: 6,
    title: "Vitaminas e Minerais para sua Saúde",
    subtitle: "Cuide do seu corpo por dentro com os melhores multivitamínicos",
    cta: "Ver Vitaminas",
    link: "/categoria/vitaminas-e-minerais",
    image: "/images/banners/banner.1.jpg", // 🖼️ Substitua pela sua imagem
    bgColor: "from-teal-600 via-green-500 to-lime-500",
  },
]

// ============================================================
// BANNERS DUPLOS - 🖼️ COLOQUE AQUI AS IMAGENS DOS BANNERS
// ============================================================

export const doubleBanners = [
  {
    id: 1,
    title: "Linha Fitness Feminina",
    subtitle: "Suplementos selecionados para mulheres",
    cta: "Ver produtos",
    link: "/categoria/colageno",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
  },
  {
    id: 2,
    title: "Kits e Combos Promocionais",
    subtitle: "Compre mais e economize mais",
    cta: "Ver combos",
    link: "/categoria/whey-protein",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
]

// ============================================================
// ITENS DA PITCHBAR
// ============================================================

export const pitchbarItems = [
  { icon: "shield", title: "Produtos Originais", subtitle: "100% autênticos" },
  { icon: "tag", title: "Melhores Preços", subtitle: "Compare e economize" },
  { icon: "star", title: "Avaliações Reais", subtitle: "Reviews de clientes" },
  { icon: "truck", title: "Entrega Rápida", subtitle: "Para todo Brasil" },
  { icon: "info", title: "Guia Completo", subtitle: "Informações que importam" },
]

// ============================================================
// CONFIGURAÇÃO DO SITE
// ============================================================

export const siteConfig = {
  name: "Suplex Suplementos",
  url: "https://suplexsuplementos.com.br",
  description: "Guia completo de suplementos alimentares no Brasil. Reviews, comparações e melhores preços de whey protein, creatina, pré-treino e muito mais.",
  keywords: "suplementos, whey protein, creatina, pré-treino, BCAA, colágeno, hipercalórico, multivitamínico, termogênico, suplementos alimentares, melhor suplemento, review suplementos",
  author: "Suplex Suplementos",
  email: "falcao_21@msn.com",
  address: "São Paulo, SP",
  social: {
    instagram: "https://instagram.com/suplexsuplementos",
    facebook: "https://facebook.com/suplexsuplementos",
    youtube: "https://youtube.com/suplexsuplementos",
    twitter: "https://twitter.com/suplexsup",
  },
}

// ============================================================
// DEPOIMENTOS
// ============================================================

export const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Praticante de musculação há 5 anos",
    rating: 5,
    text: "Encontrei aqui as melhores ofertas de whey protein que já vi. As reviews me ajudaram muito a escolher o produto certo para meu objetivo. Recomendo demais!",
    avatar: "CE",
  },
  {
    name: "Mariana Silva",
    role: "Atleta amadora",
    rating: 5,
    text: "O guia de creatina é completo e direto ao ponto. Economizei muito comparando preços aqui. Já é meu site de referência para suplementos!",
    avatar: "MS",
  },
  {
    name: "Rafael Mendes",
    role: "Fisiculturista",
    rating: 5,
    text: "As informações sobre cada suplemento são riquíssimas. Aprendi coisas que não sabia sobre pré-treino e BCAA. Site essencial para quem treina sério.",
    avatar: "RM",
  },
]

// ============================================================
// ESTATÍSTICAS
// ============================================================

export const stats = [
  { icon: "users", value: "500K+", label: "Visitantes mensais" },
  { icon: "trending", value: "200+", label: "Produtos analisados" },
  { icon: "award", value: "8+", label: "Anos de experiência" },
  { icon: "clock", value: "24h", label: "Atualizações diárias" },
]

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getRelatedProducts(product: Product, limit: number = 6): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}