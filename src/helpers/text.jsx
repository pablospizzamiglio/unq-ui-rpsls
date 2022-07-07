import { CHOOSE } from "./constants";

export const generateNextTurnMessage = (playerName) =>
  `${playerName} ${CHOOSE}`;
export const generateRoundWinnerMessage = (playerName) =>
  `${playerName} wins the round!`;
