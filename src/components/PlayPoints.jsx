import { useSelector } from "react-redux"
import { selectPlayerPoints} from "../selectors"

/**
 * Component that displays the number of games won by a player.
 *     
 * @param {Object} props - The props object containing the playerId and playerName of the player.
 * @param {string} props.playerId - The id of the player whose score is being displayed.
 * @param {string} props.playerName - The name of the player whose score is being displayed.
 * @returns {JSX.Element} - A div element containing the player's name and the number of games they've won.
 */
    
function PlayerPoints({ playerId, playerName}) {
        
const playerPoints = useSelector(selectPlayerPoints(playerId))
    
return (
    <div className="player-games">
        <p>{playerName}</p>
        <p>
            {playerPoints === 0
            ? "Aucun jeu gagné"
            : playerPoints === 1
            ? "1 jeu gagné"
            : `${playerPoints} jeux gagnés`}
             </p>
    </div>
    );
}

export default PlayerPoints