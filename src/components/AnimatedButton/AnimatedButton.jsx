import "./AnimatedButton.css";

const AnimatedButton = ({ className, onClick, disabled = false, children }) => {
  return (
    <button
      className={`animated-button border ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
