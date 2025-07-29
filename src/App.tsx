import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Companies from "./pages/Companies";
import Career from "./pages/Career";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout";

// hii
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
           <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/career" element={<Career />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    <SpeedInsights />
  </QueryClientProvider>
  
);

export default App;
