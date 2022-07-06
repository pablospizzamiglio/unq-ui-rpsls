import Donut from "components/icons/Donut";
import "./bars.css";

const Trophies = ({ value }) => {
  return (
    <div className="trophy-bar">
      <div className="trophy-item">
        <Donut width={32} />
      </div>
      <div className="trophy-item">
        <div className="trophy-count">{value}</div>
      </div>
    </div>
  );
};

export default Trophies;
