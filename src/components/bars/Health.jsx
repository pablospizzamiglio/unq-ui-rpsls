import EmptyHeart from "components/icons/EmptyHeart";
import FullHeart from "components/icons/FullHeart";

const HealthUnit = ({ filled, width }) => {
  let unit = <EmptyHeart width={width} />;
  if (filled) {
    unit = <FullHeart width={width} />;
  }
  return <div className="heart">{unit}</div>;
};

const Health = ({ current, max }) => {
  let healthUnits = Array(max)
    .fill()
    .map((_, index) => {
      return (
        <HealthUnit key={index} filled={current >= index + 1} width={32} />
      );
    });
  return <div className="health-bar">{healthUnits}</div>;
};

export default Health;
