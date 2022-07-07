import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card border">
      <img src={card.src} alt={card.name} />
    </div>
  );
};

export default Card;
