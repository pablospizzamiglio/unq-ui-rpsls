import "./menubutton.css";

const MenuButton = ({ onClick, children }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default MenuButton;
