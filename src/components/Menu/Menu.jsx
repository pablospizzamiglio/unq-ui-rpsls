import MenuButton from "components/MenuButton/MenuButton";
import "./menu.css";

const Menu = ({
  onFirstButtonClick,
  onSecondButtonClick,
  firstButtonLabel,
  secondButtonLabel,
  children,
}) => {
  return (
    <section className="menu">
      <div className="menu-inner">
        {children}
        <div className="menu-button-group">
          <MenuButton onClick={onFirstButtonClick}>
            {firstButtonLabel}
          </MenuButton>
          <MenuButton onClick={onSecondButtonClick}>
            {secondButtonLabel}
          </MenuButton>
        </div>
      </div>
    </section>
  );
};

export default Menu;
