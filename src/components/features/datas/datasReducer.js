import { INCREMENT, INCREMENT_BY_NUMBER, DECREMENT } from "../actionTypes";

const initialState = {
  value: 0
};

export const datasReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case INCREMENT_BY_NUMBER:
      return { value: state.value + Number(action.payload) };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
