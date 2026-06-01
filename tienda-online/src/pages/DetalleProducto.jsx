import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import PRODUCTOS from "../data/productos";
import { useCarrito } from "../components/CarritoContext";

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = PRODUCTOS.find((p) => String(p.id) === String(id));
  const { agregarAlCarrito } = useCarrito();

  if (!producto)
    return (
      <Container className="py-5">
        <h2>Producto no encontrado</h2>
        <p>El producto solicitado no existe o fue eliminado.</p>
        <Link to="/productos" className="btn btn-primary mt-2">Volver al catálogo</Link>
      </Container>
    );

  const precio = typeof producto.precio === "number" ? producto.precio : parseFloat(producto.precio || 0);

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={6}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                width: '100%',
                maxHeight: 'calc(100vh - 220px)', // leave space for header/footer and text
                objectFit: 'contain',
                borderRadius: 8,
              }}
              onError={(e) => (e.target.src = '/src/assets/hero.png')}
            />
        </Col>

        <Col md={6}>
          <h1 className="mb-1">{producto.nombre}</h1>
          <div className="mb-2 text-muted">Categoría: <Link to="/productos" state={{ categoria: producto.categoria }}>{producto.categoria}</Link></div>

          <div className="d-flex align-items-baseline gap-3">
            <h3 className="m-0">${precio.toFixed(2)}</h3>
            {producto.stock > 0 ? (
              <Badge bg="success">En stock: {producto.stock}</Badge>
            ) : (
              <Badge bg="danger">Sin stock</Badge>
            )}
          </div>

          <p className="mt-3">{producto.descripcion}</p>

          <h5>Características principales</h5>
          <ul>
            {(Array.isArray(producto.caracteristicas) && producto.caracteristicas.length > 0
              ? producto.caracteristicas
              : ["Calidad OEM", "Compatibilidad con múltiples modelos", "Instalación sencilla"]) .map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <div className="d-flex gap-2 mt-4">
            <Link to="/productos" className="btn btn-outline-secondary">Volver al catálogo</Link>
            <Button
              disabled={producto.stock === 0}
              onClick={() => agregarAlCarrito(producto, 1)}
              aria-disabled={producto.stock === 0}
            >
              Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
