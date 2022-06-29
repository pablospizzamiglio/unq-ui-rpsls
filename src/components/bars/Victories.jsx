import Donut from "./images/doughnut_1f369.png";

const Victories = ({ current, max, mirrored }) => {
  let indicators = [
    <img src={Donut} alt="Full Heart" width={32} />,
    <div className="victories-count">{current}</div>,
  ];

  if (mirrored) {
    indicators.reverse();
  }

  return <div className="victories-bar">{indicators}</div>;
};

export default Victories;
