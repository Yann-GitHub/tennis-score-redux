import { useDispatch } from 'react-redux';
import { restartGame } from '../actions';
 
/**
 * Component that renders a button to reset the game.
 *
 * @returns {JSX.Element} - A button element that allows the user to reset the game.
 */

function ResetButton() {
  const dispatch = useDispatch();
 
  return (
    <button
      className='button'
      onClick={() => {
        // Au clique on exécute la fonction dispatch avec une action.
        dispatch(restartGame())
      }}
      >Reset
    </button>
  );
}

export default ResetButton