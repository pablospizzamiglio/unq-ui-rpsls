import AnimatedButton from "../AnimatedButton/AnimatedButton";
import "./MenuButton.css";

const MenuButton = ({ onClick, children }) => {
  return (
    <AnimatedButton className={"menu-button"} onClick={onClick}>
      {children}
    </AnimatedButton>
  );
};

export default MenuButton;
