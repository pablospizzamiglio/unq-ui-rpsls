import Donut from "components/icons/Donut";
import "./Trophies.css";

const Trophies = ({ value }) => {
  return (
    <div className="trophy-bar">
      <div className="trophy-item">
        <Donut />
      </div>
      <div className="trophy-item">
        <div className="trophy-count">{value}</div>
      </div>
    </div>
  );
};

export default Trophies;
