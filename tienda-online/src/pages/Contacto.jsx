import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useCarrito } from "../components/CarritoContext";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contacto() {
  const { items } = useCarrito();
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", direccion: "", entrega: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const err = {};
    if (!form.nombre.trim()) err.nombre = "Nombre es obligatorio";
    if (!form.apellido.trim()) err.apellido = "Apellido es obligatorio";
    if (!form.email.trim()) err.email = "Email es obligatorio";
    else if (!isValidEmail(form.email)) err.email = "Formato de email inválido";
    if (!form.telefono.trim()) err.telefono = "Teléfono es obligatorio";
    if (!form.direccion.trim()) err.direccion = "Dirección o localidad es obligatoria";
    if (!form.entrega.trim()) err.entrega = "Elegí un método de entrega";
    if (items.length === 0) err.carrito = "No podés confirmar: el carrito está vacío";
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // simulate submit
    setSent({ success: true, message: "Tu solicitud fue enviada correctamente. Te contactaremos pronto." });
    // clear form
    setForm({ nombre: "", apellido: "", email: "", telefono: "", direccion: "", entrega: "", mensaje: "" });
    setErrors({});
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h1>Contacto / Compra</h1>

          {sent && (
            <Alert variant={sent.success ? "success" : "danger"}>{sent.message}</Alert>
          )}

          <div className="contact-form-frame p-3">
            <Form onSubmit={handleSubmit} noValidate>
            <Row className="g-2">
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control name="nombre" value={form.nombre} onChange={handleChange} isInvalid={!!errors.nombre} />
                  <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control name="apellido" value={form.apellido} onChange={handleChange} isInvalid={!!errors.apellido} />
                  <Form.Control.Feedback type="invalid">{errors.apellido}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="g-2">
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" value={form.email} onChange={handleChange} isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control name="telefono" value={form.telefono} onChange={handleChange} isInvalid={!!errors.telefono} />
                  <Form.Control.Feedback type="invalid">{errors.telefono}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-2">
              <Form.Label>Dirección o localidad</Form.Label>
              <Form.Control name="direccion" value={form.direccion} onChange={handleChange} isInvalid={!!errors.direccion} />
              <Form.Control.Feedback type="invalid">{errors.direccion}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Método de entrega</Form.Label>
              <Form.Select name="entrega" value={form.entrega} onChange={handleChange} isInvalid={!!errors.entrega}>
                <option value="">Seleccionar...</option>
                <option value="retiro">Retiro en sucursal</option>
                <option value="envio">Envío a domicilio</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.entrega}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje / aclaración (opcional)</Form.Label>
              <Form.Control as="textarea" rows={3} name="mensaje" value={form.mensaje} onChange={handleChange} />
            </Form.Group>

            {errors.carrito && (
              <Alert variant="warning">{errors.carrito}</Alert>
            )}

            <div className="d-flex gap-2">
              <Button type="submit" disabled={items.length === 0}>Confirmar</Button>
              <Button variant="outline-secondary" onClick={() => setForm({ nombre: "", apellido: "", email: "", telefono: "", direccion: "", entrega: "", mensaje: "" })}>Limpiar</Button>
            </div>
            </Form>
          </div>
        </Col>

        <Col md={4}>
          <h5>Resumen del carrito</h5>
          {items.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul>
              {items.map((it) => (
                <li key={it.id}>{it.nombre} x {it.cantidad} — ${ (it.precio * it.cantidad).toFixed(2) }</li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
}
