import { useEffect, useState } from "react";
import StatusBar from "./bars/StatusBar";
import ChoiceButton from "./buttons/ChoiceButton";

const Game = () => {
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundWinner, setRoundWinner] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const choices = [
    {
      name: "rock",
      src: "✊",
    },
    {
      name: "paper",
      src: "✋",
    },
    {
      name: "scissors",
      src: "✌",
    },
    {
      name: "lizard",
      src: "🤏",
    },
    {
      name: "spock",
      src: "🖖",
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
    const increase = (s) => s + 1;

    if (beats(choiceA, choiceB)) {
      setRoundWinner("Player One");
      setPlayerOneScore(increase);
    } else if (beats(choiceB, choiceA)) {
      setRoundWinner("CPU");
      setComputerScore(increase);
    } else {
      setRoundWinner("Draw");
    }
  };

  useEffect(() => {
    if (playerOneScore === 5) {
      setWinner("Player One");
      setIsGameOver(true);
    } else if (computerScore === 5) {
      setWinner("CPU");
      setIsGameOver(true);
    }
  }, [playerOneScore, computerScore]);

  const resetGame = () => {
    setPlayerOneChoice(null);
    setComputerChoice(null);
    setPlayerOneScore(0);
    setComputerScore(0);
    setRoundWinner(null);
    setWinner(null);
    setIsGameOver(false);
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
          currentHealth={2}
          maxHealth={5}
          currentMedals={0}
          maxMedals={5}
        />
      </div>

      <h1>Rock Paper Scissors Lizard Spock</h1>

      <h1>
        Score: You ({playerOneScore}) | CPU ({computerScore})
      </h1>
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
