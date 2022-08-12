import {
  AddAction,
  AddItemTypes,
  DeleteAction,
  DeleteActionTypes,
  SorItemTypes,
  SortAction,
  State,
  StatesAction,
  StatesActionTypes,
} from "../../types/index";
const States: State = {
  data: [],
  loading: false,
  error: null,
  sort: true,
};
export const statesReducer = (
  state = States,
  action: StatesAction | DeleteAction | AddAction | SortAction
): State => {
  switch (action.type) {
    case StatesActionTypes.FETCH_STATES:
      return {
        loading: true,
        error: null,
        data: state.data,
        sort: state.sort,
      };
    case StatesActionTypes.FETCH_STATES_SUCCESSS:
      return {
        loading: false,
        error: null,
        data: action.payload,
        sort: state.sort,
      };
    case StatesActionTypes.FETCH_STATES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: state.data,
        sort: state.sort,
      };

    case AddItemTypes.ADD_ITEM:
      return {
        loading: true,
        error: null,
        data: state.data,
        sort: state.sort,
      };

    case AddItemTypes.ADD_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: state.data,
        sort: state.sort,
      };
    case SorItemTypes.SORT_ITEM:
      return {
        ...state.data,
        loading: true,
        error: null,
        data:
          state.sort === true
            ? state.data.slice().sort((a, b) => {
                return Number(b.id) - Number(a.id);
              })
            : state.data.slice().sort((a, b) => {
                return Number(a.id) - Number(b.id);
              }),
        sort: state.sort === false ? true : false,
      };
    default:
      return state;
  }
};
