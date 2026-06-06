import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import RevPartsNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CarritoProvider } from "./contexts/CarritoContext";
import { ToastProvider } from "./contexts/ToastContext";

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto/Contacto";
import Nosotros from "./pages/Nosotros/Nosotros";

export default function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("");

  return (
    <BrowserRouter>
      <ToastProvider>
        <CarritoProvider>
        <RevPartsNavbar
          categoriaActiva={categoriaActiva}
          onCategoriaSelect={setCategoriaActiva}
        />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route
              path="/productos"
              element={
                <Productos
                  categoriaActiva={categoriaActiva}
                />
              }
            />

            <Route
              path="/producto/:id"
              element={<DetalleProducto />}
            />

            <Route
              path="/carrito"
              element={<Carrito />}
            />

            <Route
              path="/contacto"
              element={<Contacto />}
            />

            <Route
              path="/nosotros"
              element={<Nosotros />}
            />
          </Routes>
        </main>

        <Footer />
        </CarritoProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}