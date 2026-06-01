import { Link } from "react-router-dom";

export default function CarritoItem({ item, onChangeQty, onRemove }) {
  const subtotal = item.precio * item.cantidad;

  return (
    <tr>
      <td className="align-middle">
        <div className="d-flex align-items-center gap-3">
          <img src={item.imagen} alt={item.nombre} style={{ width: 64, height: 48, objectFit: 'cover', borderRadius: 6 }} onError={(e) => { e.currentTarget.src = '/src/assets/hero.png'; }} />
          <div>
            <Link to={`/producto/${item.id}`} className="text-dark">{item.nombre}</Link>
            <div className="text-muted small">{item.categoria}</div>
          </div>
        </div>
      </td>
      <td className="align-middle">${item.precio}</td>
      <td className="align-middle" style={{ width: 140 }}>
        <input type="number" min={1} value={item.cantidad} onChange={(e) => onChangeQty(item.id, Number(e.target.value))} className="form-control form-control-sm" />
      </td>
      <td className="align-middle">${subtotal.toFixed(2)}</td>
      <td className="align-middle">
        <button className="btn btn-sm btn-danger" onClick={() => onRemove(item.id)}>Quitar</button>
      </td>
    </tr>
  );
}
// (removed accidental self re-export that caused a circular reference)
