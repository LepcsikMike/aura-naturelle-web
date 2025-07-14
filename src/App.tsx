
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NhostProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { nhost } from './integrations/nhost/client';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import Privacy from "./pages/Privacy";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <NhostProvider nhost={nhost}>
    <NhostApolloProvider nhost={nhost}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/testimonios" element={<Testimonials />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/aviso-legal" element={<LegalNotice />} />
                <Route path="/privacidad" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </NhostApolloProvider>
  </NhostProvider>
);

export default App;
