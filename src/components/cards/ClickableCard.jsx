import Card from "./Card";

const ClickableCard = ({ onClick, card }) => {
  const handleOnClick = () => {
    onClick(card);
  };

  return (
    <button className="card-button" onClick={handleOnClick}>
      <Card card={card} />
    </button>
  );
};

export default ClickableCard;
