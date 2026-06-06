import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import PRODUCTOS from "../data/productos";
import ProductCard from "../components/Card";
import { useState, useMemo } from "react";
import { useCarrito } from "../contexts/CarritoContext";

export default function Productos({ categoriaActiva }) {
  const [busqueda, setBusqueda] = useState("");
  const [soloStock, setSoloStock] = useState(false);
  const [minPrecio, setMinPrecio] = useState("");
  const [maxPrecio, setMaxPrecio] = useState("");
  const [orden, setOrden] = useState("none");

  const listado = useMemo(() => {
    let items = PRODUCTOS.slice();

    if (categoriaActiva) {
      items = items.filter((p) => p.categoria === categoriaActiva);
    }

    if (busqueda.trim()) {
      const q = busqueda.trim().toLowerCase();

      items = items.filter((producto) =>
        producto.nombre.toLowerCase().includes(q)
      );
    }

    if (soloStock) {
      items = items.filter((p) => Number(p.stock) > 0);
    }

    const min = parseFloat(minPrecio);
    const max = parseFloat(maxPrecio);

    if (!isNaN(min)) {
      items = items.filter((p) => Number(p.precio) >= min);
    }

    if (!isNaN(max)) {
      items = items.filter((p) => Number(p.precio) <= max);
    }

    if (orden === "price-asc") {
      items.sort((a, b) => Number(a.precio) - Number(b.precio));
    }

    if (orden === "price-desc") {
      items.sort((a, b) => Number(b.precio) - Number(a.precio));
    }

    return items;
  }, [categoriaActiva, busqueda, soloStock, minPrecio, maxPrecio, orden]);

  function clearFilters() {
    setBusqueda("");
    setSoloStock(false);
    setMinPrecio("");
    setMaxPrecio("");
    setOrden("none");
  }

  const { addItem } = useCarrito();

  function handleAgregar(prod) {
    // add one unit respecting stock
    if (Number(prod.stock) <= 0) return;
    addItem(prod, 1);
    // no alert: user will see product in the carrito page
  }
return (
  <>
        <section className="nosotros-hero">
        <Container fluid className="px-4">
          <div className="nosotros-hero-inner">
            <div className="breadcrumb">Inicio &nbsp;›&nbsp; Productos</div>
            <h1 className="nosotros-title">Catalogo de RevParts</h1>
            <p className="nosotros-lead">     Encontrá repuestos originales y accesorios para mantener tu vehículo siempre en marcha.</p>
          </div>
        </Container>
      </section>

    {/* CONTENIDO */}
    <section className="contenido bg-dark text-white">
    <Container className="catalog-page py-5">

      <Form className="mb-3">
        <Row className="g-2 align-items-center">
          <Col xs={12} md={5}>
            <InputGroup>
              <Form.Control
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

              <Button
                variant="outline-secondary"
                onClick={() => setBusqueda("")}
              >
                Limpiar
              </Button>
            </InputGroup>
          </Col>

          <Col xs={6} md={2}>
            <Form.Select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="none">Sin ordenar</option>
              <option value="price-asc">
                Precio: menor a mayor
              </option>
              <option value="price-desc">
                Precio: mayor a menor
              </option>
            </Form.Select>
          </Col>

          <Col xs={6} md={2}>
            <Form.Check
              type="checkbox"
              label="Sólo con stock"
              checked={soloStock}
              onChange={(e) =>
                setSoloStock(e.target.checked)
              }
            />
          </Col>

          <Col xs={6} md={1}>
            <Form.Control
              type="number"
              placeholder="Min"
              value={minPrecio}
              onChange={(e) =>
                setMinPrecio(e.target.value)
              }
            />
          </Col>

          <Col xs={6} md={1}>
            <Form.Control
              type="number"
              placeholder="Max"
              value={maxPrecio}
              onChange={(e) =>
                setMaxPrecio(e.target.value)
              }
            />
          </Col>

          <Col xs={12} md={1} className="d-grid">
            <Button
              variant="outline-secondary"
              onClick={clearFilters}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="g-3 mt-3">
        {listado.map((p) => (
          <Col
            key={p.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProductCard
              producto={p}
              onAgregar={handleAgregar}
            />
          </Col>
        ))}
      </Row>

    </Container>
    </section>
  </>
);
}