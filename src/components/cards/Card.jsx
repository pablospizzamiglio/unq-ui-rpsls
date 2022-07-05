import "./card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.src} alt={card.name} />
    </div>
  );
};

export default Card;
