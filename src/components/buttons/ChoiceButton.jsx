import "./ChoiceButton.css";

const ChoiceButton = ({ onClick, choice }) => {
  const handleOnClick = () => {
    onClick(choice.name);
  };

  return (
    <button className="button" onClick={handleOnClick}>
      <span role="img" aria-label={choice.name} className="emoji">
        {choice.src}
      </span>
    </button>
  );
};

export default ChoiceButton;
