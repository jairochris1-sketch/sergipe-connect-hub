import { Link } from "react-router-dom";
import { Camera, Check, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Anunciar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Para prestadores
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Anuncie seu serviço em Sergipe
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            O cadastro é feito por nossa equipe. Envie seus dados pelo WhatsApp e
            seu anúncio entra no ar em até 24h.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold">Anúncio gratuito</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Apareça nas categorias e na busca.
            </p>
            <div className="mt-4 text-3xl font-bold">R$ 0</div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Até 5 fotos do serviço",
                "Nome, categoria e descrição (100 caracteres)",
                "Botão de WhatsApp e Instagram",
                "Valores ou orçamento",
                "Você pode editar ou excluir quando quiser",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a
                href="https://wa.me/5579999990000?text=Quero%20criar%20meu%20an%C3%BAncio%20no%20Conectado%20em%20Sergipe"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-1 h-4 w-4" /> Solicitar cadastro
              </a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 text-primary-foreground shadow-card">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase">
                <Camera className="h-3.5 w-3.5" /> Loja Pro
              </div>
              <h2 className="mt-4 text-2xl font-bold">Página da sua loja</h2>
              <p className="mt-1 text-sm opacity-90">
                Vitrine completa, banner e selo de destaque.
              </p>
              <div className="mt-4">
                <span className="text-3xl font-bold">R$ 100</span>
                <span className="opacity-80">/mês</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Página exclusiva da sua loja",
                  "Selo Em destaque nos resultados",
                  "Aparição no carrossel da home",
                  "Mais fotos e galeria expandida",
                  "Suporte prioritário",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full rounded-full bg-card text-foreground hover:bg-card/90">
                <a
                  href="https://wa.me/5579999990000?text=Quero%20a%20Loja%20Pro%20do%20Conectado%20em%20Sergipe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero a Loja Pro
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
          Quer aparecer no banner do carrossel ou destacar seu anúncio?{" "}
          <Link to="/destaque" className="font-medium text-primary hover:underline">
            Solicite destaque
          </Link>{" "}
          · Ajude o projeto:{" "}
          <Link to="/doar" className="font-medium text-primary hover:underline">
            faça uma doação
          </Link>
          .
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anunciar;
