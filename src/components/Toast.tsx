import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
}

function Toast({ id, message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000); // Auto-close después de 5 segundos

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span className="toast-message">{message}</span>
        <button
          className="toast-close"
          onClick={() => onClose(id)}
          aria-label="Close toast"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;
