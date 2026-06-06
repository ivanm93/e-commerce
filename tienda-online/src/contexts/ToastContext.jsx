import { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

// ToastContext
// Gestor mínimo de toasts (notificaciones) usando react-bootstrap Toast. Proporciona
// una API simple push({ title, message, bg, delay }) para mostrar mensajes transitorios.
const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // push(opts) — agrega un toast; devuelve el id del toast
  const push = useCallback((opts) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, ...opts }]);
    return id;
  }, []);

  // remove(id) — elimina un toast por id
  const remove = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ push, remove }}>
      {children}

      <ToastContainer position="top-end" className="p-3">
        {toasts.map((t) => (
          <Toast key={t.id} bg={t.bg || undefined} onClose={() => remove(t.id)} delay={t.delay || 3000} autohide>
            {t.title && <Toast.Header><strong className="me-auto">{t.title}</strong></Toast.Header>}
            <Toast.Body className={t.bg ? 'text-white' : ''}>{t.message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

// useToasts() — hook para acceder a la API de toasts (push/remove)
export function useToasts() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToasts must be used inside ToastProvider');
  return ctx;
}

export default ToastContext;
