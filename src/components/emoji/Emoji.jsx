import "./emoji.css";

const Emoji = ({ name, code }) => {
  return (
    <span role="img" aria-label={name} className="emoji">
      {code}
    </span>
  );
};

export default Emoji;
