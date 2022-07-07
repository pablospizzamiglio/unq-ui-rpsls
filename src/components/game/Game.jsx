import Announcer from "components/announcer/Announcer";
import Status from "components/bars/Status";
import Board from "components/board/Board";
import Modal from "components/modal/Modal";
import CardPicker from "components/picker/CardPicker";
import { useCallback, useEffect, useState } from "react";
import Lizard from "../images/lizard.png";
import Paper from "../images/paper.png";
import Rock from "../images/rock.png";
import Scissors from "../images/scissors.png";
import Spock from "../images/spock.png";
import "./game.css";

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

const generateNextTurnMessage = (playerName) => `${playerName}'s turn`;
const generateRoundWinnerMessage = (playerName) =>
  `${playerName} wins the round!`;
const generateMatchWinnerMessage = (playerName) => `${playerName} WINS`;

const WELCOME = "Welcome to Rock Paper Scissors Lizard Spock!";
const GAME_OVER = "Game Over";
const TIE = "It's a tie!";
const increase = (i) => i + 1;
const decrease = (i) => (i > 0 ? i - 1 : 0);

const Game = ({
  onMainMenuClick,
  playerOneName,
  playerTwoName,
  vsCPU = false,
}) => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerOneHealth, setPlayerOneHealth] = useState(MAX_HEALTH);
  const [playerOneTrophies, setPlayerOneTrophies] = useState(0);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(MAX_HEALTH);
  const [playerTwoTrophies, setPlayerTwoTrophies] = useState(0);
  const [message, setMessage] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [round, setRound] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(false);

  const handlePlayerOneChoice = (choice) => {
    setPlayerOneChoice(choice);

    if (vsCPU) {
      const randomCard = nextCard();
      setPlayerTwoChoice(randomCard);
    } else {
      setMessage(generateNextTurnMessage(playerTwoName));
      setTurn(2);
    }
  };

  const handlePlayerTwoChoice = (choice) => {
    setPlayerTwoChoice(choice);
  };

  useEffect(() => {
    if (vsCPU) {
      setMessage(WELCOME);
    } else {
      setMessage(generateNextTurnMessage(playerOneName));
    }
  }, [vsCPU, playerOneName]);

  useEffect(() => {
    if (playerTwoHealth === 0) {
      setWinner(playerOneName);
      setPlayerOneTrophies(increase);
      setIsGameOver(true);
    } else if (playerOneHealth === 0) {
      setWinner(playerTwoName);
      setPlayerTwoTrophies(increase);
      setIsGameOver(true);
    }
  }, [playerOneHealth, playerTwoHealth, playerOneName, playerTwoName]);

  const resetRound = useCallback(() => {
    setPlayerOneChoice(null);
    setPlayerTwoChoice(null);
    setRound(increase);
    if (!vsCPU) {
      setMessage(generateNextTurnMessage(playerOneName));
      setTurn(1);
    }
    setInputDisabled(false);
  }, [playerOneName, vsCPU]);

  useEffect(() => {
    if (playerOneChoice && playerTwoChoice) {
      setInputDisabled(true);
      if (beats(playerOneChoice.name, playerTwoChoice.name)) {
        setPlayerTwoHealth(decrease);
        setMessage(generateRoundWinnerMessage(playerOneName));
      } else if (beats(playerTwoChoice.name, playerOneChoice.name)) {
        setPlayerOneHealth(decrease);
        setMessage(generateRoundWinnerMessage(playerTwoName));
      } else {
        setMessage(TIE);
      }
      setTimeout(() => resetRound(), 2000);
    }
  }, [
    playerOneChoice,
    playerTwoChoice,
    playerOneName,
    playerTwoName,
    round,
    resetRound,
  ]);

  const resetGame = () => {
    setWinner(null);
    setIsGameOver(false);
    setPlayerOneHealth(MAX_HEALTH);
    setPlayerTwoHealth(MAX_HEALTH);
    resetRound();
  };

  return (
    <div className="game container">
      <div className="hud">
        <Status
          contenderName={playerOneName}
          currentHealth={playerOneHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerOneTrophies}
        />
        <Status
          contenderName={playerTwoName}
          currentHealth={playerTwoHealth}
          maxHealth={MAX_HEALTH}
          currentMedals={playerTwoTrophies}
        />
      </div>

      <Board cardA={playerOneChoice} cardB={playerTwoChoice} />

      <Announcer message={message} />

      {turn === 1 && (
        <CardPicker
          onChoose={handlePlayerOneChoice}
          choices={cards}
          disabled={inputDisabled}
        />
      )}
      {turn === 2 && (
        <CardPicker
          onChoose={handlePlayerTwoChoice}
          choices={cards}
          disabled={inputDisabled}
        />
      )}

      <Modal
        title={GAME_OVER}
        show={isGameOver}
        onConfirm={() => resetGame()}
        onClose={() => {
          resetGame();
          onMainMenuClick();
        }}
      >
        <p style={{ textTransform: "uppercase" }}>
          {generateMatchWinnerMessage(winner)}
        </p>
      </Modal>
    </div>
  );
};

export default Game;
