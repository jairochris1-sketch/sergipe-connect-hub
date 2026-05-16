import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadSlides, type HeroSlide } from "@/data/heroSlides";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>(() => loadSlides());

  useEffect(() => {
    const refresh = () => setSlides(loadSlides());
    window.addEventListener("ces_hero_slides_updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("ces_hero_slides_updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 60000);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (delta: number) =>
    setIndex((i) => (i + delta + slides.length) % slides.length);

  const current = slides[index] ?? slides[0];

  return (
    <section className="relative h-[640px] w-full overflow-hidden md:h-[680px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />
        </div>
      ))}

      <div className="container relative z-10 flex h-full max-w-6xl flex-col justify-center">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {current.lead}{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {current.highlight}
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          Encontre eletricistas, manicures, pedreiros e muito mais nas 75 cidades
          de Sergipe. Simples, rápido e gratuito.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full shadow-glow">
            <Link to="/buscar">
              Explorar categorias <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/anunciar">Quero anunciar</Link>
          </Button>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/60 bg-background/70 p-2 backdrop-blur transition-smooth hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/60 bg-background/70 p-2 backdrop-blur transition-smooth hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-primary" : "w-2 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
