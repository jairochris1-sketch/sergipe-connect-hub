import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CategoryGrid from "@/components/CategoryGrid";

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Todas as categorias</p>
        <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
          Encontre o profissional certo
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Toque em uma categoria para abrir a lista de prestadores cadastrados naquele serviço.
        </p>
        <div className="mt-12">
          <CategoryGrid />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Categories;
