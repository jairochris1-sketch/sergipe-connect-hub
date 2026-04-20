import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background font-display text-lg font-semibold">
            c
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold">Conectado</p>
            <p className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <MapPin className="h-3 w-3" /> em Sergipe
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
