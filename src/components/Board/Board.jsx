import Card from "components/Card/Card";
import "./Board.css";

const placeholderCard = {
  name: "placeholder",
  src: "/images/mrx.png",
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