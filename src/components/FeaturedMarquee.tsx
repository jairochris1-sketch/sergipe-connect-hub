import { Link } from "react-router-dom";
import { Sparkles, Star, MapPin } from "lucide-react";
import { listings } from "@/data/mock";

const FeaturedMarquee = () => {
  const items = listings.filter((l) => l.featured).length >= 4
    ? listings.filter((l) => l.featured)
    : listings.slice(0, 8);
  // duplicate for seamless loop
  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10 py-8">
      <div className="container mb-5 flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Destaques em movimento
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
            Vitrine de profissionais em alta
          </h2>
        </div>
        <Link to="/buscar" className="hidden text-sm font-medium text-primary hover:underline md:inline">
          Ver todos →
        </Link>
      </div>

      <div className="group relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <Link
              key={`${l.slug}-${i}`}
              to={`/loja/${l.slug}`}
              className="flex w-72 shrink-0 gap-3 rounded-2xl border border-border/60 bg-card p-3 shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
            >
              <img
                src={l.image}
                alt={l.name}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {l.category}
                </div>
                <div className="truncate text-sm font-semibold">{l.name}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {l.city}
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs font-medium">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {l.rating} · {l.reviews}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMarquee;
