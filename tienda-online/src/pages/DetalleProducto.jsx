import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import PRODUCTOS from "../data/productos";
import { useCarrito } from "../contexts/CarritoContext";

export default function DetalleProducto() {
  const { id } = useParams();

  const producto = PRODUCTOS.find(
    (p) => String(p.id) === String(id)
  );

  if (!producto) {
    return (
      <section className="detalle-producto-page min-vh-100 bg-dark text-white">
      <Container className="py-5 bg-dark">
        <h2>Producto no encontrado</h2>
        <p>El producto solicitado no existe o fue eliminado.</p>

        <Link
          to="/productos"
          className="btn btn-primary mt-2"
        >
          Volver al catálogo
        </Link>
      </Container>
      </section>
    );
  }

  const precio =
    typeof producto.precio === "number"
      ? producto.precio
      : parseFloat(producto.precio || 0);

  return (
    <section className="detalle-producto-page bg-dark text-white">
    <Container className="py-5">
      <Row className="g-4">
        <Col md={6}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: "100%",
              maxHeight: "calc(100vh - 220px)",
              objectFit: "contain",
              borderRadius: 8,
            }}
            onError={(e) => {
              e.currentTarget.src = "/src/assets/hero.png";
            }}
          />
        </Col>

        <Col md={6}>
          <h1 className="mb-1">{producto.nombre}</h1>

          <div className="mb-2 text-muted">
            Categoría:{" "}
            <Link to="/productos">
              {producto.categoria}
            </Link>
          </div>

          <div className="d-flex align-items-baseline gap-3">
            <h3 className="m-0">
              ${precio.toFixed(2)}
            </h3>

            {producto.stock > 0 ? (
              <Badge bg="success">
                En stock: {producto.stock}
              </Badge>
            ) : (
              <Badge bg="danger">
                Sin stock
              </Badge>
            )}
          </div>

          <p className="mt-3">
            {producto.descripcion}
          </p>

          <h5>Características principales</h5>

          <ul>
            {(
              Array.isArray(producto.caracteristicas) &&
              producto.caracteristicas.length > 0
                ? producto.caracteristicas
                : [
                    "Calidad OEM",
                    "Compatibilidad con múltiples modelos",
                    "Instalación sencilla",
                  ]
            ).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <div className="d-flex gap-2 mt-4">
            <Link
              to="/productos"
              className="btn btn-outline-secondary"
            >
              Volver al catálogo
            </Link>

            <AgregarBtn producto={producto} />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

function AgregarBtn({ producto }) {
  const { addItem, items } = useCarrito();
  const cartItem = items.find((it) => it.producto.id === producto.id);
  const cartQty = cartItem ? Number(cartItem.qty || 0) : 0;
  const disponible = Number(producto.stock) > 0 && cartQty < Number(producto.stock || 0);

  function handle() {
    if (!disponible) return;
  addItem(producto, 1);
  }

  return (
    <Button disabled={!disponible} onClick={handle}>
      {disponible ? 'Agregar al carrito' : 'No disponible'}
    </Button>
  );
}