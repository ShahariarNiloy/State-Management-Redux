import { counterReducer } from "./counterConfig/counter.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterState: counterReducer,
});

export default rootReducer;
