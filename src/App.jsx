import Game from "components/game/Game";
import Menu from "components/menu/Menu";
import { useState } from "react";
import "./App.css";

function App() {
  const MAIN_MENU = "MAIN_MENU";
  const ONE_PLAYER = "ONE_PLAYER";
  const TWO_PLAYERS = "TWO_PLAYERS";
  const PLAYER_ONE = "Player 1";
  const PLAYER_TWO = "Player 2";
  const CPU = "CPU";
  const [mode, setMode] = useState(MAIN_MENU);

  return (
    <div className="App">
      {mode === MAIN_MENU && (
        <Menu
          onOnePlayerClick={() => setMode(ONE_PLAYER)}
          onTwoPlayersClick={() => setMode(TWO_PLAYERS)}
        />
      )}
      {mode === ONE_PLAYER && (
        <Game
          onMainMenuClick={() => setMode(MAIN_MENU)}
          playerOneName={PLAYER_ONE}
          playerTwoName={CPU}
          vsCPU
        />
      )}
      {mode === TWO_PLAYERS && (
        <Game
          onMainMenuClick={() => setMode(MAIN_MENU)}
          playerOneName={PLAYER_ONE}
          playerTwoName={PLAYER_TWO}
        />
      )}
    </div>
  );
}

export default App;
