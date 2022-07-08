import Game from "components/Game/Game";
import GameOverMenu from "components/GameOverMenu/GameOverMenu";
import MainMenu from "components/MainMenu/MainMenu";
import {
  CPU,
  GAME_OVER,
  MAIN_MENU,
  ONE_PLAYER,
  PLAYER_ONE,
  PLAYER_TWO,
  TWO_PLAYERS,
} from "helpers/constants";
import { increase } from "helpers/numbers";
import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(MAIN_MENU);
  const [lastPlayedMode, setLastPlayedMode] = useState(null);
  const [winner, setWinner] = useState(null);
  const [playerOneTrophies, setPlayerOneTrophies] = useState(0);
  const [playerTwoTrophies, setPlayerTwoTrophies] = useState(0);
  const [cpuTrophies, setCpuTrophies] = useState(0);

  const handleGameOver = (playerName) => {
    switch (playerName) {
      case PLAYER_ONE:
        setPlayerOneTrophies(increase);
        break;
      case PLAYER_TWO:
        setPlayerTwoTrophies(increase);
        break;
      case CPU:
        setCpuTrophies(increase);
        break;
      default:
        break;
    }
    setWinner(playerName);
    setScreen(GAME_OVER);
  };

  const resetTrophies = () => {
    setPlayerOneTrophies(0);
    setPlayerTwoTrophies(0);
    setCpuTrophies(0);
  };

  const selectMode = (mode) => {
    if (lastPlayedMode !== mode) {
      resetTrophies();
    }
    setScreen(mode);
    setLastPlayedMode(mode);
  };

  return (
    <div className="App">
      {screen === MAIN_MENU && (
        <MainMenu
          onOnePlayerClick={() => selectMode(ONE_PLAYER)}
          onTwoPlayersClick={() => selectMode(TWO_PLAYERS)}
        />
      )}
      {screen === ONE_PLAYER && (
        <Game
          onGameOver={handleGameOver}
          playerOneName={PLAYER_ONE}
          playerOneTrophies={playerOneTrophies}
          playerTwoName={CPU}
          playerTwoTrophies={cpuTrophies}
          vsCPU
        />
      )}
      {screen === TWO_PLAYERS && (
        <Game
          onGameOver={handleGameOver}
          playerOneName={PLAYER_ONE}
          playerOneTrophies={playerOneTrophies}
          playerTwoName={PLAYER_TWO}
          playerTwoTrophies={playerTwoTrophies}
        />
      )}
      {screen === GAME_OVER && (
        <GameOverMenu
          onPlayAgainClick={() => setScreen(lastPlayedMode)}
          onMainMenuClick={() => {
            setScreen(MAIN_MENU);
            setLastPlayedMode(lastPlayedMode);
          }}
          playerName={winner}
        />
      )}
    </div>
  );
}

export default App;
