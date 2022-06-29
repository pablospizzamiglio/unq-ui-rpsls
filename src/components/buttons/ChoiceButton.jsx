import "./ChoiceButton.css";

const ChoiceButton = ({ onClick, choice }) => {
  const handleOnClick = () => {
    onClick(choice.name);
  };

  return (
    <button className="button" onClick={handleOnClick}>
      <img src={choice.src} alt={choice.name} width={32} />
    </button>
  );
};

export default ChoiceButton;
