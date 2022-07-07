import Menu from "components/menu/Menu";

const MainMenu = ({ onOnePlayerClick, onTwoPlayersClick }) => {
  return (
    <Menu
      onFirstButtonClick={onOnePlayerClick}
      onSecondButtonClick={onTwoPlayersClick}
      firstButtonLabel={"1 Player"}
      secondButtonLabel={"2 Players"}
    >
      <h1>Rock Paper Scissors Lizard Spock</h1>
    </Menu>
  );
};

export default MainMenu;
