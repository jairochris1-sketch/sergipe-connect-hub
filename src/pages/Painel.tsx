import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  User,
  Heart,
  Plus,
  Pencil,
  Trash2,
  Share2,
  Star,
  LogOut,
  Image as ImageIcon,
  Upload,
  RotateCcw,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { listings as mockListings } from "@/data/mock";
import {
  loadSlides,
  saveSlides,
  resetSlides,
  fileToDataUrl,
  type HeroSlide,
} from "@/data/heroSlides";

type AuthUser = { email: string; name: string };

const Painel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [myListings] = useState(mockListings.slice(0, 2));

  useEffect(() => {
    const raw = localStorage.getItem("ces_user");
    if (!raw) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(raw));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("ces_user");
    toast({ title: "Sessão encerrada" });
    navigate("/");
  };

  const share = (slug: string) => {
    const url = `${window.location.origin}/loja/${slug}`;
    const text = encodeURIComponent(
      `Confira meu anúncio no Conectado em Sergipe: ${url}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border/60 bg-muted/30">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-hero text-xl font-bold text-primary-foreground shadow-glow">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Painel do prestador
              </div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Olá, {user.name}
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild className="rounded-full shadow-glow">
              <Link to="/anunciar"><Plus className="mr-1 h-4 w-4" /> Novo anúncio</Link>
            </Button>
            <Button onClick={logout} variant="outline" className="rounded-full">
              <LogOut className="mr-1 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <Tabs defaultValue="anuncios">
          <TabsList className="mb-6">
            <TabsTrigger value="anuncios"><Megaphone className="mr-2 h-4 w-4" />Meus anúncios</TabsTrigger>
            <TabsTrigger value="perfil"><User className="mr-2 h-4 w-4" />Perfil</TabsTrigger>
            <TabsTrigger value="destaque"><Star className="mr-2 h-4 w-4" />Destaque</TabsTrigger>
            <TabsTrigger value="doar"><Heart className="mr-2 h-4 w-4" />Apoiar</TabsTrigger>
          </TabsList>

          {/* ANÚNCIOS */}
          <TabsContent value="anuncios" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard label="Anúncios ativos" value={String(myListings.length)} icon={<Megaphone className="h-4 w-4" />} />
              <StatCard label="Visualizações (semana)" value="312" icon={<LayoutDashboard className="h-4 w-4" />} />
              <StatCard label="Cliques no WhatsApp" value="48" icon={<Share2 className="h-4 w-4" />} />
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-2 shadow-soft">
              {myListings.map((l) => (
                <div
                  key={l.slug}
                  className="flex flex-wrap items-center gap-4 rounded-2xl p-3 hover:bg-muted/40"
                >
                  <img src={l.image} alt={l.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-[180px]">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{l.name}</div>
                      {l.featured && <Badge className="bg-accent text-accent-foreground">Destaque</Badge>}
                    </div>
                    <div className="text-xs text-muted-foreground">{l.category} · {l.city}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-full" onClick={() => share(l.slug)}>
                      <Share2 className="mr-1 h-3.5 w-3.5" /> Compartilhar
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Pencil className="mr-1 h-3.5 w-3.5" /> Editar
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full text-destructive hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* PERFIL */}
          <TabsContent value="perfil">
            <div className="max-w-xl rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Dados pessoais</h3>
              <div className="mt-4 grid gap-4">
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label>E-mail</Label>
                  <Input defaultValue={user.email} type="email" />
                </div>
                <div className="space-y-2">
                  <Label>WhatsApp</Label>
                  <Input placeholder="(79) 99999-0000" />
                </div>
                <Button className="w-fit rounded-full shadow-glow">Salvar alterações</Button>
              </div>
            </div>
          </TabsContent>

          {/* DESTAQUE */}
          <TabsContent value="destaque">
            <div className="rounded-3xl gradient-hero p-8 text-primary-foreground shadow-card">
              <Star className="mb-3 h-8 w-8" />
              <h3 className="text-2xl font-bold">Solicite destaque para o seu anúncio</h3>
              <p className="mt-2 max-w-xl text-primary-foreground/90">
                Apareça no carrossel da home e nas primeiras posições da busca. Aumente o
                contato direto pelo WhatsApp em até 3x.
              </p>
              <Button variant="secondary" className="mt-6 rounded-full bg-card text-foreground hover:bg-card/90">
                Quero destacar
              </Button>
            </div>
          </TabsContent>

          {/* DOAR */}
          <TabsContent value="doar">
            <div className="max-w-md rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
              <Heart className="mb-3 h-8 w-8 text-accent" />
              <h3 className="text-xl font-bold">Apoie o Conectado em Sergipe</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Doe a partir de R$ 2,00 e ajude a manter a vitrine no ar.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[2, 5, 10, 25, 50].map((v) => (
                  <Button key={v} variant="outline" className="rounded-full">R$ {v}</Button>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Input placeholder="Outro valor (R$)" type="number" min={2} />
                <Button className="rounded-full shadow-glow">Doar</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

const StatCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {icon} {label}
    </div>
    <div className="mt-2 text-3xl font-bold">{value}</div>
  </div>
);

export default Painel;
