import "./bars.css";
import Health from "./Health";
import Victories from "./Victories";

const StatusBar = ({
  contenderName,
  currentHealth,
  maxHealth,
  currentMedals,
  maxMedals,
}) => {
  return (
    <div className="status">
      <div className="status-item">
        <div className="contender">{contenderName}</div>
      </div>
      <div className="status-item">
        <Health current={currentHealth} max={maxHealth} />
      </div>
      <div className="status-item">
        <Victories current={currentMedals} max={maxMedals} />
      </div>
    </div>
  );
};

export default StatusBar;
