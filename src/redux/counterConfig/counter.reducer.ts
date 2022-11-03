import { AnyAction } from "redux";
import { Counter } from "./counter.types";
interface CounterState {
  count: number;
}
const initialCounterState: CounterState = {
  count: 0,
};

export const counterReducer = (
  state = initialCounterState,
  action: AnyAction
) => {
  switch (action.type) {
    case Counter.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Counter.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Counter.INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case Counter.DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case Counter.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
