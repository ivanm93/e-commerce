import { Container, Row, Col, Button } from "react-bootstrap";
import './nosotros.css';

export default function Nosotros() {
  return (
    <main className="nosotros-root">
      <section className="nosotros-hero">
        <Container fluid className="px-4">
          <div className="nosotros-hero-inner">
            <div className="breadcrumb">Inicio &nbsp;›&nbsp; Nosotros</div>
            <h1 className="nosotros-title">Sobre RevParts</h1>
            <p className="nosotros-lead">Más que repuestos. Soluciones confiables para mantener tu vehículo en movimiento.</p>
          </div>
        </Container>
      </section>

      <section className="nosotros-main py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="nosotros-media">
                <img src="../public/Taller.png" alt="Taller RevParts" />
              </div>
            </Col>

            <Col lg={6}>
              <h3>Pasión por los detalles, compromiso con la calidad</h3>
              <p className="lead">En RevParts nos especializamos en la comercialización de repuestos originales y accesorios para automóviles, motocicletas y utilitarios. Trabajamos con proveedores de confianza para garantizar calidad, compatibilidad y disponibilidad inmediata.</p>

              <p>Nuestro objetivo es brindarte la mejor experiencia de compra, con asesoramiento técnico y un servicio postventa que nos distingue.</p>
            </Col>
          </Row>

          <Row className="mt-5 features g-3">
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-num">+10 años</div>
                <div className="feature-sub">de experiencia en el rubro</div>
              </div>
            </Col>

            <Col md={4}>
              <div className="feature-card">
                <div className="feature-num">5000+</div>
                <div className="feature-sub">productos disponibles</div>
              </div>
            </Col>

            <Col md={4}>
              <div className="feature-card">
                <div className="feature-num">48–72 hs</div>
                <div className="feature-sub">envíos a todo el país</div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 values g-4">
            <Col md={3}>
              <div className="value-card">
                <h5>Calidad garantizada</h5>
                <p>Trabajamos con repuestos originales y marcas líderes para asegurar el máximo rendimiento.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="value-card">
                <h5>Entrega rápida</h5>
                <p>Envíos eficientes a todo el país para que recibas tus productos en tiempo y forma.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="value-card">
                <h5>Atención personalizada</h5>
                <p>Te asesoramos en cada paso para ayudarte a encontrar la pieza correcta para tu vehículo.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="value-card">
                <h5>Asesoramiento técnico</h5>
                <p>Nuestro equipo está capacitado para brindarte soporte y soluciones confiables.</p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 contact-cta">
            <Col md={8}>
              <div className="contact-card">
                <h4>¿TENÉS DUDAS? Estamos para ayudarte</h4>
                <p>Contactanos y nuestro equipo te responderá a la brevedad.</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="contact-box">
                <div className="contact-item">ventas@revparts.local</div>
                <div className="contact-item">+54 9 11 1234-5678</div>
                <Button as="a" href="/contacto" className="mt-3" variant="warning">Ir a contacto</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
