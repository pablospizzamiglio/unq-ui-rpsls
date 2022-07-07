import MenuButton from "components/buttons/MenuButton";
import Donut from "components/icons/Donut";
import "./menu.css";

const GameOverMenu = ({ onPlayAgainClick, onMainMenuClick, playerName }) => {
  return (
    <section className="menu">
      <div className="menu-inner">
        <Donut />
        <h1 style={{ textTransform: "uppercase" }}>{`${playerName} wins`}</h1>
        <h1>Game Over</h1>
        <div className="menu-button-group">
          <MenuButton onClick={onPlayAgainClick}>Play Again</MenuButton>
          <MenuButton onClick={onMainMenuClick}>Main Menu</MenuButton>
        </div>
      </div>
    </section>
  );
};

export default GameOverMenu;
