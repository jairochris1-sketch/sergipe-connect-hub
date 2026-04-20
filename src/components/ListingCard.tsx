import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import type { Listing } from "@/data/mock";
import { getCategory } from "@/data/mock";

type Props = { listing: Listing; compact?: boolean };

const ListingCard = ({ listing, compact }: Props) => {
  const cat = getCategory(listing.categorySlug);
  return (
    <Link
      to={`/anuncio/${listing.id}`}
      className="group block overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className={`relative overflow-hidden ${compact ? 'aspect-[4/3]' : 'aspect-[5/4]'} bg-muted`}>
        <img
          src={listing.images[0]}
          alt={listing.serviceName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {listing.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
            <Star className="h-3 w-3 fill-current" /> Destaque
          </span>
        )}
        {listing.store && (
          <span className="absolute right-3 top-3 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
            Loja
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{cat?.name}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
          {listing.serviceName}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{listing.providerName}</p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {listing.city}
          </span>
          <span className="font-medium text-foreground">{listing.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
