import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Buscar from "./pages/Buscar.tsx";
import Loja from "./pages/Loja.tsx";
import Anunciar from "./pages/Anunciar.tsx";
import Login from "./pages/Login.tsx";
import Painel from "./pages/Painel.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/loja/:slug" element={<Loja />} />
          <Route path="/anunciar" element={<Anunciar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/painel" element={<Painel />} />
          <Route path="/lojas" element={<Buscar />} />
          <Route path="/loja-pro" element={<Anunciar />} />
          <Route path="/destaque" element={<Anunciar />} />
          <Route path="/doar" element={<Anunciar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
