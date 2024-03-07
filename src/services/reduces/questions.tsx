const SET_QUESTION = "SET_QUESTION";

const defaultState = {
  items: [],
  isFetching: true,
};

export default function questionReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}

export const setQuestion = (question: any) => ({
  type: SET_QUESTION,
  payload: question,
});
