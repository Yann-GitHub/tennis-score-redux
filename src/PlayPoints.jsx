import { useSelector } from "react-redux"
import { selectPlayerPoints} from "./selectors"
// import { selectPlayerHasAdvantage } from "./selectors";

// const selectPlayerHasAdvantage =(playerId) => {
    //     return (state) => state.advantage === playerId
    // };
    
    function PlayerPoints({ playerId, playerName}) {
        // const score = useSelector(state => state[playerId]);
        // const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
        const playerPoints = useSelector(selectPlayerPoints(playerId))
    
        return <div className="player-games">
            <p>{playerName}</p>
            <p>
                {playerPoints === 0
                ? "Aucun jeu gagné"
                : playerPoints === 1
                ? "1 jeu gagné"
                : `${playerPoints} jeux gagnés`}
                </p>
        </div>
    }

export default PlayerPoints