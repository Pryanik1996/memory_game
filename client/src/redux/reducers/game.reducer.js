import { GAME_START } from "../types";

const gameReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case GAME_START: {
      const { start } = payload;
      return start;
    }
    default:
      return state;
  }
};

export default gameReducer;