import { CARDS, CARDS_REMOVE } from "../types";

const cardsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CARDS: {
      const { cards } = payload;
      return [...state, cards];
    }

    case CARDS_REMOVE: {
      const { cards } = payload;
      return cards;
    }
    default: {
      return state;
    }
  }
};

export default cardsReducer;
