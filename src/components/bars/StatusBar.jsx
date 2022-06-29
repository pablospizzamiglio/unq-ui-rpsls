import "./bars.css";
import Health from "./Health";
import Victories from "./Victories";

const StatusBar = ({
  contenderName,
  currentHealth,
  maxHealth,
  currentMedals,
  maxMedals,
  mirrored,
}) => {
  return (
    <div className="status-bar">
      <div className="status-item">
        <div className="contender">{contenderName}</div>
      </div>
      <div className="status-item">
        <Health current={currentHealth} max={maxHealth} mirrored={mirrored} />
      </div>
      <div className="status-item">
        <Victories
          current={currentMedals}
          max={maxMedals}
          mirrored={mirrored}
        />
      </div>
    </div>
  );
};

export default StatusBar;
