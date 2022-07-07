import Game from "components/game/Game";
import GameOverMenu from "components/menu/GameOverMenu";
import Menu from "components/menu/Menu";
import { useState } from "react";
import "./App.css";

function App() {
  const MAIN_MENU = "MAIN_MENU";
  const ONE_PLAYER = "ONE_PLAYER";
  const TWO_PLAYERS = "TWO_PLAYERS";
  const GAME_OVER = "GAME_OVER";
  const PLAYER_ONE = "Player 1";
  const PLAYER_TWO = "Player 2";
  const CPU = "CPU";
  const [screen, setScreen] = useState(MAIN_MENU);
  const [lastPlayedMode, setLastPlayedMode] = useState(null);
  const [gameOverMessage, setGameOverMessage] = useState(null);

  const handleGameOver = (message) => {
    setGameOverMessage(message);
    setScreen(GAME_OVER);
  };

  return (
    <div className="App">
      {screen === MAIN_MENU && (
        <Menu
          onOnePlayerClick={() => {
            setScreen(ONE_PLAYER);
            setLastPlayedMode(ONE_PLAYER);
          }}
          onTwoPlayersClick={() => {
            setScreen(TWO_PLAYERS);
            setLastPlayedMode(TWO_PLAYERS);
          }}
        />
      )}
      {screen === ONE_PLAYER && (
        <Game
          onGameOver={handleGameOver}
          playerOneName={PLAYER_ONE}
          playerTwoName={CPU}
          vsCPU
        />
      )}
      {screen === TWO_PLAYERS && (
        <Game
          onGameOver={handleGameOver}
          playerOneName={PLAYER_ONE}
          playerTwoName={PLAYER_TWO}
        />
      )}
      {screen === GAME_OVER && (
        <GameOverMenu
          message={gameOverMessage}
          onPlayAgainClick={() => setScreen(lastPlayedMode)}
          onMainMenuClick={() => {
            setScreen(MAIN_MENU);
            setLastPlayedMode(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
