import AnimatedButton from "components/AnimatedButton/AnimatedButton";
import Card from "components/Card/Card";
import "./button.css";

const CardButton = ({ onClick, card, disabled }) => {
  const handleOnClick = () => {
    onClick(card);
  };

  return (
    <AnimatedButton
      className={"card-button"}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <Card card={card} />
    </AnimatedButton>
  );
};

export default CardButton;
