import Donut from "./images/doughnut_1f369.png";

const Victories = ({ current }) => {
  return (
    <div className="victories-bar">
      <div className="victories-item">
        <img src={Donut} alt="Full Heart" width={32} />
      </div>
      <div className="victories-item">
        <div className="victories-count">{current}</div>
      </div>
    </div>
  );
};

export default Victories;
