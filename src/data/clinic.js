/**
 * ============================================================
 * DADOS DA CLÍNICA — Odonto Xaxim
 * Demo personalizado a partir de odontoproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Odonto Xaxim',
  shortName: 'Odonto Xaxim',
  discipline: 'Odontologia',
  established: 2015,

  tagline: 'Odontologia de bairro, com cuidado de verdade',
  shortDescription:
    'Clínica odontológica no Xaxim, Curitiba — equipe multiprofissional, equipamentos renovados e agendamento fácil pelo WhatsApp.',

  hero: {
    kicker: 'Xaxim · Curitiba',
    lines: ['Seu sorriso', 'no coração'],
    lineAccent: 'do Xaxim.',
    lead:
      'Clínica de bairro renovada, com lentes, implantes, clareamento e atendimento próximo. Avaliação e agendamento direto pelo WhatsApp.',
  },

  whatsapp: '5541998780666',
  whatsappDisplay: '(41) 99878-0666',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma avaliação na Odonto Xaxim.',

  phone: '(41) 99878-0666',
  email: 'contato@odontoxaxim.com.br',

  address: {
    street: 'Rua Antônio Rebelatto, 976',
    neighborhood: 'Xaxim',
    city: 'Curitiba',
    state: 'PR',
    zip: '81710-120',
    full: 'Rua Antônio Rebelatto, 976 — Xaxim, Curitiba — PR, 81710-120',
  },

  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: '08:00 — 12:00' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  social: {},

  stats: [
    { value: 5.0, suffix: '', label: 'Avaliação no Google' },
    { value: 3, suffix: '', label: 'Dentistas no time' },
    { value: 98, suffix: '%', label: 'Indicariam a clínica' },
    { value: 1, suffix: '', label: 'Canal direto no WhatsApp' },
  ],

  manifesto:
    'Uma clínica de bairro que renovou equipamentos e mantém o atendimento próximo. Do diagnóstico ao pós, você fala com gente de verdade — sem fila genérica.',

  principles: [
    {
      title: 'Equipe no Xaxim',
      text: 'Várias profissionais no mesmo endereço. Você encontra clínica geral, estética e reabilitação sem precisar cruzar a cidade.',
    },
    {
      title: 'Equipamentos atualizados',
      text: 'Consultórios renovados e protocolos modernos para lentes, implantes e clareamento — com conforto na cadeira.',
    },
    {
      title: 'Plano transparente',
      text: 'Orçamento claro antes de começar. Cada etapa com escopo e valor definidos, sem surpresa no meio do caminho.',
    },
    {
      title: 'WhatsApp sempre perto',
      text: 'Dúvidas, agendamentos e retornos no canal que você já usa. Resposta humana, no ritmo do bairro.',
    },
  ],
}

export const services = [
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Avaliação completa, prevenção e o reparo do que já deu problema.',
    detail:
      'Consulta de entrada com mapa da boca, limpeza, restaurações e orientação de higiene. Base sólida antes de qualquer tratamento estético.',
    topics: ['Avaliação', 'Prevenção', 'Restaurações', 'Limpeza'],
    icon: 'tooth',
  },
  {
    id: 'implantes',
    title: 'Implantes',
    description: 'Reabilitação oral com planejamento cuidadoso e prótese sob medida.',
    detail:
      'Do diagnóstico à coroa definitiva, com etapas claras e acompanhamento próximo. Indicado quando falta um ou mais dentes.',
    topics: ['Cirurgia', 'Prótese', 'Reabilitação'],
    icon: 'implant',
  },
  {
    id: 'estetica',
    title: 'Lentes e facetas',
    description: 'Sorriso redesenhado com naturalidade, a partir do seu rosto.',
    detail:
      'Planejamento estético com mock-up quando indicado. Resultado harmônico, sem exagero de catálogo.',
    topics: ['Lentes', 'Facetas', 'Harmonização'],
    icon: 'smile',
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Protocolo dosado para clarear com conforto.',
    detail:
      'Avaliação de sensibilidade, dose ajustada por sessão e orientação de manutenção em casa.',
    topics: ['Consultório', 'Caseiro', 'Manutenção'],
    icon: 'sparkle',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento com planejamento claro de etapas e prazo.',
    detail:
      'Aparelho fixo ou alinhadores conforme o caso. Você entende o caminho antes de começar.',
    topics: ['Alinhadores', 'Aparelho fixo', 'Contenção'],
    icon: 'braces',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    description: 'Atendimento infantil no ritmo da criança.',
    detail:
      'Ambientação, prevenção e orientação aos pais — para a primeira consulta não virar trauma.',
    topics: ['Ambientação', 'Prevenção', 'Selante'],
    icon: 'child',
  },
]

export const ticker = [
  'Clínica no Xaxim',
  'Implantes',
  'Lentes e facetas',
  'Clareamento',
  'Equipe multiprofissional',
  'WhatsApp direto',
]

export const team = [
  {
    id: 'andressa',
    name: 'Dra. Andressa',
    role: 'Cirurgiã-dentista',
    tag: 'Clínica e estética',
    category: 'clinical',
    photo: null,
    bio: 'Atende no Xaxim com foco em cuidado próximo e planos claros — da prevenção à estética do sorriso.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Clínica Geral', 'Estética', 'Clareamento'],
    funFact: 'Gosta de explicar cada passo antes de começar.',
    showWhatsApp: true,
  },
  {
    id: 'zaira',
    name: 'Dra. Zaíra',
    role: 'Cirurgiã-dentista',
    tag: 'Reabilitação',
    category: 'clinical',
    photo: null,
    bio: 'Parte do time multiprofissional da clínica. Acompanha casos de reabilitação e tratamentos mais longos.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Implantes', 'Prótese', 'Clínica Geral'],
    funFact: 'Prefere planejar em etapas curtas e previsíveis.',
    showWhatsApp: true,
  },
  {
    id: 'priscila',
    name: 'Dra. Priscila',
    role: 'Cirurgiã-dentista',
    tag: 'Atendimento de bairro',
    category: 'admin',
    photo: null,
    bio: 'Atendimento acolhedor no Xaxim, com ênfase em prevenção e acompanhamento familiar.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Clínica Geral', 'Prevenção', 'Odontopediatria'],
    funFact: 'Conhece muitos pacientes pelo primeiro nome.',
    showWhatsApp: true,
  },
  {
    id: 'recepcao',
    name: 'Recepção Odonto Xaxim',
    role: 'Recepção',
    tag: 'Primeiro contato',
    category: 'admin',
    photo: null,
    bio: 'Organiza a agenda e responde o WhatsApp. Se o horário mudar, avisamos antes de você sair de casa.',
    formation: 'Atendimento ao paciente',
    specialties: ['Agendamento', 'Acolhimento', 'Suporte'],
    funFact: 'Sempre confirma o melhor horário pelo WhatsApp.',
    showWhatsApp: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Fernanda S.',
    rating: 5,
    text: 'Clínica limpa, equipamentos novos e atendimento sem pressa. Ficamos no Xaxim e resolvemos tudo sem ir ao centro.',
    treatment: 'Clínica Geral',
    year: '2025',
  },
  {
    id: 2,
    name: 'Ricardo M.',
    rating: 5,
    text: 'Fiz clareamento e o orçamento bateu com o que combinamos no primeiro dia. Equipe atenciosa no WhatsApp.',
    treatment: 'Clareamento',
    year: '2025',
  },
  {
    id: 3,
    name: 'Patrícia L.',
    rating: 5,
    text: 'Levei minha filha com medo e saímos tranquilas. Explicaram tudo e marcaram o retorno pelo mesmo número.',
    treatment: 'Odontopediatria',
    year: '2024',
  },
  {
    id: 4,
    name: 'André C.',
    rating: 5,
    text: 'Avaliação de implante clara, sem enrolação. Gostei de poder tirar dúvida no WhatsApp depois da consulta.',
    treatment: 'Implantes',
    year: '2025',
  },
]
