// (a) on import useDispatch depuis react-redux
import { useDispatch } from 'react-redux';
import { pointScored } from './store';
 
function PointScoredButton({playerId, children}) {
  // (b) on utilise le hooks useDispatch dans notre composant
  // pour récupérer la fonction dispatch de redux
  const dispatch = useDispatch();
 
  return <button className='button' onClick={() => {
    // (c) au clique sur le bouton on exécute la fonction 
    // dispatch avec une action.
    // const currentPlayer = playerId;
    // const otherPlayer = playerId === "player1" ? "player2" : "player1"
    dispatch(pointScored(playerId))
  }} >{children}</button>
}

export default PointScoredButton