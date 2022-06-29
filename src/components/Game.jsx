import { useEffect, useState } from "react";
import StatusBar from "./bars/StatusBar";
import ChoiceButton from "./buttons/ChoiceButton";
// import PinchingHand from "./images/pinching-hand_1f90f.png";
// import RaisedFist from "./images/raised-fist_270a.png";
// import RaisedHand from "./images/raised-hand_270b.png";
// import VictoryHand from "./images/victory-hand_270c-fe0f.png";
// import VulkanSalute from "./images/vulcan-salute_1f596.png";
import Lizard from "./images/lizard.png";
import Paper from "./images/paper.png";
import Rock from "./images/rock.png";
import Scissors from "./images/scissors.png";
import Spock from "./images/spock.png";

const Game = () => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
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
      // src: RaisedFist,
      src: Rock,
    },
    {
      name: "paper",
      // src: RaisedHand,
      src: Paper,
    },
    {
      name: "scissors",
      // src: VictoryHand,
      src: Scissors,
    },
    {
      name: "lizard",
      // src: PinchingHand,
      src: Lizard,
    },
    {
      name: "spock",
      // src: VulkanSalute,
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
    const increase = (s) => s + 1;
    const decrease = (s) => s - 1;

    if (beats(choiceA, choiceB)) {
      setRoundWinner("Player One");
      setPlayerOneScore(increase);
      setPlayerTwoHealth(decrease);
    } else if (beats(choiceB, choiceA)) {
      setRoundWinner("CPU");
      setComputerScore(increase);
      setPlayerOneHealth(decrease);
    } else {
      setRoundWinner("Draw");
    }
  };

  useEffect(() => {
    if (playerOneScore === 5) {
      setWinner("Player One");
      setPlayerOneVictories((s) => s + 1);
      setIsGameOver(true);
    } else if (computerScore === 5) {
      setWinner("CPU");
      setPlayerTwoVictories((s) => s + 1);
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
