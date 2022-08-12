import { AddItemTypes, DeleteActionTypes, States } from "./../../types/index";
import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { StatesActionTypes } from "../../types";
import {
  AddItemError,
  AddItemSuccess,
  fetchStatesError,
  fetchStatesSuccess,
} from "../action-creators/states";
import { wsConnection } from "../../https";

const DeleteItemId = (id: number) => {
  wsConnection.send(
    JSON.stringify({
      action: "delData",
      data: id,
    })
  );
};
const AddItem = (params: States) => {
  wsConnection.send(
    JSON.stringify({
      action: "addData",
      data: JSON.stringify(params),
    })
  );
};

function* FetchStatesWorker(action: any) {
  debugger;
  try {
    yield put(fetchStatesSuccess(action.payload));
  } catch (e) {
    console.log(e);
    yield put(fetchStatesError("Произошла ошибка при загрузке "));
  }
}
function* DeleteItemIDWorker(action: any) {
  try {
    debugger;
    yield call(DeleteItemId, action.payload);
  } catch (e) {
    console.log(e);
  }
}
function* AddItemWorker(action: any) {
  try {
    yield call(AddItem, action.payload);
  } catch (e) {
    yield put(AddItemError("Произошла ошибка при Добавление"));
  }
}

export function* fetchStateseWatcher() {
  yield all([takeLatest(StatesActionTypes.FETCH_STATES, FetchStatesWorker)]);
  yield all([takeLatest(DeleteActionTypes.DELETE_ITEM, DeleteItemIDWorker)]);
  yield all([takeLatest(AddItemTypes.ADD_ITEM, AddItemWorker)]);
}
