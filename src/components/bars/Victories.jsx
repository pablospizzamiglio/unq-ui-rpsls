import Emoji from "components/emoji/Emoji";

const Donut = () => {
  return (
    <div className="medals">
      <Emoji name={"donut"} code={"🍩"} />
    </div>
  );
};

const Victories = ({ current, max }) => {
  return (
    <div className="victories-bar">
      <Donut />
      <div className="victories-count">{current}</div>
    </div>
  );
};

export default Victories;
