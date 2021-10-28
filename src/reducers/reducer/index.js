import { combineReducers } from "redux";
import userReducer from "./userReducer";
import componentReducer from "./componentReducer";

const reducers = combineReducers({
  user: userReducer,
  component: componentReducer,
});

export default reducers;
