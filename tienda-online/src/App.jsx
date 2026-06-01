import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./components/CarritoContext";
import RevPartsNavbar from "./components/Navbar";
import { useState } from "react";

import Inicio from "./pages/inicio.jsx";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer";

export default function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("");

  return (
    <CarritoProvider>
      <BrowserRouter>
        <RevPartsNavbar
          onCategoriaSelect={setCategoriaActiva}
          categoriaActiva={categoriaActiva}
        />
        <div className="app-content">
          <Routes>
            <Route path="/"            element={<Inicio />} />
            <Route path="/productos"   element={<Productos categoriaActiva={categoriaActiva} />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/carrito"     element={<Carrito />} />
            <Route path="/contacto"    element={<Contacto />} />
            <Route path="/nosotros"    element={<Nosotros />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CarritoProvider>
  );
}