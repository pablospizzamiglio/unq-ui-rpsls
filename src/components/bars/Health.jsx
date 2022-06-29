import Emoji from "components/emoji/Emoji";

const Heart = ({ filled }) => {
  let heart = <Emoji name={"empty-heart"} code={"🤍"} />;
  if (filled) {
    heart = <Emoji name={"full-heart"} code={"❤"} />;
  }

  return <div className="heart">{heart}</div>;
};

const Health = ({ current, max }) => {
  const heartElements = Array(max)
    .fill()
    .map((_, index) => {
      return <Heart key={index} filled={current >= index + 1} />;
    });

  return <div className="health-bar">{heartElements}</div>;
};

export default Health;
