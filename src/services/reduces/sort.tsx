export const SET_SORT = "SET_SORT";

const defaultState = {
  items: "",
  isFetching: true,
};

export default function sortReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        items: action.item.arr,
      };
    default:
      return state;
  }
}
