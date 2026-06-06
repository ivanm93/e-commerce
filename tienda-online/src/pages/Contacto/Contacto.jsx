import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";
import { useToasts } from "../../contexts/ToastContext";
import {
  Envelope,
  Telephone,
  Whatsapp,
  GeoAlt
} from "react-bootstrap-icons";

import "./Contacto.css";

export default function Contacto() {
  const { push } = useToasts?.() ?? { push: () => {} };

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function validate() {
    const err = {};

    if (!form.nombre.trim()) err.nombre = "Nombre requerido";

    if (
      !form.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email)
    ) {
      err.email = "Email válido requerido";
    }

    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const v = validate();

    setErrors(v);

    if (Object.keys(v).length) return;

    setSending(true);

    await new Promise(r => setTimeout(r, 700));

    setSending(false);

    push({
      title: "Consulta enviada",
      message:
        "Nos pondremos en contacto a la brevedad.",
      bg: "success",
      delay: 3000
    });
  }

  return (
    <div className="contact-page">

      <section className="nosotros-hero">
        <Container fluid className="px-4">
          <div className="nosotros-hero-inner">
            <div className="breadcrumb">Inicio &nbsp;›&nbsp; Contacto</div>
            <h1 className="nosotros-title">Contacto</h1>
            <p className="nosotros-lead">    Completá el formulario y nos pondremos
            en contacto con vos a la brevedad.</p>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <Container className="py-5">

        <Row className="g-4">

          <Col lg={8}>

            <div className="contact-card">

              <Form onSubmit={handleSubmit}>

                <Row className="g-3">

                  <Col md={6}>
                    <Form.Label>Nombre</Form.Label>

                    <Form.Control
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Apellido</Form.Label>

                    <Form.Control
                      name="apellido"
                      value={form.apellido}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Teléfono</Form.Label>

                    <Form.Control
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Label>
                      Dirección o localidad
                    </Form.Label>

                    <Form.Control
                      name="direccion"
                      value={form.direccion}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Label>
                      Método de entrega
                    </Form.Label>

                    <Form.Select
                      name="entrega"
                      value={form.entrega}
                      onChange={handleChange}
                    >
                      <option>
                        Seleccionar...
                      </option>

                      <option>
                        Envío a domicilio
                      </option>

                      <option>
                        Retiro en sucursal
                      </option>
                    </Form.Select>
                  </Col>

                  <Col xs={12}>
                    <Form.Label>
                      Mensaje / aclaración
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      className="btn-revparts"
                    >
                      {sending
                        ? "Enviando..."
                        : "Enviar consulta"}
                    </Button>
                  </Col>

                </Row>

              </Form>

            </div>

          </Col>

          <Col lg={4}>

            <div className="contact-info-panel">

              <h3>
                Información de contacto
              </h3>

              <p>
                Estamos para ayudarte.
              </p>

              <div className="info-item">
                <Envelope />
                <div>
                  <strong>Email</strong>
                  <span>
                    ventas@revparts.com
                  </span>
                </div>
              </div>

              <div className="info-item">
                <Telephone />
                <div>
                  <strong>Teléfono</strong>
                  <span>
                    +54 11 1234-5678
                  </span>
                </div>
              </div>

              <div className="info-item">
                <Whatsapp />
                <div>
                  <strong>WhatsApp</strong>
                  <span>
                    Escribinos cuando quieras
                  </span>
                </div>
              </div>

              <div className="info-item">
                <GeoAlt />
                <div>
                  <strong>Ubicación</strong>
                  <span>
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </div>
  );
}