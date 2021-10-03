import { GAME_START } from "../types";

export const startGame = (start) => ({
  type: GAME_START,
  payload: {
    start,
  },
});
