import ClickableCard from "components/cards/ClickableCard";
import "./cardpicker.css";

const CardPicker = ({ onChoose, choices, disabled }) => {
  const handleChoice = (choice) => {
    onChoose(choice);
  };

  return (
    <div className="card-group">
      {choices.map((card) => (
        <ClickableCard
          key={card.name}
          onClick={handleChoice}
          card={card}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default CardPicker;
