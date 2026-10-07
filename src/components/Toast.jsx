function Toast({ message, onClose }) {
  return (
    <div className="toast">
      <div className="toast-icon">✓</div>
      <div className="toast-content">
        <strong>Success</strong>
        <span>{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default Toast;