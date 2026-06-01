import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCarrito } from "../components/CarritoContext";
import CarritoItem from "../components/CarritoItem";

export default function Carrito() {
	const { items, total, quitarDelCarrito, cambiarCantidad, vaciarCarrito } = useCarrito();

	if (!items || items.length === 0) {
		return (
			<Container className="py-5">
				<Row>
					<Col>
						<h2>Tu carrito está vacío</h2>
						<p>Agrega productos desde el catálogo.</p>
						<Link to="/productos" className="btn btn-primary">Ver productos</Link>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container className="py-5">
			<Row>
				<Col>
					<h2>Tu carrito</h2>
					<Table responsive bordered hover className="mt-3 bg-light text-dark">
						<thead>
							<tr>
								<th>Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Subtotal</th>
								<th></th>
							</tr>
						</thead>
							<tbody>
								{items.map((it) => (
									<CarritoItem key={it.id} item={it} onChangeQty={cambiarCantidad} onRemove={quitarDelCarrito} />
								))}
							</tbody>
					</Table>

					<div className="d-flex justify-content-between align-items-center mt-3">
						<div>
							<Button variant="outline-secondary" onClick={vaciarCarrito}>Vaciar carrito</Button>
						</div>
						<div>
							<strong>Total: </strong>
							<span className="fs-5">${total.toFixed(2)}</span>
							<Button variant="success" className="ms-3">Ir a pagar</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
