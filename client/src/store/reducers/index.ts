import { statesReducer } from "./statesReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  states: statesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
