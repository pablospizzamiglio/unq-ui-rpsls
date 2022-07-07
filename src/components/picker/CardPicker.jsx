import CardButton from "components/buttons/CardButton";
import "./cardpicker.css";

const CardPicker = ({ onChoose, choices, disabled }) => {
  const handleChoice = (choice) => {
    onChoose(choice);
  };

  return (
    <div className="card-group">
      {choices.map((card) => (
        <CardButton
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
