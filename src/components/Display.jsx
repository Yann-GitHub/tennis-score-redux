import { useSelector } from "react-redux";
import { selectDisplayText } from "../selectors";
 
/**
 * Component that displays text conditionally based on changes in state.
 * Don't modify the state
 *
 * @returns {JSX.Element} - The Display component.
 */


function Display() {
  // on utilise useSelector avec en paramètre une fonction selector
  // cette fonction prend en parametre le state
  // et permet de récupérer une partie du state et agit comme un watcher

    const displayText = useSelector(selectDisplayText)
    return <p className="display">{displayText}</p>;
  }


export default Display