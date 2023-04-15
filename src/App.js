import  PlayPauseButton  from "./components/PlayPauseButton";
import  Display  from "./components/Display";
import  PointScoredButton from "./components/PointScoredButton"
import  ResetButton from "./components/ResetButton"
import  PlayerScore from "./components/PlayerScore";
import  PlayerPoints from "./components/PlayPoints";

function App() {
  return (
    <div>
      <PlayerPoints playerId="player1" playerName={"Player 1"} />
      <PlayerPoints playerId="player2" playerName={"Player 2"} />
      <Display />
      <PlayerScore playerId="player1" playerName={"Player 1"} />
      <PlayerScore playerId="player2" playerName={"Player 2"} />
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}

export default App;
