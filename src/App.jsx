import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Niveles from "./pages/Niveles";
import Admision from "./pages/Admision";
import Contacto from "./pages/Contacto";
import Inicial from "./pages/Inicial";
import Primaria from "./pages/Primaria";
import Segundaria from "./pages/Segundaria";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // El componente que creamos

function App() {
  return (
    <BrowserRouter>
      {/* 1. El ScrollToTop debe ir SIEMPRE dentro del BrowserRouter */}
      <ScrollToTop />

      {/* 2. Tu Header se mantiene arriba para ser visible en todas las páginas */}
      <Header />

      {/* 3. Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/niveles" element={<Niveles />} />
        <Route path="/admision" element={<Admision />} />
        <Route path="/contacto" element={<Contacto />} />
        
        {/* Rutas de Niveles específicos */}
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/primaria" element={<Primaria />} />
        <Route path="/secundaria" element={<Segundaria />} />
      </Routes>

      {/* 4. Footer al final de todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;