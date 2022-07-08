import Card from "components/Card/Card";
import { PLACEHOLDER_CARD } from "helpers/constants";
import "./Board.css";

const Board = ({ cardA, cardB }) => {
  return (
    <div className="board">
      <div className="board-item">
        {cardA && cardB ? (
          <Card card={cardA} />
        ) : (
          <Card card={PLACEHOLDER_CARD} />
        )}
      </div>
      <div className="board-item">
        {cardA && cardB ? (
          <Card card={cardB} />
        ) : (
          <Card card={PLACEHOLDER_CARD} />
        )}
      </div>
    </div>
  );
};

export default Board;
