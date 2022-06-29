import Emoji from "components/emoji/Emoji";
import "./ChoiceButton.css";

const ChoiceButton = ({ onClick, choice }) => {
  const handleOnClick = () => {
    onClick(choice.name);
  };

  return (
    <button className="button" onClick={handleOnClick}>
      <Emoji name={choice.name} code={choice.src} />
    </button>
  );
};

export default ChoiceButton;
