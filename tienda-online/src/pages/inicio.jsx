import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/Navbar.css"; // reutilizamos variables y estilos base
import "./inicio.css";

const DESTACADOS = [
	{
		id: "filtro-aceite-001",
		nombre: "Filtro de aceite Premium",
		precio: "$2.490",
		descripcion: "Compatible con múltiples modelos. Máxima filtración.",
	},
	{
		id: "pastilla-freno-002",
		nombre: "Juego de pastillas de freno",
		precio: "$8.750",
		descripcion: "Desgaste uniforme y frenada segura.",
	},
	{
		id: "bujia-003",
		nombre: "Bujía de alto rendimiento",
		precio: "$1.200",
		descripcion: "Mayor eficiencia de combustión y arranque.",
	},
	{
		id: "amortiguador-004",
		nombre: "Amortiguador delantero",
		precio: "$14.300",
		descripcion: "Confort y control en todo tipo de caminos.",
	},
];

export default function Inicio() {
	return (
		<main className="inicio-root">

			{/* HERO — full width */}
							<section className="inicio-hero">
								<Container fluid className="px-0">
									<Row className="align-items-center">
										<Col lg={6} className="hero-identity py-5">
											<div className="hero-brand d-flex align-items-center gap-3">
												<img src="/src/assets/hero.png" alt="RevParts logo" className="hero-logo" />
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
										<Col lg={6} className="hero-banner p-0 d-none d-lg-block">
											<img src="/src/assets/hero.png" alt="Banner RevParts" className="banner-img" />
										</Col>
									</Row>
								</Container>
							</section>

			{/* Categorías */}
					<section className="inicio-categorias py-4">
						<Container fluid className="px-4 px-lg-5">
							<h3 className="section-title">Categorías destacadas</h3>
							<Row className="g-3 mt-2">
							<Col xs={6} sm={4} md={3} className="cat-card-wrap">
								<div className="cat-card">Motor y transmisión</div>
							</Col>
							<Col xs={6} sm={4} md={3} className="cat-card-wrap">
								<div className="cat-card">Frenos y suspensión</div>
							</Col>
							<Col xs={6} sm={4} md={3} className="cat-card-wrap">
								<div className="cat-card">Eléctrico y electrónico</div>
							</Col>
							<Col xs={6} sm={4} md={3} className="cat-card-wrap">
								<div className="cat-card">Accesorios</div>
							</Col>
								</Row>
							</Container>
			</section>

			{/* Productos destacados */}
					<section className="inicio-destacados py-4">
						<Container fluid className="px-4 px-lg-5">
							<h3 className="section-title">Productos destacados</h3>
							<Row className="g-3 mt-3">
							{DESTACADOS.map((p) => (
								<Col key={p.id} xs={12} sm={6} md={3}>
									<article className="prod-card">
										<div className="prod-thumb">📦</div>
										<div className="prod-body">
											<h4 className="prod-name">{p.nombre}</h4>
											<p className="prod-desc">{p.descripcion}</p>
											<div className="prod-footer">
												<strong className="prod-price">{p.precio}</strong>
												<Link to={`/producto/${p.id}`} className="btn btn-sm btn-outline-light">Ver</Link>
											</div>
										</div>
									</article>
								</Col>
							))}
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
