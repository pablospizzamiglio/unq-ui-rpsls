export const Medal = () => (
  <svg
    className="medal"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.5 16 16"
    shapeRendering="crispEdges"
  >
    <path
      stroke="#000000"
      d="M6 0h4M4 1h2M10 1h2M3 2h1M12 2h1M3 3h1M12 3h1M2 4h1M9 4h1M13 4h1M2 5h1M9 5h1M13 5h1M2 6h1M9 6h1M13 6h1M2 7h1M9 7h1M13 7h1M2 8h1M9 8h1M13 8h1M2 9h1M9 9h1M13 9h1M2 10h1M9 10h1M13 10h1M2 11h1M9 11h1M13 11h1M3 12h1M7 12h2M12 12h1M3 13h1M12 13h1M4 14h2M10 14h2M6 15h4"
    />
    <path
      stroke="#ffffff"
      d="M6 1h4M4 2h2M4 3h1M7 3h3M3 4h1M6 4h1M3 5h1M6 5h1M3 6h1M6 6h1M3 7h1M6 7h1M3 8h1M6 8h1M3 9h1M6 9h1M3 10h1M6 10h1M3 11h1M6 11h1"
    />
    <path
      stroke="#fff64d"
      d="M6 2h5M5 3h2M10 3h1M4 4h2M7 4h2M10 4h2M4 5h2M7 5h2M10 5h2M4 6h2M7 6h2M10 6h2M4 7h2M7 7h2M10 7h2M4 8h2M7 8h2M10 8h2M4 9h2M7 9h2M10 9h2M4 10h2M7 10h2M10 10h2M4 11h2M7 11h2M10 11h2M4 12h3M9 12h2M4 13h6"
    />
    <path
      stroke="#ebaa1c"
      d="M11 2h1M11 3h1M12 4h1M12 5h1M12 6h1M12 7h1M12 8h1M12 9h1M12 10h1M12 11h1M11 12h1M10 13h2M6 14h4"
    />
  </svg>
);

const Round = ({ current, max }) => {
  let color = "inherit";
  if (current >= max) {
    color = "#136743"; //"green";
  } else if (current === 0) {
    color = "gray";
  }

  return (
    <div className="medals-grid">
      <Medal />
      <div className="medal-count" style={{ color }}>
        {current}
      </div>
    </div>
  );
};

export default Round;
