import DonutImage from "../images/doughnut.png";
import LizardImage from "../images/lizard.png";
import MrXImage from "../images/mrx.png";
import PaperImage from "../images/paper.png";
import FullHeartImage from "../images/red-heart.png";
import RockImage from "../images/rock.png";
import ScissorsImage from "../images/scissors.png";
import SpockImage from "../images/spock.png";
import EmptyHeartImage from "../images/white-heart.png";

export { FullHeartImage, EmptyHeartImage, DonutImage };

export const MAIN_MENU = "MAIN_MENU";
export const ONE_PLAYER = "ONE_PLAYER";
export const TWO_PLAYERS = "TWO_PLAYERS";
export const GAME_OVER = "GAME_OVER";
export const PLAYER_ONE = "Player 1";
export const PLAYER_TWO = "Player 2";
export const CPU = "CPU";

export const CHOOSE = "choose a card";
export const TIE = "it's a tie!";
export const DELAY_MS = 1500;

export const ROCK = "rock";
export const PAPER = "paper";
export const SCISSORS = "scissors";
export const LIZARD = "lizard";
export const SPOCK = "spock";

export const cards = [
  {
    name: ROCK,
    src: RockImage,
  },
  {
    name: PAPER,
    src: PaperImage,
  },
  {
    name: SCISSORS,
    src: ScissorsImage,
  },
  {
    name: LIZARD,
    src: LizardImage,
  },
  {
    name: SPOCK,
    src: SpockImage,
  },
];

export const PLACEHOLDER_CARD = {
  name: "placeholder",
  src: MrXImage,
};
