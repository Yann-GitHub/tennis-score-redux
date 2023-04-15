
import { useStore, useSelector } from 'react-redux';
import { autoPlay } from './store';
import { selectGameIsPlaying } from './selectors';

 
function PlayPauseButton() {

  // on utilise le hook useStore dans notre composant
  // pour récupérer le store de redux
  const store = useStore();
  const playing = useSelector(selectGameIsPlaying)
 
  return (
  <button
  className='button'
  onClick={() => {
    autoPlay(store)
  }}
  >
    {playing ? "Jeu en cours..." : "Jouer"}
    </button>
  );
}

export default PlayPauseButton