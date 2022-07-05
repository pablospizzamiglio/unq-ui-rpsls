import "./modal.css";

const Modal = ({ title, show, onClose, children }) => {
  return (
    <div className={`modal ${show ? "visible" : "invisible"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
