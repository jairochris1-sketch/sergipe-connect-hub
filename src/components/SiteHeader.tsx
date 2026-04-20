import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground font-display text-xl font-semibold shadow-soft transition-transform group-hover:-rotate-3">
            c
          </span>
          <div className="leading-none">
            <p className="font-display text-xl font-semibold tracking-tight">
              Conectado <span className="italic font-medium text-accent">em Sergipe</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <MapPin className="h-3 w-3 text-accent" /> Vitrine local
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={({isActive}) =>
            `text-sm transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            Início
          </NavLink>
          <NavLink to="/categorias" className={({isActive}) =>
            `text-sm transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            Categorias
          </NavLink>
          <NavLink to="/lojas" className={({isActive}) =>
            `text-sm transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            Lojas
          </NavLink>
        </nav>

        <a
          href="https://wa.me/5579999990000"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Anunciar serviço
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
