import Card from "components/cards/Card";
import Placeholder from "../images/mrx.png";
import "./board.css";

const placeholderCard = {
  name: "placeholder",
  src: Placeholder,
};

const Board = ({ cardA, cardB }) => {
  return (
    <div className="board">
      <div className="board-item">
        {cardA && cardB ? (
          <Card card={cardA} />
        ) : (
          <Card card={placeholderCard} />
        )}
      </div>
      <div className="board-item">
        {cardA && cardB ? (
          <Card card={cardB} />
        ) : (
          <Card card={placeholderCard} />
        )}
      </div>
    </div>
  );
};

export default Board;
