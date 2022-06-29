export const Medal = ({ width }) => (
  <svg
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.5 7 11"
    shapeRendering="crispEdges"
  >
    <metadata>
      Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
    </metadata>
    <path
      stroke="#063823"
      d="M3 0h1M2 1h1M4 1h1M1 2h1M5 2h1M0 3h1M6 3h1M0 4h1M6 4h1M0 5h1M6 5h1M0 6h1M6 6h1M0 7h1M6 7h1M1 8h1M5 8h1M2 9h1M4 9h1M3 10h1"
    />
    <path
      stroke="#9aff54"
      d="M3 1h1M3 2h2M3 3h1M2 4h1M4 4h1M2 5h1M4 5h1M2 6h1M4 6h1M3 7h1M3 8h1"
    />
    <path stroke="#eafff6" d="M2 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M2 8h1" />
    <path stroke="#136743" d="M2 3h1M4 3h1M3 4h1M3 5h1M3 6h1M2 7h1M4 7h1" />
    <path stroke="#57c10e" d="M5 3h1M5 4h1M5 5h1M5 6h1M5 7h1M4 8h1M3 9h1" />
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Medal width={32} />
      <span style={{ color, fontSize: "3em", marginLeft: "0.25em" }}>
        {current}
      </span>
    </div>
  );
};

export default Round;
