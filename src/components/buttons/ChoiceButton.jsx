import "./ChoiceButton.css";

const ChoiceButton = ({ onClick, choice }) => {
  const handleOnClick = () => {
    onClick(choice.name);
  };

  const style = {
    backgroundImage: `url(${choice.src})`,
    backgroundSize: "cover",
  };

  return (
    <button className="button" onClick={handleOnClick} style={style}>
      {/* <img src={choice.src} alt={choice.name} height={32} /> */}
    </button>
  );
};

export default ChoiceButton;
