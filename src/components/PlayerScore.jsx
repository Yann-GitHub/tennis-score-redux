import { useSelector } from "react-redux"
import {
    selectPlayerHasAdvantage,
    selectPlayerScore,
    selectPointBeforeWin,
} from "../selectors";

/**
 * Component that displays a player's score and other related information.
 *
 * @param {Object} props - The props object that contains playerId and playerName.
 * @param {string} props.playerId - The id of the player whose score is being displayed.
 * @param {string} props.playerName - The name of the player whose score is being displayed.
 * @returns {JSX.Element} - The PlayerScore component.
 */

function PlayerScore({ playerId, playerName}) {

    const score = useSelector(selectPlayerScore(playerId));
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId))

    return (
    <div className="player-score">
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
    );
}

export default PlayerScore