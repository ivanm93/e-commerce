import { useState } from "react";
import { useCarrito } from "../../contexts/CarritoContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
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

export default function RevPartsNavbar({
  onCategoriaSelect,
  categoriaActiva,
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { items } = useCarrito();
  const totalItems = items.reduce((s, it) => s + Number(it.qty || 0), 0);

  function handleCategoria(cat) {
    if (onCategoriaSelect) onCategoriaSelect(cat);
    navigate("/productos");
    setExpanded(false);
  }

  return (
    <header className="revparts-header">
      <div className="revparts-topbar">
        <span className="revparts-topbar-msg">
          🚚 Envíos a todo el país · Entrega en 48–72hs
        </span>

        <div className="revparts-topbar-links">
          <NavLink
            to="/seguimiento"
            className="revparts-topbar-link"
          >
            Seguí tu pedido
          </NavLink>
        </div>
      </div>

      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="revparts-nav"
      >
        <Container fluid className="revparts-nav-container">

          <div className="revparts-left">
            <Navbar.Brand
              as={NavLink}
              to="/"
              className="revparts-brand"
              onClick={() => setExpanded(false)}
            >
              <div className="revparts-logo">
                ⚙️
              </div>

              <div className="revparts-brand-text">
                <span className="revparts-brand-name">
                  RevParts
                </span>

                <span className="revparts-brand-sub">
                  repuestos originales
                </span>
              </div>
            </Navbar.Brand>
          </div>

          <div className="revparts-right">
            <Navbar.Collapse id="revparts-collapse">
              <Nav className="revparts-links">

              <Nav.Link
                as={NavLink}
                to="/"
                end
                onClick={() => setExpanded(false)}
              >
                Inicio
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/productos"
                onClick={() => setExpanded(false)}
              >
                Catálogo
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/nosotros"
                onClick={() => setExpanded(false)}
              >
                Nosotros
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/contacto"
                onClick={() => setExpanded(false)}
              >
                Contacto
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/carrito"
                className="d-lg-none"
                onClick={() => setExpanded(false)}
              >
                Carrito
              </Nav.Link>
            </Nav>

            <div className="revparts-cat-mobile d-lg-none">
              <span className="revparts-cat-label">
                Categorías
              </span>

              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  className={`revparts-cat-item ${
                    categoriaActiva === cat ? "active" : ""
                  }`}
                  onClick={() => handleCategoria(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            </Navbar.Collapse>

            <div className="revparts-right-group">
              <NavLink to="/carrito" className="revparts-cart-btn">
                🛒
                <span className="revparts-cart-label">Carrito</span>
                {totalItems > 0 && <span className="revparts-cart-badge">{totalItems}</span>}
              </NavLink>

              <Navbar.Toggle aria-controls="revparts-collapse" className="revparts-toggle" />
            </div>
          </div>

        </Container>
      </Navbar>

      <div className="revparts-submenu d-none d-lg-flex">
        <Container fluid>
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              className={`revparts-sub ${
                categoriaActiva === cat ? "active" : ""
              }`}
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