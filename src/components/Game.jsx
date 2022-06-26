import { useEffect, useState } from "react";

const Game = () => {
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState(null);

  const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌",
    lizard: "🤏",
    spock: "🖖",
  };

  const computerChoices = Object.keys(choices);

  const handleChoice = (choice) => {
    setPlayerOneChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    setComputerChoice(randomChoice);
  };

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

  useEffect(() => {
    if (beats(playerOneChoice, computerChoice)) {
      setResult("Player One Wins");
      setPlayerOneScore(playerOneScore + 1);
      setComputerScore(computerScore - 1);
    } else if (beats(computerChoice, playerOneChoice)) {
      setResult("Computer Wins");
      setPlayerOneScore(playerOneScore - 1);
      setComputerScore(computerScore + 1);
    } else {
      setResult("It's a tie!");
    }
  }, [playerOneChoice, computerChoice]);

  return (
    <div>
      <h1>Rock Paper Scissors Lizard Spock</h1>

      <div className="button-group">
        {Object.keys(choices).map((key, i) => (
          <button
            className="button"
            key={key}
            onClick={() => handleChoice(key)}
          >
            <span role="img" aria-label={key} className="emoji">
              {choices[key]}
            </span>
          </button>
        ))}
      </div>

      <h1>Player One Choice: {playerOneChoice}</h1>
      <h1>Computer Choice: {computerChoice}</h1>
      <h1>
        Score: P1 ({playerOneScore}) - CPU ({computerScore})
      </h1>
      <h1>{result}</h1>
    </div>
  );
};

export default Game;
