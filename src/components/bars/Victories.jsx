import Donut from "./images/doughnut_1f369.png";

const Victories = ({ current, max }) => {
  return (
    <div className="victories-bar">
      <img src={Donut} alt="Full Heart" width={32} />
      <div className="victories-count">{current}</div>
    </div>
  );
};

export default Victories;
