import Donut from "components/icons/Donut";

const Victories = ({ current }) => {
  return (
    <div className="victories-bar">
      <div className="victories-item">
        <Donut width={32} />
      </div>
      <div className="victories-item">
        <div className="victories-count">{current}</div>
      </div>
    </div>
  );
};

export default Victories;
