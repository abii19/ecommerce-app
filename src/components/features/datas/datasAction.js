import { INCREMENT, INCREMENT_BY_NUMBER, DECREMENT } from "../actionTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const incrementByNumber = (number) => {
  return {
    type: INCREMENT_BY_NUMBER,
    payload: number
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
