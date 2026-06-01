import { createContext, useContext, useState, useEffect } from "react";

const CarritoCtx = createContext(null);

export function CarritoProvider({ children }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		try {
			const raw = localStorage.getItem("revparts_carrito");
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) setTimeout(() => setItems(parsed), 0);
			}
		} catch {
			// ignore
		}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem("revparts_carrito", JSON.stringify(items));
		} catch {
			// ignore
		}
	}, [items]);

	function agregarAlCarrito(producto, cantidad = 1) {
		setItems((prev) => {
			const found = prev.find((it) => it.id === producto.id);
			if (found) {
				return prev.map((it) =>
					it.id === producto.id
						? { ...it, cantidad: Math.min(it.cantidad + cantidad, producto.stock) }
						: it
				);
			}
			return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }];
		});
	}

	function quitarDelCarrito(id) {
		setItems((prev) => prev.filter((it) => it.id !== id));
	}

	function cambiarCantidad(id, cantidad) {
		setItems((prev) =>
			prev
				.map((it) => (it.id === id ? { ...it, cantidad: Math.max(1, Number(cantidad) || 1) } : it))
				.filter((it) => it.cantidad > 0)
		);
	}

	function vaciarCarrito() {
		setItems([]);
	}

	const total = items.reduce((s, it) => s + it.precio * (it.cantidad || 0), 0);
	const cantidadTotal = items.reduce((s, it) => s + (it.cantidad || 0), 0);

	return (
		<CarritoCtx.Provider value={{ items, agregarAlCarrito, quitarDelCarrito, cambiarCantidad, vaciarCarrito, total, cantidadTotal }}>
			{children}
		</CarritoCtx.Provider>
	);
}

export function useCarrito() {
	const ctx = useContext(CarritoCtx);
	if (!ctx) throw new Error("useCarrito must be used within a CarritoProvider");
	return ctx;
}

export default CarritoCtx;
