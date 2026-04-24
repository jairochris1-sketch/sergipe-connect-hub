import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import type { Listing } from "@/data/mock";

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <Link
      to={`/loja/${listing.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={listing.image}
          alt={listing.name}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {listing.featured && (
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground shadow-glow">
              ★ Em destaque
            </span>
          )}
        </div>
        {listing.isStore && (
          <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur">
            Loja
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
          {listing.category}
        </div>
        <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug">
          {listing.description}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {listing.city}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {listing.rating.toFixed(1)} · {listing.reviews}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
