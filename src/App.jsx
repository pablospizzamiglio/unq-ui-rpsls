import Game from "components/game/Game";
import Menu from "components/menu/Menu";
import { useState } from "react";
import "./App.css";

function App() {
  const MAIN_MENU = "MAIN_MENU";
  const SINGLE_PLAYER = "SINGLE_PLAYER";
  const TWO_PLAYERS = "TWO_PLAYERS";
  const [mode, setMode] = useState(MAIN_MENU);

  return (
    <div className="App">
      {mode === MAIN_MENU && (
        <Menu onSinglePlayerClick={() => setMode(SINGLE_PLAYER)} />
      )}
      {mode === SINGLE_PLAYER && (
        <Game
          onMainMenuClick={() => {
            setMode(MAIN_MENU);
            console.log(MAIN_MENU);
          }}
        />
      )}
      {mode === TWO_PLAYERS && (
        <Game onMainMenuClick={() => setMode(MAIN_MENU)} />
      )}
    </div>
  );
}

export default App;
