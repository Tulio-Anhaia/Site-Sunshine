// =============================================================================
// FONTE ÚNICA DE DADOS — SUNSHINE DESENVOLVIMENTO ESPORTIVO
// Todas as informações abaixo vieram do briefing oficial fornecido.
// Campos marcados com [INFORMAÇÃO PENDENTE] NÃO devem ser preenchidos
// com dados inventados. Edite este arquivo quando os dados oficiais
// chegarem — todas as páginas do site consomem estes dados.
// =============================================================================

export const company = {
  legalName: "Sunshine Desenvolvimento Esportivo LTDA",
  tradeName: "Sunshine Esportes",
  cnpj: "13.951.159/0001-33",
  cnpjStatus: "Ativa",
  foundedAt: "2011-07-13",
  address: {
    street: "Avenida Washington Luiz, 310, 10º andar, Sala 107",
    neighborhood: "Jardim Emilia",
    city: "Sorocaba",
    state: "SP",
    zip: "18031-000",
  },
  responsible: {
    name: "Gisele Sikorski",
    role: "Diretora Executiva",
  },
  contact: {
    // Número confirmado por Túlio (29/08/2026) para uso no botão do site.
    whatsappPrimary: "(15) 99162-2682",
    whatsappPrimaryDigits: "5515991622682",
    whatsappSecondary: "(15) 99107-6330",
    whatsappSecondaryDigits: "5515991076330",
    phone: "(15) 99107-6330",
    emailCommercial: "sunshineeventos26@gmail.com",
    emailInstitutional: null, // [INFORMAÇÃO PENDENTE]
    emailFinance: null, // [INFORMAÇÃO PENDENTE]
    emailSupport: null, // [INFORMAÇÃO PENDENTE]
    emailPrivacy: null, // [INFORMAÇÃO PENDENTE]
  },
  social: {
    instagram: null, // [INSERIR REDE SOCIAL]
    facebook: null, // [INSERIR REDE SOCIAL]
    youtube: null, // [INSERIR REDE SOCIAL]
  },
  mission:
    "Conceber e executar eventos esportivos, sociais e familiares com excelência operacional, segurança, inovação e impacto positivo para participantes, parceiros e comunidades.",
  vision:
    "Consolidar-se como uma das empresas mais respeitadas na organização de eventos esportivos no estado de São Paulo.",
  purpose:
    "Utilizar o esporte como ferramenta de integração familiar, promoção da saúde, inclusão social e combate ao sedentarismo.",
  values: [
    "Segurança",
    "Saúde preventiva",
    "Excelência operacional",
    "Transparência",
    "Responsabilidade social",
    "Inclusão",
    "Inovação",
    "Alegria",
    "Respeito",
    "Compromisso com participantes e parceiros",
  ],
  description:
    "A Sunshine Desenvolvimento Esportivo LTDA é especializada na criação, produção e promoção de eventos esportivos, projetos de mobilidade, ações de saúde preventiva e experiências que integram esporte, família, empresas e comunidade. A empresa atua no planejamento, relacionamento institucional, operação, segurança, comunicação, ativação de marcas e experiência dos participantes.",
};

export type EventStatus = "confirmado" | "data-a-confirmar";

export interface SunshineEvent {
  slug: string;
  name: string;
  status: EventStatus;
  dateLabel: string; // texto amigável, pode conter pendência
  isoDate: string | null; // null quando a data não é definitiva
  city: string;
  venue: string;
  address: string;
  time: string;
  audience: string;
  estimatedParticipants: number;
  modalities: null; // [INFORMAÇÃO PENDENTE]
  distances: null; // [INFORMAÇÃO PENDENTE]
  ageGroups: null; // [INFORMAÇÃO PENDENTE]
  categories: null; // [INFORMAÇÃO PENDENTE]
  registrationLink: null; // [INSERIR LINK DE INSCRIÇÃO]
  rulesPdf: null; // [INSERIR REGULAMENTO EM PDF]
  heroImage: string;
  coverImage: string; // caminho esperado da foto de capa em /public
  pendingItems: string[];
}

export const events: SunshineEvent[] = [
  {
    slug: "sunshine-kids-run",
    name: "Sunshine Kids Run",
    status: "data-a-confirmar",
    dateLabel: "17 ou 18 de outubro de 2026 [CONFIRMAR DATA]",
    isoDate: null,
    city: "Sorocaba/SP",
    venue: "Parque Carlos Alberto de Souza",
    address: "Avenida Domingos Júlio, 78-146, Parque Campolim, Sorocaba/SP",
    time: "8h às 13h",
    audience: "Crianças e famílias",
    estimatedParticipants: 1500,
    modalities: null,
    distances: null,
    ageGroups: null,
    categories: null,
    registrationLink: null,
    rulesPdf: null,
    heroImage: "/images/sunshine-kids-run.webp",
    coverImage: "/images/sunshine-kids-run-capa.webp",
    pendingItems: [
      "Data definitiva (17 ou 18 de outubro)",
      "Conceito oficial do evento",
      "Logo específico e identidade visual",
      "Modalidades, distâncias, faixas etárias e categorias",
      "Percursos e programação",
      "Valores e lotes de inscrição",
      "Kit e medalha",
      "Atividades recreativas",
      "Estrutura de segurança",
      "Espaços para patrocinadores",
      "Fotos e vídeos autorizados",
      "Responsável operacional",
      "Link de inscrição e regulamento em PDF",
    ],
  },
  {
    slug: "sunshine-blessed-run-2026",
    name: "Sunshine Blessed Run 2026",
    status: "confirmado",
    dateLabel: "20 de dezembro de 2026",
    isoDate: "2026-12-20",
    city: "Sorocaba/SP",
    venue: "Parque das Águas",
    address: "Avenida Dom Aguirre, 714, Jardim Maria do Carmo, Sorocaba/SP, CEP 18090-001",
    time: "7h às 12h",
    audience: null as unknown as string, // [INFORMAÇÃO PENDENTE]
    estimatedParticipants: 2000,
    modalities: null,
    distances: null,
    ageGroups: null,
    categories: null,
    registrationLink: null,
    rulesPdf: null,
    heroImage: "/images/sunshine-blessed-run.webp",
    coverImage: "/images/sunshine-blessed-run-capa.webp",
    pendingItems: [
      "Público-alvo",
      "Conceito oficial e significado do nome",
      "Identidade visual e logo",
      "Modalidades, distâncias, faixas etárias e categorias",
      "Percursos e programação",
      "Valores e lotes de inscrição",
      "Kit e medalha",
      "Ações sociais/beneficentes",
      "Parceiros e patrocinadores",
      "Fotos e vídeos",
      "Responsável operacional",
      "Link de inscrição e regulamento em PDF",
    ],
  },
];

export const mascot = {
  name: "Flash",
  animal: "Guepardo",
  traits: [
    "Alegre",
    "Corajoso",
    "Energético",
    "Inspirador",
    "Carismático",
    "Saudável",
    "Motivador",
  ],
  role:
    "Incentivar crianças e famílias a correr, brincar, movimentar-se e adotar hábitos mais saudáveis.",
  linkedEventSlug: "sunshine-kids-run",
  pendingItems: [
    "[INSERIR ILUSTRAÇÃO OFICIAL DO FLASH]",
    "[INSERIR HISTÓRIA OFICIAL]",
    "[INSERIR FRASE OFICIAL]",
    "[CONFIRMAR DIREITOS DE USO]",
  ],
};

export interface ServiceGroup {
  slug: string;
  title: string;
  items: string[];
}

export const services: ServiceGroup[] = [
  {
    slug: "corridas-de-rua",
    title: "Organização de corridas de rua",
    items: [
      "Planejamento",
      "Licenciamento",
      "Percursos",
      "Segurança",
      "Estrutura",
      "Cronometragem",
      "Kits",
      "Comunicação",
      "Operação",
      "Premiação",
    ],
  },
  {
    slug: "caminhadas-passeios-ciclisticos",
    title: "Caminhadas e passeios ciclísticos",
    items: [
      "Eventos comunitários",
      "Passeios recreativos",
      "Campanhas de mobilidade",
      "Ações solidárias",
      "Controle operacional",
    ],
  },
  {
    slug: "eventos-esportivos-infantis",
    title: "Eventos esportivos infantis",
    items: [
      "Baterias infantis",
      "Arenas recreativas",
      "Obstáculos lúdicos",
      "Atividades para famílias",
      "Participação do Flash",
      "Estruturas adequadas para crianças",
    ],
  },
  {
    slug: "projetos-esportivos-mobilidade",
    title: "Projetos esportivos e de mobilidade",
    items: [
      "Educação para o trânsito",
      "Uso da bicicleta",
      "Mobilidade urbana",
      "Projetos educacionais",
      "Campanhas de saúde",
      "Ações com instituições e órgãos públicos",
    ],
  },
  {
    slug: "ativacao-de-marcas",
    title: "Ativação de marcas",
    items: [
      "Lounges",
      "Backdrops",
      "Sampling",
      "Experiências interativas",
      "Captação de leads",
      "Conteúdo para redes sociais",
      "Ações de relacionamento",
    ],
  },
];

export interface SponsorTier {
  slug: string;
  name: string;
  priceLabel: string;
  slots: number;
}

export const sponsorTiers: SponsorTier[] = [
  // Valores preliminares ocultados a pedido do Túlio (28/08/2026).
  // Para reexibir os valores no site, basta trocar priceLabel de volta,
  // ex: "R$ 50.000 (valor preliminar)".
  { slug: "master", name: "Cota Master", priceLabel: "Sob consulta", slots: 2 },
  { slug: "premium", name: "Cota Premium", priceLabel: "Sob consulta", slots: 6 },
  { slug: "apoiador", name: "Cota Apoiador", priceLabel: "Sob consulta", slots: 6 },
];

// Eventos realizados — estrutura preparada, aguardando validação/autorização
// de divulgação. NÃO exibir números, fotos ou resultados até confirmação.
export interface PastEvent {
  name: string;
  year: null;
  venue: null;
  sunshineRole: null;
  description: null;
  participants: null;
  authorizedForDisclosure: false;
}

export const pastEventsPlaceholder: PastEvent[] = [
  { name: "Festival de Aquatlo no Sesc Sorocaba", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
  { name: "1º Desafio Marathon de MTB", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
  { name: "Circuito Tem Running", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
  { name: "Megapasseio Ciclístico Solidário de Natal", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
  { name: "Corrida Pink do Bem OSSEL Assistência", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
  { name: "Corrida APAE Ofebas Run", year: null, venue: null, sunshineRole: null, description: null, participants: null, authorizedForDisclosure: false },
];

export const siteUrl = "https://sunshineesportes.com.br";
