import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Custom Chakra theme matching HACCS branding
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        haccs: {
          navy: { value: "#0a1628" },
          navyLight: { value: "#132238" },
          coral: { value: "#ff6b4a" },
          coralLight: { value: "#ff8a70" },
          cream: { value: "#faf8f5" },
        },
      },
      fonts: {
        heading: { value: "'Archivo', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
  },
  globalCss: {
    body: {
      bg: "haccs.navy",
      color: "haccs.cream",
    },
  },
});

const system = createSystem(defaultConfig, config);

const App = () => (
  <ChakraProvider value={system}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

export default App;
