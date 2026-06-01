import { Container, Row, Col } from "react-bootstrap";

export default function Nosotros() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h1>Nosotros</h1>
          <p>
            Somos RevParts, una tienda especializada en repuestos originales y accesorios para vehículos.
            Nuestro objetivo es ofrecer piezas de calidad, entrega rápida y asesoramiento técnico.
          </p>
          <h3>Nuestra historia</h3>
          <p>
            Con años de experiencia en el rubro, trabajamos con las principales marcas y distribuidores
            para garantizar piezas confiables y compatibles con tu vehículo.
          </p>
        </Col>
        <Col md={4}>
          <h5>Contacto</h5>
          <p>Email: ventas@revparts.local</p>
          <p>Tel: +54 9 11 1234-5678</p>
        </Col>
      </Row>
    </Container>
  );
}
