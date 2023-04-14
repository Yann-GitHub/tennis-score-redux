import { useDispatch } from 'react-redux';
import { restartGame } from './store';
 
function ResetButton() {
  const dispatch = useDispatch();
 
  return <button className='button' onClick={() => {
    // (c) au clique sur le bouton on exécute la fonction 
    // dispatch avec une action.
    dispatch(restartGame())
  }} >Reset</button>
}

export default ResetButton