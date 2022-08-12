import { all, fork } from "redux-saga/effects";
import { fetchStateseWatcher } from "./states";

export function* rootWatcher() {
  yield all([fork(fetchStateseWatcher)]);
}
