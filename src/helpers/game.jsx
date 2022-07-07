import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "./constants";

export const beats = (choiceA, choiceB) => {
  return (
    (choiceA === SCISSORS && choiceB === PAPER) ||
    (choiceA === PAPER && choiceB === ROCK) ||
    (choiceA === ROCK && choiceB === LIZARD) ||
    (choiceA === LIZARD && choiceB === SPOCK) ||
    (choiceA === SPOCK && choiceB === SCISSORS) ||
    (choiceA === SCISSORS && choiceB === LIZARD) ||
    (choiceA === LIZARD && choiceB === PAPER) ||
    (choiceA === PAPER && choiceB === SPOCK) ||
    (choiceA === SPOCK && choiceB === ROCK) ||
    (choiceA === ROCK && choiceB === SCISSORS)
  );
};
