import Donut from "components/Donut/Donut";
import Menu from "components/Menu/Menu";

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
