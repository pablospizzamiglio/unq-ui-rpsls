import "./menu.css";

const Menu = ({ onSinglePlayerClick }) => {
  return (
    <div className="menu">
      <div className="menu-item">
        <h1>Rock Paper Scissors Lizard Spock</h1>
      </div>
      <div className="menu-item">
        <div className="menu-button-group">
          <button className="button" onClick={onSinglePlayerClick}>
            1 Player
          </button>
          <button className="button" onClick={onSinglePlayerClick}>
            2 Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
