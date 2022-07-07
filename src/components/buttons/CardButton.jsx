import AnimatedButton from "components/buttons/AnimatedButton";
import Card from "components/card/Card";
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
