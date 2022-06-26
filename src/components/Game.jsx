import { useState } from "react";

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

  const increase = (s) => s + 1;
  const decrease = (s) => s - 1;

  const handleChoice = (choice) => {
    const randomChoice = nextRandomChoice();
    setComputerChoice(randomChoice);
    setPlayerOneChoice(choice);
    resolveRound(choice, randomChoice);
  };

  const nextRandomChoice = () =>
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

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
    if (beats(choiceA, choiceB)) {
      setResult("You Won");
      setPlayerOneScore(increase);
      setComputerScore(decrease);
    } else if (beats(choiceB, choiceA)) {
      setResult("CPU Won");
      setPlayerOneScore(decrease);
      setComputerScore(increase);
    } else {
      setResult("Draw");
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors Lizard Spock</h1>

      <div className="button-group">
        {Object.keys(choices).map((choice) => (
          <button
            className="button"
            key={choice}
            onClick={() => handleChoice(choice)}
          >
            <span role="img" aria-label={choice} className="emoji">
              {choices[choice]}
            </span>
          </button>
        ))}
      </div>

      <h1>Your Choice: {playerOneChoice}</h1>
      <h1>CPU Choice: {computerChoice}</h1>
      <h1>
        Score: You ({playerOneScore}) - CPU ({computerScore})
      </h1>
      <h1>{result}</h1>
    </div>
  );
};

export default Game;
