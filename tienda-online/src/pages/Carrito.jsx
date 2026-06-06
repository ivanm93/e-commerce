import React from 'react';
import { Container, Row, Col, Button, ListGroup, InputGroup, FormControl, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCarrito } from "../contexts/CarritoContext";
import { useToasts } from "../contexts/ToastContext";

export default function Carrito() {
  const { items, addItem, removeItem, clear } = useCarrito();
  const { push } = useToasts();
  const [showComprar, setShowComprar] = React.useState(false);

  const totalItems = items.reduce((s, it) => s + Number(it.qty || 0), 0);
  const subtotal = items.reduce((s, it) => s + (Number(it.producto.precio || 0) * Number(it.qty || 0)), 0);

  function handleConfirmCompra() {
    clear();
    setShowComprar(false);
    push({ title: 'Compra', message: 'Compra simulada realizada. Gracias por su compra.', bg: 'success' });
  }

  if (!items || items.length === 0) {
    return (
      <section className="carrito-page min-vh-100 bg-dark text-white">
      <Container className="py-5 ">
        <Row>
          <Col>
            <h2>Tu carrito está vacío</h2>

            <p>
              Agregá productos desde el catálogo.
            </p>

            <Link
              to="/productos"
              className="btn btn-primary"
            >
              Ver productos
            </Link>
          </Col>
        </Row>
      </Container>
      </section>
    );
  }

  return (
  <section className="carrito-page bg-dark text-white">
  <Container className="py-5 ">
      <Row>
        <Col>
          <h2>Tu carrito ({totalItems} items)</h2>

          <ListGroup variant="flush" className="mt-3">
            {items.map((it) => (
              <ListGroup.Item key={it.producto.id} className="d-flex align-items-center gap-3">
                <img src={it.producto.imagen} alt={it.producto.nombre} style={{ width: 84, height: 64, objectFit: 'cover', borderRadius: 6 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{it.producto.nombre}</div>
                  <div className="text-muted">{it.producto.categoria}</div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <InputGroup size="sm" style={{ width: 120 }}>
                    <Button variant="outline-secondary" onClick={() => addItem(it.producto, -1)}>-</Button>
                    <FormControl readOnly value={it.qty} style={{ textAlign: 'center' }} />
                    <Button variant="outline-secondary" onClick={() => addItem(it.producto, 1)} disabled={Number(it.qty) >= Number(it.producto.stock || 0)}>+</Button>
                  </InputGroup>

                  <div style={{ width: 90, textAlign: 'right', fontWeight: 700 }}>${(Number(it.producto.precio) * it.qty).toFixed(2)}</div>

                  <Button variant="outline-danger" size="sm" onClick={() => removeItem(it.producto.id)}>Quitar</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div>
              <Button variant="outline-secondary" onClick={clear}>Vaciar carrito</Button>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Subtotal: ${subtotal.toFixed(2)}</div>
              <div className="mt-2">
                <Button variant="primary" onClick={() => setShowComprar(true)}>Comprar</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <CompraModal show={showComprar} onClose={() => setShowComprar(false)} onConfirm={handleConfirmCompra} items={items} subtotal={subtotal} />
    </Container>
    </section>
  );
}

// Modal and handlers placed after main component
export function CompraModal({ show, onClose, onConfirm, items, subtotal }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Vas a comprar {items.length} productos. Subtotal: ${subtotal.toFixed(2)}</p>
        <ul>
          {items.map((it) => (
            <li key={it.producto.id}>{it.producto.nombre} x{it.qty} - ${(Number(it.producto.precio) * it.qty).toFixed(2)}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={onConfirm}>Confirmar compra</Button>
      </Modal.Footer>
    </Modal>
  );
}