import {
  Wrench, Zap, Hammer, Paintbrush, Sparkles, Scissors, Camera, Cake,
  Car, Truck, Laptop, Wifi, Dog, Flower2, GraduationCap, Music,
  Utensils, Shirt, Baby, Heart, type LucideIcon
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  icon: LucideIcon;
  count: number;
};

export const categories: Category[] = [
  { slug: "eletricista",   name: "Eletricista",        icon: Zap,           count: 24 },
  { slug: "encanador",     name: "Encanador",          icon: Wrench,        count: 18 },
  { slug: "pedreiro",      name: "Pedreiro",           icon: Hammer,        count: 31 },
  { slug: "pintor",        name: "Pintor",             icon: Paintbrush,    count: 14 },
  { slug: "diarista",      name: "Diarista",           icon: Sparkles,      count: 27 },
  { slug: "cabeleireiro",  name: "Cabeleireiro",       icon: Scissors,      count: 22 },
  { slug: "fotografia",    name: "Fotografia",         icon: Camera,        count: 9  },
  { slug: "confeitaria",   name: "Confeitaria",        icon: Cake,          count: 16 },
  { slug: "mecanico",      name: "Mecânico",           icon: Car,           count: 12 },
  { slug: "frete",         name: "Frete e Mudança",    icon: Truck,         count: 11 },
  { slug: "informatica",   name: "Informática",        icon: Laptop,        count: 8  },
  { slug: "internet",      name: "Internet e Redes",   icon: Wifi,          count: 6  },
  { slug: "pet",           name: "Pet & Banho",        icon: Dog,           count: 10 },
  { slug: "jardinagem",    name: "Jardinagem",         icon: Flower2,       count: 7  },
  { slug: "aulas",         name: "Aulas Particulares", icon: GraduationCap, count: 13 },
  { slug: "musica",        name: "Música & DJ",        icon: Music,         count: 5  },
  { slug: "buffet",        name: "Buffet & Eventos",   icon: Utensils,      count: 9  },
  { slug: "costura",       name: "Costura",            icon: Shirt,         count: 6  },
  { slug: "babysitter",    name: "Babá & Cuidadores",  icon: Baby,          count: 8  },
  { slug: "saude",         name: "Saúde & Bem-estar",  icon: Heart,         count: 11 },
];

export type Listing = {
  id: string;
  serviceName: string;
  providerName: string;
  categorySlug: string;
  description: string; // up to 100 chars
  whatsapp: string;    // E.164 like 5579999990000
  instagram: string;   // handle without @
  price: string;
  city: string;
  images: string[];    // up to 5
  featured?: boolean;
  store?: boolean;
};

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const listings: Listing[] = [
  {
    id: "1",
    serviceName: "Instalações elétricas residenciais",
    providerName: "João Eletricista",
    categorySlug: "eletricista",
    description: "Instalação de tomadas, chuveiros, disjuntores e correções. Atendimento em toda Aracaju.",
    whatsapp: "5579999990001",
    instagram: "joao.eletricista.se",
    price: "A partir de R$ 80",
    city: "Aracaju",
    images: [u("1558618666-fcd25c85cd64"), u("1581094288338-2314dddb7ece"), u("1621905251918-48416bd8575a")],
    featured: true,
    store: true,
  },
  {
    id: "2",
    serviceName: "Bolos artesanais e doces finos",
    providerName: "Confeitaria da Lu",
    categorySlug: "confeitaria",
    description: "Bolos personalizados, brigadeiros gourmet e mesa de doces para eventos especiais.",
    whatsapp: "5579999990002",
    instagram: "confeitaria.dalu",
    price: "Orçamento sob medida",
    city: "Aracaju",
    images: [u("1578985545062-69928b1d9587"), u("1535141192574-5d4897c12636"), u("1486427944299-d1955d23e34d")],
    featured: true,
    store: true,
  },
  {
    id: "3",
    serviceName: "Pintura residencial e comercial",
    providerName: "Carlos Pinturas",
    categorySlug: "pintor",
    description: "Pintura interna e externa, textura e grafiato. Material incluso, orçamento gratuito.",
    whatsapp: "5579999990003",
    instagram: "carlos.pinturas",
    price: "R$ 18/m²",
    city: "Nossa Senhora do Socorro",
    images: [u("1562259949-e8e7689d7828"), u("1589939705384-5185137a7f0f")],
    featured: true,
  },
  {
    id: "4",
    serviceName: "Diarista experiente",
    providerName: "Maria Helena",
    categorySlug: "diarista",
    description: "Limpeza pesada, organização e passadoria. Referências em Aracaju e região.",
    whatsapp: "5579999990004",
    instagram: "maria.diarista",
    price: "R$ 150/diária",
    city: "Aracaju",
    images: [u("1581578731548-c64695cc6952"), u("1584622650111-993a426fbf0a")],
    featured: true,
  },
  {
    id: "5",
    serviceName: "Conserto de torneiras e vazamentos",
    providerName: "Pedro Encanador",
    categorySlug: "encanador",
    description: "Detecção de vazamentos, troca de registros e desentupimentos com garantia.",
    whatsapp: "5579999990005",
    instagram: "pedro.encanador",
    price: "A partir de R$ 90",
    city: "Aracaju",
    images: [u("1585704032915-c3400ca199e7"), u("1607472586893-edb57bdc0e39")],
  },
  {
    id: "6",
    serviceName: "Corte feminino e coloração",
    providerName: "Studio Bia",
    categorySlug: "cabeleireiro",
    description: "Corte, escova, coloração e tratamentos capilares em ambiente acolhedor.",
    whatsapp: "5579999990006",
    instagram: "studio.bia.se",
    price: "A partir de R$ 60",
    city: "Aracaju",
    images: [u("1560066984-138dadb4c035"), u("1522337360788-8b13dee7a37e")],
    featured: true,
    store: true,
  },
  {
    id: "7",
    serviceName: "Ensaios fotográficos e eventos",
    providerName: "Lucas Fotografia",
    categorySlug: "fotografia",
    description: "Ensaios externos, gestantes, infantis e cobertura de aniversários em Sergipe.",
    whatsapp: "5579999990007",
    instagram: "lucas.foto.se",
    price: "Pacotes a partir de R$ 350",
    city: "Aracaju",
    images: [u("1542038784456-1ea8e935640e"), u("1554080353-a576cf803bda")],
  },
  {
    id: "8",
    serviceName: "Reformas e pequenos reparos",
    providerName: "Seu Antônio",
    categorySlug: "pedreiro",
    description: "Alvenaria, acabamentos, pisos e revestimentos. 20 anos de experiência.",
    whatsapp: "5579999990008",
    instagram: "antonio.reformas",
    price: "Orçamento na visita",
    city: "Lagarto",
    images: [u("1503387762-592deb58ef4e"), u("1504307651254-35680f356dfd")],
  },
  {
    id: "9",
    serviceName: "Banho & tosa em domicílio",
    providerName: "Pet Mimo",
    categorySlug: "pet",
    description: "Banho, tosa higiênica e hidratação no conforto da sua casa. Produtos hipoalergênicos.",
    whatsapp: "5579999990009",
    instagram: "petmimo.aju",
    price: "A partir de R$ 70",
    city: "Aracaju",
    images: [u("1583337130417-3346a1be7dee"), u("1587300003388-59208cc962cb")],
  },
  {
    id: "10",
    serviceName: "Aulas de reforço — fundamental",
    providerName: "Profª Camila",
    categorySlug: "aulas",
    description: "Reforço em matemática e português para alunos do 1º ao 9º ano. Online ou presencial.",
    whatsapp: "5579999990010",
    instagram: "profa.camila.se",
    price: "R$ 50/hora",
    city: "São Cristóvão",
    images: [u("1497633762265-9d179a990aa6"), u("1503676260728-1c00da094a0b")],
  },
];

export const getCategory = (slug: string) => categories.find(c => c.slug === slug);
export const getListing = (id: string) => listings.find(l => l.id === id);
export const getListingsByCategory = (slug: string) => listings.filter(l => l.categorySlug === slug);
export const featuredListings = listings.filter(l => l.featured);
