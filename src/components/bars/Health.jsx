import EmptyHeart from "components/icons/EmptyHeart";
import FullHeart from "components/icons/FullHeart";
import "./bars.css";

const HealthUnit = ({ filled, width }) => {
  let unit = <EmptyHeart width={width} />;
  if (filled) {
    unit = <FullHeart width={width} />;
  }
  return <div className="health-unit">{unit}</div>;
};

const Health = ({ value, maxValue }) => {
  let healthUnits = Array(maxValue)
    .fill()
    .map((_, index) => {
      return <HealthUnit key={index} filled={value >= index + 1} width={32} />;
    });
  return <div className="health-bar">{healthUnits}</div>;
};

export default Health;
