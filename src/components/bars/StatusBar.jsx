import Health from "./Health";
import Medals from "./Medals";

const StatusBar = ({
  contenderName,
  currentHealth,
  maxHealth,
  currentMedals,
  maxMedals,
}) => {
  return (
    <div className="status">
      <div>{contenderName}</div>
      <Health current={currentHealth} max={maxHealth} />
      <Medals current={currentMedals} max={maxMedals} />
    </div>
  );
};

export default StatusBar;
