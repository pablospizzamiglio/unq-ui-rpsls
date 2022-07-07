import "./button.css";

const AnimatedButton = ({ className, onClick, disabled = false, children }) => {
  return (
    <button
      className={`button border ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;