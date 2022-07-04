import { useEffect, useState } from "react";
import StatusBar from "./bars/StatusBar";
import ChoiceButton from "./buttons/ChoiceButton";
import Lizard from "./images/lizard.png";
import Paper from "./images/paper.png";
import Rock from "./images/rock.png";
import Scissors from "./images/scissors.png";
import Spock from "./images/spock.png";

const Game = () => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [roundWinner, setRoundWinner] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOneHealth, setPlayerOneHealth] = useState(MAX_HEALTH);
  const [playerOneVictories, setPlayerOneVictories] = useState(0);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(MAX_HEALTH);
  const [playerTwoVictories, setPlayerTwoVictories] = useState(0);

  const choices = [
    {
      name: "rock",
      src: Rock,
    },
    {
      name: "paper",
      src: Paper,
    },
    {
      name: "scissors",
      src: Scissors,
    },
    {
      name: "lizard",
      src: Lizard,
    },
    {
      name: "spock",
      src: Spock,
    },
  ];

  const choiceNames = choices.map((choice) => choice.name);

  const handleChoice = (choice) => {
    const randomChoice = nextRandomChoice();
    setComputerChoice(randomChoice);
    setPlayerOneChoice(choice);
    resolveRound(choice, randomChoice);
  };

  const nextRandomChoice = () =>
    choiceNames[Math.floor(Math.random() * choiceNames.length)];

  const beats = (choiceA, choiceB) => {
    return (
      (choiceA === "scissors" && choiceB === "paper") ||
      (choiceA === "paper" && choiceB === "rock") ||
      (choiceA === "rock" && choiceB === "lizard") ||
      (choiceA === "lizard" && choiceB === "spock") ||
      (choiceA === "spock" && choiceB === "scissors") ||
      (choiceA === "scissors" && choiceB === "lizard") ||
      (choiceA === "lizard" && choiceB === "paper") ||
      (choiceA === "paper" && choiceB === "spock") ||
      (choiceA === "spock" && choiceB === "rock") ||
      (choiceA === "rock" && choiceB === "scissors")
    );
  };

  const resolveRound = (choiceA, choiceB) => {
    const decrease = (s) => (s > 0 ? s - 1 : 0);

    if (beats(choiceA, choiceB)) {
      setRoundWinner("Player One");
      setPlayerTwoHealth(decrease);
    } else if (beats(choiceB, choiceA)) {
      setRoundWinner("CPU");
      setPlayerOneHealth(decrease);
    } else {
      setRoundWinner("Draw");
    }
  };

  useEffect(() => {
    if (playerTwoHealth === 0) {
      setWinner("Player One");
      setPlayerOneVictories((s) => s + 1);
      setIsGameOver(true);
    } else if (playerOneHealth === 0) {
      setWinner("CPU");
      setPlayerTwoVictories((s) => s + 1);
      setIsGameOver(true);
    }
  }, [playerOneHealth, playerTwoHealth]);

  const resetGame = () => {
    setPlayerOneChoice(null);
    setComputerChoice(null);
    setRoundWinner(null);
    setWinner(null);
    setIsGameOver(false);
    setPlayerOneHealth(MAX_HEALTH);
    setPlayerTwoHealth(MAX_HEALTH);
  };

  if (isGameOver) {
    return (
      <div>
        <h1>Rock Paper Scissors Lizard Spock</h1>
        <h1 style={{ textTransform: "uppercase" }}>{`${winner} WINS!`}</h1>
        <button onClick={resetGame}>Play Again!</button>
      </div>
    );
  }

  return (
    <div>
      <div className="hud">
        <StatusBar
          contenderName={"Player One"}
          currentHealth={playerOneHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerOneVictories}
        />
        <StatusBar
          contenderName={"CPU"}
          currentHealth={playerTwoHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerTwoVictories}
        />
      </div>

      <h1>Rock Paper Scissors Lizard Spock</h1>

      <h1>Your Choice: {playerOneChoice}</h1>
      <h1>CPU Choice: {computerChoice}</h1>
      <h1>Round Winner: {roundWinner}</h1>

      <div className="button-group">
        {choices.map((choice, i) => (
          <ChoiceButton key={i} onClick={handleChoice} choice={choice} />
        ))}
      </div>
    </div>
  );
};

export default Game;
