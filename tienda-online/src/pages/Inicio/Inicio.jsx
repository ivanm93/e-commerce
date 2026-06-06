import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../components/Navbar/Navbar"; // reutilizamos variables y estilos base
import "./inicio.css";

export default function Inicio() {
	return (
		<main className="inicio-root">

			{/* HERO — full width */}
			      <section className="inicio-hero">
        <Container fluid className="px-4">
        		<Row className="align-items-center">
										<Col lg={{ span: 7, offset: 1 }} className="hero-identity py-5">
											<div className="hero-brand d-flex align-items-center gap-3">
												<div>
													<h1 className="inicio-title mb-1">RevParts</h1>
													<p className="revparts-tag">Repuestos originales</p>
												</div>
											</div>

											<p className="inicio-sub mt-3">Somos un emprendimiento dedicado a la venta de repuestos y accesorios automotrices: piezas originales y compatibles, asesoramiento técnico y envío rápido a todo el país.</p>

											<div className="inicio-cta mt-4">
												<Link to="/productos" className="btn btn-primary btn-lg me-2">Ver catálogo</Link>
												<Link to="/contacto" className="btn btn-outline-secondary btn-lg">Contacto</Link>
											</div>
										</Col>
									</Row>
        </Container>
      </section>

			{/* Info */}
					<section className="inicio-info py-4">
						<Container fluid className="px-4 px-lg-5">
							<Row>
							<Col md={4} className="mb-3">
								<div className="info-card">
									<h5>Envíos rápidos</h5>
									<p>Despachamos a todo el país con seguimiento en tiempo real.</p>
								</div>
							</Col>
							<Col md={4} className="mb-3">
								<div className="info-card">
									<h5>Garantía</h5>
									<p>Todos nuestros repuestos cuentan con garantía del fabricante.</p>
								</div>
							</Col>
							<Col md={4} className="mb-3">
								<div className="info-card">
									<h5>Soporte técnico</h5>
									<p>Asesoramiento profesional para elegir la pieza correcta.</p>
								</div>
							</Col>
								</Row>
							</Container>
			</section>
		</main>
	);
}
