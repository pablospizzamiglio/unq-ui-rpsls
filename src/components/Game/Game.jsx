import Announcer from "components/Announcer/Announcer";
import Board from "components/Board/Board";
import CardPicker from "components/CardPicker/CardPicker";
import Status from "components/Status/Status";
import { useCallback, useEffect, useState } from "react";
import "./Game.css";

const cards = [
  {
    name: "rock",
    src: "/images/rock.png",
  },
  {
    name: "paper",
    src: "/images/paper.png",
  },
  {
    name: "scissors",
    src: "/images/scissors.png",
  },
  {
    name: "lizard",
    src: "/images/lizard.png",
  },
  {
    name: "spock",
    src: "/images/spock.png",
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

const CHOOSE = "choose a card";
const TIE = "it's a tie!";
const DELAY_MS = 1500;

const generateNextTurnMessage = (playerName) => `${playerName} ${CHOOSE}`;
const generateRoundWinnerMessage = (playerName) =>
  `${playerName} wins the round!`;

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
      setMessage(CHOOSE);
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
