import {
  AddItemTypes,
  DeleteActionTypes,
  SorItemTypes,
  States,
  StatesActionTypes,
} from "../../types/index";

export const fetchStatesRequest = (payload: States[]) => ({
  type: StatesActionTypes.FETCH_STATES,
  payload,
});

export const fetchStatesSuccess = (payload: States[]) => ({
  type: StatesActionTypes.FETCH_STATES_SUCCESSS,
  payload,
});
export const fetchStatesError = (payload: string) => ({
  type: StatesActionTypes.FETCH_STATES_ERROR,
  payload,
});
// ------------------------------------------------------------------------
export const deleteItemId = (payload: number) => ({
  type: DeleteActionTypes.DELETE_ITEM,
  payload,
});
// ------------------------------------------------------------------------

export const AddItemRequest = (payload: any) => ({
  type: AddItemTypes.ADD_ITEM,
  payload,
});

export const AddItemSuccess = (payload: States) => ({
  type: AddItemTypes.ADD_ITEM_SUCCESSS,
  payload,
});
export const AddItemError = (payload: string) => ({
  type: AddItemTypes.ADD_ITEM_ERROR,
  payload,
});
// ------------------------------------------------------------------------
export const SortItemSuccess = () => ({
  type: SorItemTypes.SORT_ITEM,
});
