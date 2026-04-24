import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Input } from "@/components/ui/input";
import { categories, cities, listings } from "@/data/mock";

const Buscar = () => {
  const [params, setParams] = useSearchParams();
  const categoria = params.get("categoria") ?? "";
  const cidade = params.get("cidade") ?? "";
  const q = params.get("q") ?? "";

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (categoria && l.categorySlug !== categoria) return false;
      if (cidade && l.city !== cidade) return false;
      if (q && !`${l.name} ${l.description} ${l.category}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [categoria, cidade, q]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container pt-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Encontre por aqui
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Busque o serviço <span className="text-primary">ideal</span>.
        </h1>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-2 shadow-card">
          <Search className="ml-3 h-5 w-5 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => updateParam("q", e.target.value)}
            placeholder="Buscar por nome ou serviço..."
            className="border-0 shadow-none focus-visible:ring-0"
          />
        </div>
      </section>

      <section className="container grid gap-8 py-10 md:grid-cols-[280px_1fr]">
        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Categoria
            </h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => updateParam("categoria", "")}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-smooth ${
                    !categoria
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  Todas as categorias
                </button>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => updateParam("categoria", c.slug)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-smooth ${
                      categoria === c.slug
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>{c.emoji}</span> {c.name}
                    </span>
                    <span className="text-xs opacity-70">{c.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Cidade
            </h3>
            <select
              value={cidade}
              onChange={(e) => updateParam("cidade", e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="">Todas as cidades</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </aside>

        {/* RESULTS */}
        <div>
          <p className="mb-5 text-sm text-muted-foreground">
            <strong className="text-foreground">{filtered.length}</strong>{" "}
            profissionais encontrados
            {categoria && ` em ${categories.find(c => c.slug === categoria)?.name}`}
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-muted-foreground">
                Nenhum prestador encontrado com esses filtros.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((l) => (
                <ListingCard key={l.slug} listing={l} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buscar;
