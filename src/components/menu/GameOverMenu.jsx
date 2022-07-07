import Donut from "components/icons/Donut";
import Menu from "./Menu";
import "./menu.css";

const GameOverMenu = ({ onPlayAgainClick, onMainMenuClick, playerName }) => {
  return (
    <Menu
      onFirstButtonClick={onPlayAgainClick}
      onSecondButtonClick={onMainMenuClick}
      firstButtonLabel={"Play Again"}
      secondButtonLabel={"Main Menu"}
    >
      <Donut />
      <h1 style={{ textTransform: "uppercase" }}>{`${playerName} wins`}</h1>
      <h1>Game Over</h1>
    </Menu>
  );
};

export default GameOverMenu;
