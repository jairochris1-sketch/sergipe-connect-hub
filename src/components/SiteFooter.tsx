const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-lg font-semibold">Conectado em Sergipe</p>
          <p className="mt-2 text-muted-foreground max-w-xs">
            Vitrine de prestadores de serviços de Sergipe. Conectando talentos locais a quem precisa.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Navegação</p>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-accent">Início</a></li>
            <li><a href="/categorias" className="hover:text-accent">Categorias</a></li>
            <li><a href="/lojas" className="hover:text-accent">Lojas em destaque</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contato</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Aracaju · Sergipe</li>
            <li>contato@conectadoemsergipe.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-5 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Conectado em Sergipe</span>
          <span>Feito com ♥ no nordeste</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
