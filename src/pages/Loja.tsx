import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Instagram, MapPin, MessageCircle, Share2, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { listings } from "@/data/mock";

const Loja = () => {
  const { slug } = useParams();
  const listing = listings.find((l) => l.slug === slug);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Anúncio não encontrado</h1>
          <Button asChild variant="outline" className="mt-4 rounded-full">
            <Link to="/buscar">Voltar para a busca</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(
    `Olá ${listing.name}, vi seu anúncio no Conectado em Sergipe!`
  )}`;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(
    `Confere esse prestador: ${listing.name} - ${listing.description} ${shareUrl}`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <Link
          to="/buscar"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
      </div>

      <section className="container grid gap-10 pb-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={listing.image}
              alt={listing.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={listing.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {listing.category}
            </span>
            {listing.featured && (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase text-accent-foreground">
                ★ Em destaque
              </span>
            )}
            {listing.isStore && (
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase">
                Loja Pro
              </span>
            )}
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {listing.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{listing.description}</p>

          <div className="mt-5 flex items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {listing.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <strong>{listing.rating.toFixed(1)}</strong>
              <span className="text-muted-foreground">({listing.reviews})</span>
            </span>
          </div>

          {listing.price && (
            <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Valores
              </div>
              <div className="mt-1 text-lg font-semibold">{listing.price}</div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3">
            <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground shadow-glow hover:bg-secondary/90">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-5 w-5" /> Chamar no WhatsApp
              </a>
            </Button>
            <div className="grid grid-cols-2 gap-3">
              {listing.instagram && (
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={`https://instagram.com/${listing.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="mr-1 h-4 w-4" /> @{listing.instagram}
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" className="rounded-full">
                <a href={shareWhatsApp} target="_blank" rel="noreferrer">
                  <Share2 className="mr-1 h-4 w-4" /> Compartilhar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loja;
