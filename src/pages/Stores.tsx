import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/mock";

const Stores = () => {
  const stores = listings.filter(l => l.store);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Lojas</p>
        <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Lojas em destaque</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Prestadores com página da loja própria — vitrine completa de serviços e fotos.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map(l => <ListingCard key={l.id} listing={l} />)}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Stores;
