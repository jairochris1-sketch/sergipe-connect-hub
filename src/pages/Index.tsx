import { Link } from "react-router-dom";
import { Search, TrendingUp, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedMarquee from "@/components/FeaturedMarquee";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { categories, listings } from "@/data/mock";

const Index = () => {
  const featured = listings.filter((l) => l.featured);
  const trending = [...listings, ...listings].slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroCarousel />

      {/* CATEGORY QUICK BAR */}
      <section className="container -mt-4 pb-12">
        <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Atalho rápido
            </span>
            <Link to="/buscar" className="text-xs font-medium text-primary hover:underline">
              Ver todas →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/buscar?categoria=${c.slug}`}
                className="group flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2.5 text-sm font-medium transition-smooth hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <span className="text-base">{c.emoji}</span>
                {c.name}
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground group-hover:bg-primary/10">
                  {c.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MOVING CAROUSEL */}
      <FeaturedMarquee />

      {/* TRENDING */}
      <section className="container py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary">
              <TrendingUp className="h-3.5 w-3.5" /> Em alta
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Mais procurados esta semana
            </h2>
          </div>
          <Link to="/buscar" className="text-sm font-medium text-primary hover:underline">
            Ver tudo →
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {trending.map((l, i) => (
            <div key={i} className="w-64 shrink-0">
              <ListingCard listing={l} />
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Categorias
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Navegue por <span className="text-primary">especialidade</span>
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Cada categoria reúne uma lista filtrada apenas dos profissionais
                da sua região em Sergipe.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/buscar">Ver todas</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/buscar?categoria=${c.slug}`}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl transition-smooth group-hover:gradient-hero group-hover:text-primary-foreground">
                  {c.emoji}
                </div>
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.count} profissionais
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Lojas curadas
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Anúncios em destaque
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.concat(listings[2]).slice(0, 3).map((l) => (
            <ListingCard key={l.slug} listing={l} />
          ))}
        </div>
      </section>

      {/* RECENTS */}
      <section className="container pb-16">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Acabou de chegar
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Recentes em Sergipe
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.slice(0, 6).map((l) => (
            <ListingCard key={l.slug} listing={l} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground shadow-card md:p-14">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
              Para prestadores
            </span>
            <h3 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
              Faça parte da maior vitrine de serviços de Sergipe.
            </h3>
            <p className="mt-3 text-primary-foreground/90">
              Cadastro gratuito de anúncio. Loja própria, descrição do trabalho
              e contato direto pelo WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full bg-card text-foreground hover:bg-card/90">
                <Link to="/anunciar">
                  <Search className="mr-1 h-4 w-4" /> Criar meu anúncio
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/loja-pro">Loja Pro · R$ 100/mês</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
