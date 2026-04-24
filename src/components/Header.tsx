import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight">
              Conectado <span className="text-primary">em Sergipe</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Vitrine de serviços
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/buscar", label: "Buscar" },
            { to: "/painel", label: "Painel" },
            { to: "/login", label: "Login" },
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Button asChild className="rounded-full shadow-glow">
          <Link to="/anunciar">Anunciar serviço</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
