import "./Announcer.css";

const Announcer = ({ message }) => {
  return (
    <div className="announcer border">
      <div className="announcer-item">
        <p className="announcer-message">{message}</p>
      </div>
    </div>
  );
};

export default Announcer;
