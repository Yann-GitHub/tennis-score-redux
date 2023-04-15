import ACTIONS from "./actionTypes";

// Actions creator
export const setPlaying = (playing) => ({
    type: ACTIONS.SET_PLAYING,
    payload: playing
});
  
export const restartGame = () => ({
    type: ACTIONS.RESTART
});

export const pointScored = (player) => ({
  type: ACTIONS.POINT_SCORED,
  payload: { player: player },
});