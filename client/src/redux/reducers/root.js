import { combineReducers } from "redux";
import cardsReducer from "./cards.reducer"
import gameReducer from "./game.reducer";
import statusReducer from "./status.reducer"

const reducer = combineReducers({
  cards: cardsReducer,
  status: statusReducer,
  game: gameReducer
});

export default reducer;
