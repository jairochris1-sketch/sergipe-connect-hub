import heroCity from "@/assets/hero-city.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import heroPros from "@/assets/hero-pros.jpg";

export type HeroSlide = {
  image: string;
  lead: string;
  highlight: string;
};

export const defaultSlides: HeroSlide[] = [
  {
    image: heroCity,
    lead: "Pare de perder tempo procurando! No Conectado em Sergipe você encontra,",
    highlight: "em segundos.",
  },
  {
    image: heroBeach,
    lead: "Encontre serviços perto de você",
    highlight: "sem complicação.",
  },
  {
    image: heroPros,
    lead: "Com o Conectado em Sergipe, você conecta rapidamente com",
    highlight: "profissionais.",
  },
];

const STORAGE_KEY = "ces_hero_slides";

export const loadSlides = (): HeroSlide[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSlides;
    const parsed = JSON.parse(raw) as HeroSlide[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultSlides;
    return parsed.map((s, i) => ({
      image: s.image || defaultSlides[i]?.image || defaultSlides[0].image,
      lead: s.lead ?? defaultSlides[i]?.lead ?? "",
      highlight: s.highlight ?? defaultSlides[i]?.highlight ?? "",
    }));
  } catch {
    return defaultSlides;
  }
};

export const saveSlides = (slides: HeroSlide[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
  window.dispatchEvent(new Event("ces_hero_slides_updated"));
};

export const resetSlides = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("ces_hero_slides_updated"));
};

export const fileToDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
