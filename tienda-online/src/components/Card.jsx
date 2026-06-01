import { Card as BCard, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ producto, onAgregar }) {
  const disponible = producto.stock > 0;
  const navigate = useNavigate();

  function handleAdd(e) {
    // prevent card click navigation
    e.stopPropagation();
    onAgregar(producto);
  }

  return (
    <BCard className="h-100 prod-card text-dark" style={{ cursor: 'pointer' }} onClick={() => navigate(`/producto/${producto.id}`)}>
      <BCard.Img variant="top" src={producto.imagen} alt={producto.nombre} style={{ height: 160, objectFit: 'cover' }} />
      <BCard.Body className="d-flex flex-column text-dark">
        <BCard.Title className="text-dark">{producto.nombre}</BCard.Title>
        <BCard.Text className="text-muted small">{producto.categoria}</BCard.Text>
        <BCard.Text className="prod-desc text-dark">{producto.descripcion}</BCard.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <strong className="prod-price text-dark">${producto.precio}</strong>
            {!disponible && <span className="badge bg-secondary ms-2">Sin stock</span>}
          </div>
          <div className="d-flex gap-2">
            <Button size="sm" variant="primary" disabled={!disponible} onClick={handleAdd}>{disponible ? 'Agregar' : 'No disponible'}</Button>
          </div>
        </div>
      </BCard.Body>
    </BCard>
  );
}
