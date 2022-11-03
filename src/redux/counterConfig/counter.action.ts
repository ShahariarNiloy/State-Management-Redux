import { Counter } from "./counter.types";

export const increment = () => {
  return {
    type: Counter.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: Counter.DECREMENT,
  };
};

export const reset = () => {
  return {
    type: Counter.RESET,
  };
};

export const incrementByValue = (payload: number) => {
  return {
    type: Counter.INCREMENT_BY_VALUE,
    payload,
  };
};

export const decrementByValue = (payload: number) => {
  return {
    type: Counter.DECREMENT_BY_VALUE,
    payload,
  };
};
