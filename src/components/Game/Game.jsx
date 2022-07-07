import Announcer from "components/Announcer/Announcer";
import Status from "components/bars/Status";
import Board from "components/Board/Board";
import CardPicker from "components/CardPicker/CardPicker";
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

const WELCOME = "Welcome to Rock Paper Scissors Lizard Spock!";
const CHOOSE = "Choose a card";
const TIE = "It's a tie!";
const DELAY_MS = 1500;
const increase = (i) => i + 1;
const decrease = (i) => (i > 0 ? i - 1 : 0);

const Game = ({
  onGameOver,
  playerOneName,
  playerOneTrophies,
  playerTwoName,
  playerTwoTrophies,
  vsCPU = false,
}) => {
  const MAX_HEALTH = 5;
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerOneHealth, setPlayerOneHealth] = useState(MAX_HEALTH);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(MAX_HEALTH);
  const [message, setMessage] = useState("");
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
      const timer = setTimeout(() => onGameOver(playerOneName), DELAY_MS);
      return () => clearTimeout(timer);
    } else if (playerOneHealth === 0) {
      const timer = setTimeout(() => onGameOver(playerTwoName), DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [
    playerOneHealth,
    playerTwoHealth,
    playerOneName,
    playerTwoName,
    onGameOver,
  ]);

  const resetRound = useCallback(() => {
    setPlayerOneChoice(null);
    setPlayerTwoChoice(null);
    setRound(increase);
    if (vsCPU) {
      setMessage(CHOOSE);
    } else {
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
      const timer = setTimeout(() => resetRound(), DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [
    playerOneChoice,
    playerTwoChoice,
    playerOneName,
    playerTwoName,
    round,
    resetRound,
  ]);

  return (
    <div className="game container">
      <div className="hud">
        <Status
          playerName={playerOneName}
          health={playerOneHealth}
          maxHealth={MAX_HEALTH}
          trophies={playerOneTrophies}
        />
        <Status
          playerName={playerTwoName}
          health={playerTwoHealth}
          maxHealth={MAX_HEALTH}
          trophies={playerTwoTrophies}
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
    </div>
  );
};

export default Game;
