import AnimatedButton from "../AnimatedButton/AnimatedButton";
import "./button.css";

const MenuButton = ({ onClick, children }) => {
  return (
    <AnimatedButton className={"menu-button"} onClick={onClick}>
      {children}
    </AnimatedButton>
  );
};

export default MenuButton;
