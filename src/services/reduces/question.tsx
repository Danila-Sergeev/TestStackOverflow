const GET_IDQUESTION = "GET_IDQUESTION";

const defaultState = {
  items: [],
  isFetching: true,
};

export default function idQuestionReducer(state = defaultState, action: any) {
  switch (action.type) {
    case GET_IDQUESTION:
      return {
        ...state,
        items: action.payload.data.items,
      };

    default:
      return state;
  }
}

export const getIdQuestionRed = (question: any) => ({
  type: GET_IDQUESTION,
  payload: question,
});
