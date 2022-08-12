export interface State {
  data: States[];
  loading: boolean;
  error: null | string;
  sort: boolean;
}
export interface States {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  age: number;
  language: string;
  color: string;
}

export interface Sort {
  [index: string]: boolean;
}

export enum StatesActionTypes {
  FETCH_STATES = "FETCH_STATES",
  FETCH_STATES_SUCCESSS = " FETCH_STATES_SUCCESSS",
  FETCH_STATES_ERROR = "FETCH_STATES_ERROR",
}
interface FetchStatesAction {
  type: StatesActionTypes.FETCH_STATES;
}

interface FetchStatesSuccsessAction {
  type: StatesActionTypes.FETCH_STATES_SUCCESSS;
  payload: States[];
}
interface FetchStatesErrorAction {
  type: StatesActionTypes.FETCH_STATES_ERROR;
  payload: string;
}
export type StatesAction =
  | FetchStatesAction
  | FetchStatesSuccsessAction
  | FetchStatesErrorAction;
// ---------------------------------------------------------------------
export enum DeleteActionTypes {
  DELETE_ITEM = "DELETE_ITEM",
}
interface DeleteSuccsesAction {
  type: DeleteActionTypes.DELETE_ITEM;
  payload: number;
}
export type DeleteAction = DeleteSuccsesAction;
// ---------------------------------------------------------------------
export enum AddItemTypes {
  ADD_ITEM = "ADD_ITEM",
  ADD_ITEM_SUCCESSS = " ADD_ITEM_SUCCESSS",
  ADD_ITEM_ERROR = "FADD_ITEM_ERROR",
}
interface AddItemAction {
  type: AddItemTypes.ADD_ITEM;
  payload: States;
}

interface AddItemSuccsessAction {
  type: AddItemTypes.ADD_ITEM_SUCCESSS;
  payload: States;
}
interface AddItemErrorAction {
  type: AddItemTypes.ADD_ITEM_ERROR;
  payload: string;
}
export type AddAction =
  | AddItemAction
  | AddItemSuccsessAction
  | AddItemErrorAction;
export enum SorItemTypes {
  SORT_ITEM = "SORT_ITEM",
}
interface SortItemAction {
  type: SorItemTypes.SORT_ITEM;
}
export type SortAction = SortItemAction;
