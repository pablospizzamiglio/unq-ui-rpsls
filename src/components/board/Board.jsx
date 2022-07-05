import Card from "components/cards/Card";
import "./board.css";

const Board = ({ cardA, cardB }) => {
  return (
    <div className="board">
      <div className="board-item">
        <Card card={cardA} />
      </div>
      <div className="board-item">
        <Card card={cardB} />
      </div>
    </div>
  );
};

export default Board;
