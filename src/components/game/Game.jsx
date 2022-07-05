import Announcer from "components/announcer/Announcer";
import Status from "components/bars/Status";
import Board from "components/board/Board";
import Modal from "components/modal/Modal";
import { useEffect, useState } from "react";
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

const playerOneLabel = "Player One";
const playerTwoLabel = "CPU";
const DEFAULT_MESSAGE = "Welcome to Rock Paper Scissors Lizard Spock!";

const Game = () => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(placeholderCard);
  const [playerOneHealth, setPlayerOneHealth] = useState(MAX_HEALTH);
  const [playerOneVictories, setPlayerOneVictories] = useState(0);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(placeholderCard);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(MAX_HEALTH);
  const [playerTwoVictories, setPlayerTwoVictories] = useState(0);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleChoice = (choice) => {
    const randomCard = nextCard();
    setPlayerTwoChoice(randomCard);
    setPlayerOneChoice(choice);
    resolveRound(choice, randomCard);
  };

  const resolveRound = (choiceA, choiceB) => {
    const decrease = (s) => (s > 0 ? s - 1 : 0);

    if (beats(choiceA.name, choiceB.name)) {
      setPlayerTwoHealth(decrease);
      setMessage(`${playerOneLabel} wins the round!`);
    } else if (beats(choiceB.name, choiceA.name)) {
      setPlayerOneHealth(decrease);
      setMessage(`${playerTwoLabel} wins the round!`);
    } else {
      setMessage(`It's a tie!`);
    }
  };

  useEffect(() => {
    if (playerTwoHealth === 0) {
      setWinner(playerOneLabel);
      setPlayerOneVictories((s) => s + 1);
      setIsGameOver(true);
    } else if (playerOneHealth === 0) {
      setWinner(playerTwoLabel);
      setPlayerTwoVictories((s) => s + 1);
      setIsGameOver(true);
    }
  }, [playerOneHealth, playerTwoHealth]);

  const resetGame = () => {
    setPlayerOneChoice(placeholderCard);
    setPlayerTwoChoice(placeholderCard);
    setWinner(null);
    setIsGameOver(false);
    setPlayerOneHealth(MAX_HEALTH);
    setPlayerTwoHealth(MAX_HEALTH);
    setMessage(DEFAULT_MESSAGE);
  };

  return (
    <div className="game">
      <div className="hud">
        <Status
          contenderName={playerOneLabel}
          currentHealth={playerOneHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerOneVictories}
        />
        <Status
          contenderName={playerTwoLabel}
          currentHealth={playerTwoHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerTwoVictories}
        />
      </div>

      <Board cardA={playerOneChoice} cardB={playerTwoChoice} />

      <Announcer message={message} />

      <div className="card-group">
        {cards.map((card) => (
          <ClickableCard key={card.name} onClick={handleChoice} card={card} />
        ))}
      </div>

      <Modal
        title="Rock Paper Scissors Lizard Spock"
        show={isGameOver}
        onConfirm={() => resetGame()}
        onClose={() => resetGame()}
      >
        <p style={{ textTransform: "uppercase" }}>{`${winner} WINS!`}</p>
      </Modal>
    </div>
  );
};

export default Game;
