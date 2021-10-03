import { CARDS_STATUS } from "../types";

const statusReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CARDS_STATUS: {
      const { status } = payload;
      return [...state, status];
    }
    default: {
      return state;
    }
  }
};

export default statusReducer;
