import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Niveles from "./pages/Niveles";
import Admision from "./pages/Admision";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/niveles" element={<Niveles />} />
        <Route path="/admision" element={<Admision />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;