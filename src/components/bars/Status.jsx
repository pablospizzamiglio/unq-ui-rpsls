import "./bars.css";
import Health from "./Health";
import Trophies from "./Trophies";

const Status = ({ contenderName, currentHealth, maxHealth, currentMedals }) => {
  return (
    <div className="status-bar">
      <div className="status-item">
        <div className="contender-name">{contenderName}</div>
      </div>
      <div className="status-item">
        <Health value={currentHealth} maxValue={maxHealth} />
      </div>
      <div className="status-item">
        <Trophies value={currentMedals} />
      </div>
    </div>
  );
};

export default Status;
