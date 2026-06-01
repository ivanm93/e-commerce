import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { useCarrito } from "../components/CarritoContext";
import "./Navbar.css";

const CATEGORIAS = [
  "Motor y transmisión",
  "Frenos y suspensión",
  "Eléctrico y electrónico",
  "Carrocería",
  "Escape y admisión",
  "Filtros y lubricantes",
  "Accesorios",
];

export default function RevPartsNavbar({ onCategoriaSelect, categoriaActiva }) {
  const { cantidadTotal } = useCarrito();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  function handleCategoria(cat) {
    if (onCategoriaSelect) onCategoriaSelect(cat);
    navigate("/productos");
    setExpanded(false);
  }

  return (
    <header className="revparts-header">

      {/* ── Topbar ── */}
      <div className="revparts-topbar">
        <span className="revparts-topbar-msg">
          <i className="revparts-icon-truck" aria-hidden="true">🚚</i>
          Envíos a todo el país · Entrega en 48–72hs
        </span>
        <div className="revparts-topbar-links">
          <NavLink to="/seguimiento" className="revparts-topbar-link">Seguí tu pedido</NavLink>
        </div>
      </div>

      {/* ── Navbar principal ── */}
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="revparts-nav"
      >
        <Container fluid className="revparts-nav-container">

          {/* Brand */}
          <Navbar.Brand as={NavLink} to="/" className="revparts-brand" onClick={() => setExpanded(false)}>
            <div className="revparts-logo" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <div className="revparts-brand-text">
              <span className="revparts-brand-name">RevParts</span>
              <span className="revparts-brand-sub">repuestos originales</span>
            </div>
          </Navbar.Brand>

          {/* Search removed per user request */}

          {/* Carrito + Hamburger */}
          <div className="revparts-nav-right">
            <NavLink to="/carrito" className="revparts-cart-btn" aria-label={`Carrito, ${cantidadTotal} productos`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="revparts-cart-label">Carrito</span>
              {cantidadTotal > 0 && (
                <Badge className="revparts-cart-badge" aria-live="polite">
                  {cantidadTotal}
                </Badge>
              )}
            </NavLink>
            <Navbar.Toggle aria-controls="revparts-collapse" className="revparts-toggle" />
          </div>

          {/* Links colapsables */}
          <Navbar.Collapse id="revparts-collapse" className="revparts-collapse">

            {/* Search removed for mobile too */}

            <Nav className="revparts-links">
              <Nav.Link as={NavLink} to="/" end className="revparts-link" onClick={() => setExpanded(false)}>
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/productos" className="revparts-link" onClick={() => setExpanded(false)}>
                Catálogo
              </Nav.Link>
              {/* Marcas eliminado según solicitud */}
              <Nav.Link as={NavLink} to="/nosotros" className="revparts-link" onClick={() => setExpanded(false)}>
                Nosotros
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacto" className="revparts-link" onClick={() => setExpanded(false)}>
                Contacto
              </Nav.Link>

              {/* Carrito mobile (dentro del menú) */}
              <Nav.Link as={NavLink} to="/carrito" className="revparts-link revparts-link-cart-mobile d-lg-none" onClick={() => setExpanded(false)}>
                Carrito
                {cantidadTotal > 0 && (
                  <Badge className="revparts-cart-badge ms-2">{cantidadTotal}</Badge>
                )}
              </Nav.Link>
            </Nav>

            {/* Submenú categorías mobile */}
            <div className="revparts-cat-mobile d-lg-none">
              <span className="revparts-cat-label">Categorías</span>
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  className={`revparts-cat-item ${categoriaActiva === cat ? "active" : ""}`}
                  onClick={() => handleCategoria(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ── Submenú categorías desktop ── */}
      <div className="revparts-submenu d-none d-lg-flex" role="navigation" aria-label="Categorías">
        <Container fluid className="revparts-submenu-container">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              className={`revparts-sub ${categoriaActiva === cat ? "active" : ""}`}
              onClick={() => handleCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </Container>
      </div>

    </header>
  );
}
