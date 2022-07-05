import Donut from "components/icons/Donut";
import "./bars.css";

const Trophies = ({ current }) => {
  return (
    <div className="trophy-bar">
      <div className="trophy-item">
        <Donut width={32} />
      </div>
      <div className="trophy-item">
        <div className="trophy-count">{current}</div>
      </div>
    </div>
  );
};

export default Trophies;
