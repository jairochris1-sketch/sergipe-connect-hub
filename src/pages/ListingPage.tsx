import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Instagram, MapPin, MessageCircle, Share2, Star, Tag } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListingCard from "@/components/ListingCard";
import { getCategory, getListing, getListingsByCategory } from "@/data/mock";
import { toast } from "@/hooks/use-toast";

const ListingPage = () => {
  const { id = "" } = useParams();
  const listing = getListing(id);
  const [active, setActive] = useState(0);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl font-semibold">Anúncio não encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-accent">Voltar para o início</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const cat = getCategory(listing.categorySlug);
  const related = getListingsByCategory(listing.categorySlug).filter(l => l.id !== listing.id).slice(0, 3);
  const waText = encodeURIComponent(`Olá ${listing.providerName}! Vi seu anúncio "${listing.serviceName}" no Conectado em Sergipe e gostaria de mais informações.`);

  const onShare = async () => {
    const url = window.location.href;
    const text = `${listing.serviceName} — ${listing.providerName} no Conectado em Sergipe`;
    if (navigator.share) {
      try { await navigator.share({ title: text, text, url }); return; } catch {}
    }
    const wa = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`;
    window.open(wa, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container pt-10">
        <Link to={`/categoria/${listing.categorySlug}`} className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> {cat?.name}
        </Link>
      </section>

      <section className="container grid gap-10 py-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-soft">
            <img src={listing.images[active]} alt={listing.serviceName} className="h-full w-full object-cover" />
            {listing.featured && (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                <Star className="h-3.5 w-3.5 fill-current" /> Destaque
              </span>
            )}
          </div>
          {listing.images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-3">
              {listing.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden rounded-xl ring-2 transition-all ${active === i ? 'ring-accent' : 'ring-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{cat?.name}</p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
              {listing.serviceName}
            </h1>
            <p className="mt-2 text-muted-foreground">por <span className="text-foreground font-medium">{listing.providerName}</span></p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{listing.city}</span>
              <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4" />{listing.price}</span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">{listing.description}</p>

            <div className="mt-7 space-y-3">
              <a
                href={`https://wa.me/${listing.whatsapp}?text=${waText}`}
                target="_blank" rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
              </a>
              <a
                href={`https://instagram.com/${listing.instagram}`}
                target="_blank" rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:border-foreground"
              >
                <Instagram className="h-4 w-4" /> @{listing.instagram}
              </a>
              <button
                onClick={onShare}
                className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-4 w-4" /> Compartilhar
              </button>
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container py-16">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Outros profissionais de {cat?.name}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
};

export default ListingPage;
