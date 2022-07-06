import Card from "./Card";

const ClickableCard = ({ onClick, card, disabled }) => {
  const handleOnClick = () => {
    onClick(card);
  };

  return (
    <button className="card-button" onClick={handleOnClick} disabled={disabled}>
      <Card card={card} />
    </button>
  );
};

export default ClickableCard;
