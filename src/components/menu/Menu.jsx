import "./menu.css";

const Menu = ({ onOnePlayerClick, onTwoPlayersClick }) => {
  return (
    <div className="menu container">
      <div className="menu-item">
        <h1>Rock Paper Scissors Lizard Spock</h1>
      </div>
      <div className="menu-item">
        <div className="menu-button-group">
          <button className="button" onClick={onOnePlayerClick}>
            1 Player
          </button>
          <button className="button" onClick={onTwoPlayersClick}>
            2 Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
