import Health from "./Health";

const StatusBar = ({
  contenderName,
  currentHealth,
  maxHealth,
  currentRounds,
  maxRounds,
}) => {
  return (
    <div className="status">
      <Health current={currentHealth} max={maxHealth} />
      <div>{contenderName}</div>
      {/* <Round current={currentRounds} max={maxRounds} /> */}
    </div>
  );
};

export default StatusBar;
