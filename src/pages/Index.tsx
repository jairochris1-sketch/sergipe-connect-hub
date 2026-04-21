import { useEffect, useState } from "react";

const PHRASES = [
  "Encontre serviços, divulgue seu negócio e aproveite oportunidades — tudo aqui.",
  "Serviços, negócios e oportunidades — tudo ao seu alcance.",
  "Conectamos quem precisa com quem faz acontecer.",
];

const ROTATION_MS = 60_000;

const Index = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Conectado em Sergipe
        </p>
        <h1
          key={index}
          className="animate-fade-in text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {PHRASES[index]}
        </h1>
      </section>
    </main>
  );
};

export default Index;
