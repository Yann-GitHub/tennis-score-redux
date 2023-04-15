import { useDispatch } from 'react-redux';
import { pointScored } from '../actions';
 
/**
 * Component that renders a button that allows a player to score a point.
 *
 * @param {Object} props - The props object containing the playerId and children of the component.
 * @returns {JSX.Element} - A button element that allows the player to score a point.
 */

function PointScoredButton({playerId, children}) {
  // on utilise le hook useDispatch dans notre composant
  // pour récupérer la fonction dispatch de redux
  const dispatch = useDispatch();
 
  return (
  <button
    className='button'
    onClick={() => {
    // Au clique on exécute la fonction dispatch avec une action
    dispatch(pointScored(playerId));
    }}
  >{children}
  </button>
  );
}

export default PointScoredButton