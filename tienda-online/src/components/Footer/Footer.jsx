import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="revparts-footer" role="contentinfo">
      <Container fluid className="revparts-footer-top">
        <Container className="revparts-footer-inner">
          <Row className="gy-3">
            <Col md={4} className="d-flex justify-content-end align-items-center">
              <div className="revparts-footer-brand">
                <div>
                  <div className="revparts-brand-name">RevParts</div>
                  <div className="revparts-brand-sub">Repuestos originales</div>
                </div>
                <div className="revparts-logo small ms-3" aria-hidden="true">⚙️</div>
              </div>
            </Col>
            <Col md={4}>
              <h6>Compañía</h6>
              <ul className="revparts-footer-links">
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h6>Soporte</h6>
              <ul className="revparts-footer-links">
                <li><Link to="/preguntas">Preguntas frecuentes</Link></li>
                <li><Link to="/garantia">Garantía</Link></li>
                <li><Link to="/envios">Envíos</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="revparts-footer-bottom">
        <Container fluid className="px-4 px-lg-5">
          <div className="revparts-footer-bottom-inner">
            <div className="revparts-footer-legal">
   <small>© {new Date().getFullYear()} RevParts · Todos los derechos reservados</small>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
