export const SET_PARAMS = "SET_PARAMS";

const defaultState = {
  items: "",
  isFetching: true,
};

export default function searchReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        items: action.item.info,
      };
    default:
      return state;
  }
}
