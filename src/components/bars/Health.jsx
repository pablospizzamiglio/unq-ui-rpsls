import FullHeart from "./images/red-heart_2764-fe0f.png";
import EmptyHeart from "./images/white-heart_1f90d.png";

const Heart = ({ filled, width }) => {
  let heart = <img src={EmptyHeart} alt="Full Heart" width={width} />;
  if (filled) {
    heart = <img src={FullHeart} alt="Full Heart" width={width} />;
  }
  return <div className="heart">{heart}</div>;
};

const Health = ({ current, max }) => {
  let hearts = Array(max)
    .fill()
    .map((_, index) => {
      return <Heart key={index} filled={current >= index + 1} width={32} />;
    });
  return <div className="health-bar">{hearts}</div>;
};

export default Health;
