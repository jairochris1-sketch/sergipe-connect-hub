import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold">
            Conectado <span className="text-primary">em Sergipe</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            A vitrine oficial de prestadores de serviço do estado.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Explorar</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/buscar" className="hover:text-primary">Buscar serviços</Link></li>
            <li><Link to="/lojas" className="hover:text-primary">Lojas em destaque</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Para prestadores</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/anunciar" className="hover:text-primary">Criar anúncio</Link></li>
            <li><Link to="/loja-pro" className="hover:text-primary">Página da loja (R$ 100/mês)</Link></li>
            <li><Link to="/destaque" className="hover:text-primary">Solicitar destaque</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Apoie o projeto</h4>
          <p className="text-sm text-muted-foreground">
            Doe a partir de R$ 2,00 para manter a vitrine no ar.
          </p>
          <Link
            to="/doar"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-soft transition-smooth hover:opacity-90"
          >
            <Heart className="h-4 w-4" /> Quero doar
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Conectado em Sergipe. Feito com 💙 em Aracaju.
      </div>
    </footer>
  );
};

export default Footer;
