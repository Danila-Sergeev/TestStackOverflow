const GET_IDQUESTION = "GET_IDQUESTION";
const LOADING_TOGGLE = "LOADING_TOGGLE";

const defaultState = {
  items: [],
  isFetching: true,
  isLoading: true,
};

export default function idQuestionReducer(state = defaultState, action: any) {
  switch (action.type) {
    case GET_IDQUESTION:
      return {
        ...state,
        items: action.payload.data.items,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}

export const getIdQuestionRed = (question: any) => ({
  type: GET_IDQUESTION,
  payload: question,
});

export const toggleLoading = (state: boolean) => ({
  type: LOADING_TOGGLE,
  payload: state,
});
