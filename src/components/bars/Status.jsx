import Trophies from "components/Trophies/Trophies";
import "./bars.css";
import Health from "./Health";

const Status = ({ playerName, health, maxHealth, trophies }) => {
  return (
    <div className="status-bar">
      <div className="status-item">
        <div className="contender-name">{playerName}</div>
      </div>
      <div className="status-item">
        <Health value={health} maxValue={maxHealth} />
      </div>
      <div className="status-item">
        <Trophies value={trophies} />
      </div>
    </div>
  );
};

export default Status;
