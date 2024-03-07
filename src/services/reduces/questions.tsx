const GET_QUESTION = "GET_QUESTION";
export const SET_QUESTION = "SET_QUESTION";

const defaultState = {
  items: [],
  sortItems: [],
  isFetching: true,
};

export default function questionReducer(state = defaultState, action: any) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        items: action.payload.items,
      };
    case SET_QUESTION:
      if (action.item.questions.length === 0) {
        console.log("Ничего не найдено или не введено");
      }
      return {
        ...state,
        sortItems: action.item.questions,
      };
    default:
      return state;
  }
}

export const getQuestions = (question: any) => ({
  type: GET_QUESTION,
  payload: question,
});
