import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Mail, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login — sem backend ainda
    localStorage.setItem(
      "ces_user",
      JSON.stringify({ email, name: name || email.split("@")[0] })
    );
    toast({
      title: mode === "login" ? "Bem-vindo de volta!" : "Conta criada!",
      description: "Redirecionando para o seu painel...",
    });
    setTimeout(() => navigate("/painel"), 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-hero shadow-glow">
              <Sparkles className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {mode === "login" ? "Acesse sua conta" : "Crie sua conta"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {mode === "login"
                ? "Gerencie seus anúncios e perfil de prestador."
                : "Comece a anunciar seus serviços em Sergipe."}
            </p>
          </div>

          <form
            onSubmit={submit}
            className="space-y-4 rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8"
          >
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="voce@email.com"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full shadow-glow" size="lg">
              {mode === "login" ? "Entrar" : "Criar conta"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {mode === "login" ? "Ainda não tem conta?" : "Já tem uma conta?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="font-medium text-primary hover:underline"
              >
                {mode === "login" ? "Criar agora" : "Entrar"}
              </button>
            </p>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Ao continuar, você concorda com os{" "}
            <Link to="/" className="underline">termos de uso</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
