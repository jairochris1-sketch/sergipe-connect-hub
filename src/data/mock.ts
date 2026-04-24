import electrician from "@/assets/service-electrician.jpg";
import cake from "@/assets/service-cake.jpg";
import painter from "@/assets/service-painter.jpg";
import cleaner from "@/assets/service-cleaner.jpg";
import barber from "@/assets/service-barber.jpg";
import plumber from "@/assets/service-plumber.jpg";
import photographer from "@/assets/service-photographer.jpg";

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  count: number;
};

export const categories: Category[] = [
  { slug: "eletricista", name: "Eletricista", emoji: "⚡", count: 32 },
  { slug: "encanador", name: "Encanador", emoji: "🔧", count: 21 },
  { slug: "pedreiro", name: "Pedreiro", emoji: "👷", count: 18 },
  { slug: "pintor", name: "Pintor", emoji: "🎨", count: 14 },
  { slug: "diarista", name: "Diarista", emoji: "🧹", count: 27 },
  { slug: "cabeleireiro", name: "Cabeleireiro", emoji: "💇", count: 22 },
  { slug: "fotografia", name: "Fotografia", emoji: "📸", count: 9 },
  { slug: "confeitaria", name: "Confeitaria", emoji: "🎂", count: 16 },
  { slug: "mecanico", name: "Mecânico", emoji: "🔩", count: 12 },
  { slug: "frete", name: "Frete e Mudança", emoji: "🚚", count: 8 },
];

export const cities = [
  "Aracaju", "Nossa Senhora do Socorro", "São Cristóvão", "Lagarto",
  "Itabaiana", "Estância", "Tobias Barreto", "Simão Dias", "Propriá",
  "Capela", "Barra dos Coqueiros", "Laranjeiras",
];

export type Listing = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  city: string;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
  isStore?: boolean;
  whatsapp?: string;
  instagram?: string;
  price?: string;
};

export const listings: Listing[] = [
  {
    slug: "eletro-aju",
    name: "Eletro Aju",
    category: "Eletricista",
    categorySlug: "eletricista",
    description: "Instalações elétricas residenciais e comerciais",
    city: "Aracaju",
    rating: 4.9,
    reviews: 128,
    image: electrician,
    featured: true,
    isStore: true,
    whatsapp: "5579999990001",
    instagram: "eletroaju",
    price: "Orçamento sob consulta",
  },
  {
    slug: "doces-da-lu",
    name: "Doces da Lu",
    category: "Confeitaria",
    categorySlug: "confeitaria",
    description: "Bolos artesanais e doces finos para qualquer ocasião",
    city: "Aracaju",
    rating: 5.0,
    reviews: 214,
    image: cake,
    featured: true,
    isStore: true,
    whatsapp: "5579999990002",
    instagram: "docesdalu",
    price: "A partir de R$ 80",
  },
  {
    slug: "pintura-do-cesar",
    name: "Pintura do César",
    category: "Pintor",
    categorySlug: "pintor",
    description: "Pintura residencial e comercial com acabamento impecável",
    city: "Nossa Senhora do Socorro",
    rating: 4.8,
    reviews: 76,
    image: painter,
    isStore: true,
    whatsapp: "5579999990003",
    price: "R$ 25/m²",
  },
  {
    slug: "diarista-marta",
    name: "Marta Diarista",
    category: "Diarista",
    categorySlug: "diarista",
    description: "Diarista experiente, organização e limpeza profunda",
    city: "Aracaju",
    rating: 4.9,
    reviews: 92,
    image: cleaner,
    whatsapp: "5579999990004",
    price: "R$ 150/diária",
  },
  {
    slug: "studio-tata",
    name: "Studio Tata",
    category: "Cabeleireiro",
    categorySlug: "cabeleireiro",
    description: "Corte feminino e coloração",
    city: "Aracaju",
    rating: 4.7,
    reviews: 145,
    image: barber,
    isStore: true,
    whatsapp: "5579999990005",
    instagram: "studiotata",
  },
  {
    slug: "encanador-pedro",
    name: "Pedro Encanador",
    category: "Encanador",
    categorySlug: "encanador",
    description: "Conserto de torneiras e vazamentos",
    city: "São Cristóvão",
    rating: 4.8,
    reviews: 64,
    image: plumber,
    whatsapp: "5579999990006",
    price: "Visita R$ 60",
  },
  {
    slug: "lente-livre",
    name: "Lente Livre",
    category: "Fotografia",
    categorySlug: "fotografia",
    description: "Ensaios externos, casamentos e eventos",
    city: "Aracaju",
    rating: 4.9,
    reviews: 58,
    image: photographer,
    isStore: true,
    whatsapp: "5579999990007",
    instagram: "lentelivre",
    price: "Pacotes a partir de R$ 350",
  },
];

export const stats = {
  providers: "+250",
  categories: 20,
  cities: 75,
};
