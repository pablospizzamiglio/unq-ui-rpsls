import "./Card.css";

const Card = ({ card, showTitle = false }) => {
  return (
    <div className="card border">
      <img className="card-image" src={card.src} alt={card.name} />
      {showTitle && <p className="card-title">{card.name}</p>}
    </div>
  );
};

export default Card;
