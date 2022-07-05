import Modal from "components/modal/Modal";
import { useEffect, useState } from "react";
import Status from "../bars/Status";
import Board from "../board/Board";
import ClickableCard from "../cards/ClickableCard";
import Lizard from "../images/lizard.png";
import Placeholder from "../images/mrx.png";
import Paper from "../images/paper.png";
import Rock from "../images/rock.png";
import Scissors from "../images/scissors.png";
import Spock from "../images/spock.png";
import "./game.css";

const placeholderCard = {
  name: "placeholder",
  src: Placeholder,
};

const cards = [
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

const nextRandomElement = (elements) =>
  elements[Math.floor(Math.random() * elements.length)];

const nextCard = () => nextRandomElement(cards);

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

const Game = () => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(placeholderCard);
  const [computerChoice, setComputerChoice] = useState(placeholderCard);
  const [roundWinner, setRoundWinner] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOneHealth, setPlayerOneHealth] = useState(MAX_HEALTH);
  const [playerOneVictories, setPlayerOneVictories] = useState(0);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(MAX_HEALTH);
  const [playerTwoVictories, setPlayerTwoVictories] = useState(0);
  const [show, setShow] = useState(false);

  const handleChoice = (choice) => {
    const randomCard = nextCard();
    setComputerChoice(randomCard);
    setPlayerOneChoice(choice);
    resolveRound(choice, randomCard);
  };

  const resolveRound = (choiceA, choiceB) => {
    const decrease = (s) => (s > 0 ? s - 1 : 0);

    if (beats(choiceA.name, choiceB.name)) {
      setRoundWinner("Player One");
      setPlayerTwoHealth(decrease);
    } else if (beats(choiceB.name, choiceA.name)) {
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
    setPlayerOneChoice(placeholderCard);
    setComputerChoice(placeholderCard);
    setRoundWinner(null);
    setWinner(null);
    setIsGameOver(false);
    setPlayerOneHealth(MAX_HEALTH);
    setPlayerTwoHealth(MAX_HEALTH);
  };

  return (
    <div className="game">
      <div className="hud">
        <Status
          contenderName={"Player One"}
          currentHealth={playerOneHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerOneVictories}
        />
        <Status
          contenderName={"CPU"}
          currentHealth={playerTwoHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerTwoVictories}
        />
      </div>

      <Board cardA={playerOneChoice} cardB={computerChoice} />

      <h1>Round Winner: {roundWinner}</h1>

      <div className="card-group">
        {cards.map((card) => (
          <ClickableCard key={card.name} onClick={handleChoice} card={card} />
        ))}
      </div>

      <Modal
        title="Rock Paper Scissors Lizard Spock"
        show={isGameOver}
        onClose={() => resetGame()}
      >
        <p style={{ textTransform: "uppercase" }}>{`${winner} WINS!`}</p>
      </Modal>
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
    </div>
  );
};

export default Game;
