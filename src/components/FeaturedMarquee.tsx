import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { featuredListings, getCategory } from "@/data/mock";

const FeaturedMarquee = () => {
  const items = [...featuredListings, ...featuredListings]; // duplicated for seamless loop
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track flex gap-5 w-max">
        {items.map((l, i) => {
          const cat = getCategory(l.categorySlug);
          return (
            <Link
              key={`${l.id}-${i}`}
              to={`/anuncio/${l.id}`}
              className="group flex w-[280px] shrink-0 items-center gap-4 rounded-2xl border border-border/70 bg-card p-3 pr-5 transition-all hover:border-accent/40 hover:shadow-soft"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <img src={l.images[0]} alt={l.serviceName} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-accent">
                  <Star className="h-3 w-3 fill-current" /> {cat?.name}
                </span>
                <p className="truncate font-display text-sm font-semibold">{l.serviceName}</p>
                <p className="truncate text-xs text-muted-foreground">{l.providerName}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMarquee;
