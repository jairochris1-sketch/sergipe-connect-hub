import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListingCard from "@/components/ListingCard";
import { getCategory, getListingsByCategory } from "@/data/mock";

const CategoryPage = () => {
  const { slug = "" } = useParams();
  const category = getCategory(slug);
  const items = getListingsByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl font-semibold">Categoria não encontrada</h1>
          <Link to="/categorias" className="mt-4 inline-block text-accent">Voltar para categorias</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border/60 bg-gradient-warm">
        <div className="container py-14 md:py-20">
          <Link to="/categorias" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Categorias
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-accent-soft text-accent">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-display text-4xl font-semibold md:text-5xl">{category.name}</h1>
              <p className="mt-1 text-muted-foreground">{items.length} prestadores cadastrados em Sergipe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-display text-xl">Nenhum anúncio nesta categoria ainda.</p>
            <p className="mt-2 text-sm text-muted-foreground">Em breve novos prestadores serão cadastrados.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
};

export default CategoryPage;
