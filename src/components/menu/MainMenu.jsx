import MenuButton from "components/buttons/MenuButton";
import "./menu.css";

const MainMenu = ({ onOnePlayerClick, onTwoPlayersClick }) => {
  return (
    <section className="menu">
      <div className="menu-inner">
        <h1>Rock Paper Scissors Lizard Spock</h1>
        <div className="menu-button-group">
          <MenuButton onClick={onOnePlayerClick}>1 Player</MenuButton>
          <MenuButton onClick={onTwoPlayersClick}>2 Players</MenuButton>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
