import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedMarquee from "@/components/FeaturedMarquee";
import ListingCard from "@/components/ListingCard";
import { featuredListings, listings } from "@/data/mock";

const Index = () => {
  const popular = listings.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="container relative grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28 lg:py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Sergipe · Vitrine local
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              O serviço que você precisa,{" "}
              <span className="italic text-accent">a um toque</span> de distância.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Encontre eletricistas, diaristas, confeiteiros, fotógrafos e muito mais — todos os prestadores reunidos em um só lugar, com contato direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/categorias" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
                Explorar categorias <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/5579999990000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent">
                Quero anunciar
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl font-semibold text-foreground">+250</span> prestadores</div>
              <div className="h-6 w-px bg-border" />
              <div><span className="font-display text-2xl font-semibold text-foreground">20</span> categorias</div>
              <div className="h-6 w-px bg-border" />
              <div><span className="font-display text-2xl font-semibold text-foreground">75</span> cidades</div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -right-6 top-6 aspect-[4/5] w-[78%] overflow-hidden rounded-3xl shadow-lift">
              <img src={featuredListings[1].images[0]} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-[42%] bottom-0 aspect-square w-[55%] overflow-hidden rounded-3xl shadow-lift ring-4 ring-background">
              <img src={featuredListings[0].images[0]} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-2 top-1/2 rounded-2xl bg-card px-4 py-3 shadow-lift">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Mais procurado hoje</p>
              <p className="font-display text-base font-semibold">Eletricistas em Aracaju</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured marquee */}
      <section className="border-y border-border/60 bg-background py-8">
        <div className="container mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Em alta</p>
            <h2 className="font-display text-2xl font-semibold">Mais procurados esta semana</h2>
          </div>
        </div>
        <FeaturedMarquee />
      </section>

      {/* Categories */}
      <section className="container py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Categorias</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Navegue por especialidade
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cada categoria abre uma lista filtrada apenas dos profissionais daquele serviço.
            </p>
          </div>
          <Link to="/categorias" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <CategoryGrid limit={10} />
      </section>

      {/* Featured grid */}
      <section className="bg-secondary/40 py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Destaques</p>
              <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Anúncios em destaque</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* Popular near you */}
      <section className="container py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Populares</p>
          <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Recentes em Sergipe</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map(l => <ListingCard key={l.id} listing={l} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-16 text-background md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-background/60">Para prestadores</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Faça parte da maior vitrine de serviços de Sergipe.
            </h2>
            <p className="mt-4 text-background/70">
              Cadastro gratuito do anúncio. Loja própria, destaques e banner com planos opcionais.
            </p>
            <a href="https://wa.me/5579999990000" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
              Falar no WhatsApp <Search className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
