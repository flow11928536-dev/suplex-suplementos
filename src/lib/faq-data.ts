// ============================================================
// DADOS DO FAQ - PERGUNTAS FREQUENTES SOBRE SUPLEMENTOS
// ============================================================

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqCategories = [
  "Whey Protein",
  "Creatina",
  "Pré-Treino",
  "Geral",
]

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "O que é whey protein e para que serve?",
    answer: "Whey Protein é a proteína extraída do soro do leite. É o suplemento mais popular do mundo para ganho de massa muscular. Serve para aumentar a ingestão de proteína, acelerar a recuperação muscular, promover hipertrofia e complementar a dieta. É recomendado para atletas, praticantes de musculação e pessoas que precisam de mais proteína na dieta.",
    category: "Whey Protein",
  },
  {
    id: "2",
    question: "Qual a diferença entre whey concentrado, isolado e hidrolisado?",
    answer: "Whey Concentrado: contém 70-80% de proteína, com pequenas quantidades de lactose e gordura. É o mais comum e acessível. Whey Isolado: passa por filtragem que remove gorduras e lactose, resultando em 90%+ de proteína pura. Ideal para intolerantes à lactose. Whey Hidrolisado: as proteínas são pré-digeridas em peptídeos menores, permitindo absorção quase instantânea. É o mais avançado e caro.",
    category: "Whey Protein",
  },
  {
    id: "3",
    question: "Whey protein engorda?",
    answer: "Não. O whey protein por si só não engorda. O ganho de peso depende do balanço calórico total da dieta. Se você consome mais calorias do que gasta, vai ganhar peso - independente da fonte. O whey protein pode ser usado tanto para ganho de massa (em superávit calórico) quanto para emagrecimento (em déficit calórico), pois preserva a massa magra.",
    category: "Whey Protein",
  },
  {
    id: "4",
    question: "Posso tomar whey protein sem treinar?",
    answer: "Pode, mas os resultados em hipertrofia serão limitados sem o estímulo do treino. O whey protein é apenas uma fonte conveniente de proteína. Se você não treina, a proteína ainda será usada para manutenção do corpo, mas não haverá ganho de massa muscular significativo. Para quem não treina, é melhor focar em obter proteína da alimentação.",
    category: "Whey Protein",
  },
  {
    id: "5",
    question: "Creatina engorda ou retém líquido?",
    answer: "A creatina pode causar retenção de água INTRAMUSCULAR (dentro das células musculares), o que aumenta o peso na balança, mas NÃO é gordura. Essa retenção é benéfica - deixa os músculos mais cheios e hidratados, além de melhorar o desempenho. A creatina não aumenta a gordura corporal.",
    category: "Creatina",
  },
  {
    id: "6",
    question: "Creatina precisa de fase de saturação?",
    answer: "Não é obrigatório. A fase de saturação (20g/dia por 5-7 dias) acelera a saturação dos músculos, trazendo resultados mais rápidos. Mas tomar 3-5g por dia continuamente também funciona, apenas leva 3-4 semanas para atingir a saturação total. A escolha depende da sua pressa em ver resultados.",
    category: "Creatina",
  },
  {
    id: "7",
    question: "Posso tomar creatina todos os dias?",
    answer: "Sim. A creatina é segura para uso contínuo e não precisa de pausas. Mais de 500 estudos científicos confirmam sua segurança a longo prazo. A dose recomendada é de 3-5g por dia, podendo ser tomada a qualquer hora do dia.",
    category: "Creatina",
  },
  {
    id: "8",
    question: "Pré-treino vicia?",
    answer: "O principal ingrediente do pré-treino, a cafeína, pode causar tolerância com o uso contínuo. Isso significa que você pode precisar de doses maiores para sentir o mesmo efeito. Para evitar, recomenda-se ciclar o uso: 5 dias sim, 2 dias não. Ou fazer pausas de 1-2 semanas a cada 8-12 semanas de uso.",
    category: "Pré-Treino",
  },
  {
    id: "9",
    question: "O formigamento do pré-treino é normal?",
    answer: "Sim, é perfeitamente normal e inofensivo. O formigamento (parestesia) é causado pela beta-alanina, um ingrediente comum em pré-treinos. É uma reação temporária que passa em alguns minutos e não causa nenhum dano. Se incomoda muito, prefira pré-treinos sem beta-alanina.",
    category: "Pré-Treino",
  },
  {
    id: "10",
    question: "Quanto tempo levar para ver resultados com suplementos?",
    answer: "Depende do suplemento e do seu treino/dieta. Creatina: resultados em 1-2 semanas (força) e 4 semanas (massa). Whey Protein: resultados em 4-8 semanas com treino adequado. Pré-treino: efeito imediato (energia). Colágeno: 4-12 semanas. Lembre-se: suplementos são complementos - o treino e a dieta são a base.",
    category: "Geral",
  },
  {
    id: "11",
    question: "Posso tomar mais de um suplemento ao mesmo tempo?",
    answer: "Sim, a maioria dos suplementos pode ser combinada sem problemas. Combinações populares: Whey + Creatina, Pré-treino + BCAA, Whey + Colágeno. No entanto, evite combinar fontes de cafeína (pré-treino + termogênico). Se toma medicação, consulte um médico antes de usar qualquer suplemento.",
    category: "Geral",
  },
  {
    id: "12",
    question: "Qual o melhor horário para tomar whey protein?",
    answer: "Os horários mais populares são: pós-treino (30 minutos após, quando os músculos estão mais receptivos), manhã (para quebrar o jejum noturno) e antes de dormir (para evitar catabolismo noturno). O mais importante é atingir a quantidade total de proteína do dia - o horário tem um impacto menor.",
    category: "Whey Protein",
  },
  {
    id: "13",
    question: "Suplementos têm efeitos colaterais?",
    answer: "A maioria dos suplementos é segura quando usada nas doses recomendadas. Efeitos colaterais possíveis: Whey - desconforto gastrointestinal em intolerantes à lactose. Creatina - retenção de água. Pré-treino - insônia, ansiedade (pela cafeína). Sempre comece com doses menores para avaliar sua tolerância.",
    category: "Geral",
  },
  {
    id: "14",
    question: "Como escolher o suplemento ideal para meu objetivo?",
    answer: "Para ganho de massa: Whey Protein + Creatina + Hipercalórico. Para emagrecimento: Whey Protein Isolado + Termogênico. Para definição: Whey Protein + BCAA + Pré-treino. Para saúde geral: Multivitamínico + Ômega 3 + Colágeno. Para performance: Creatina + Pré-treino + BCAA.",
    category: "Geral",
  },
  {
    id: "15",
    question: "Existe whey protein sem lactose?",
    answer: "Sim. O Whey Protein Isolado passa por um processo de filtragem que remove praticamente 100% da lactose. Também existem wheys veganos (de ervilha, arroz, soja) que naturalmente não contêm lactose. Para pessoas com intolerância severa, o whey isolado ou vegano são as melhores opções.",
    category: "Whey Protein",
  },
  {
    id: "16",
    question: "Gestantes podem tomar suplementos?",
    answer: "Gestantes devem SEMPRE consultar um médico antes de usar qualquer suplemento. Alguns suplementos são seguros durante a gravidez (como ácido fólico, ferro e ômega 3), enquanto outros devem ser evitados (como termogênicos e pré-treinos). Nunca se automedique durante a gravidez.",
    category: "Geral",
  },
]
