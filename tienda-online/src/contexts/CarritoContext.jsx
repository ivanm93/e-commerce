import { createContext, useContext, useState } from 'react';

// CarritoContext
// Contexto simple de carrito en memoria usado por la aplicación. Intencionalmente
// liviano: sin persistencia (no usa localStorage) y sin llamadas a servidor.
// Expone: items (array), addItem(producto, qty), removeItem(productId), clear().
const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  // Keep cart in memory only (no persistence)
  // items: [{ producto, qty }]
  const [items, setItems] = useState([]);

  /**
   * addItem(producto, qty = 1)
   * - Añade `qty` unidades del `producto` al carrito.
   * - Si el producto ya está en el carrito, incrementa la cantidad (o decrementa si qty es negativo).
   * - Limita la cantidad total al `producto.stock` (si está definido).
   * - Si la cantidad resultante <= 0, se elimina el item del carrito.
   */
  function addItem(producto, qty = 1) {
    setItems((prev) => {
      const idx = prev.findIndex((it) => it.producto.id === producto.id);
      const stock = Number(producto.stock) || 0;
      if (idx >= 0) {
        const copy = prev.slice();
        const currentQty = Number(copy[idx].qty || 0);
        let nextQty = currentQty + qty;
        if (nextQty <= 0) {
          copy.splice(idx, 1);
        } else {
          // cap to available stock
          if (stock > 0 && nextQty > stock) nextQty = stock;
          copy[idx] = { ...copy[idx], qty: nextQty };
        }
        return copy;
      }
      if (qty <= 0) return prev;
      // adding new item: cap by stock
      const addQty = stock > 0 ? Math.min(qty, stock) : qty;
      return [...prev, { producto, qty: addQty }];
    });
  }

  /** removeItem(productId) — elimina completamente un producto del carrito */
  function removeItem(productId) {
    setItems((prev) => prev.filter((it) => it.producto.id !== productId));
  }

  /** clear() — vacía el carrito */
  function clear() {
    setItems([]);
  }

  const value = {
    items,
    addItem,
    removeItem,
    clear,
  };

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
}

export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error('useCarrito must be used inside CarritoProvider');
  return ctx;
}

export default CarritoContext;
