import axios from "axios";

const PENDING = "PENDING";
const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticlesMedium = async (dispatch) => {
  dispatch({
    type: PENDING,
  });
  let articles = await axios.get("/api/medium").then((res) => res.data);
  dispatch({
    type: REQUEST_ARTICLES,
    payload: articles,
  });
};

const initialState = {
  loading: true,
  articles: [],
};

export default function mediumReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_ARTICLES:
      return {
        loading: false,
        articles: action.payload,
      };
    default:
      return state;
  }
}
