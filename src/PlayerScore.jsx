import { useSelector } from "react-redux"
import { selectPlayerHasAdvantage } from "./selectors";
import { selectPlayerScore } from "./selectors";
import { selectPointBeforeWin } from "./selectors"

// const selectPlayerHasAdvantage =(playerId) => {
//     return (state) => state.advantage === playerId
// };

function PlayerScore({ playerId, playerName}) {
    // const score = useSelector(state => state[playerId]);
    const score = useSelector(selectPlayerScore(playerId));
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId))

    return <div className="player-score">
        <p>
            {playerName}
            {pointsBeforeWin === null
          ? ""
          : ` (encore ${pointsBeforeWin} ${
              pointsBeforeWin > 1 ? "points" : "point"
            })`}
            </p>
        <p>{(hasAdvantage ? "advantage " : "") + score}</p>
    </div>
}

export default PlayerScore