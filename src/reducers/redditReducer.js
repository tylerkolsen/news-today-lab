import axios from "axios";

const initialState = {
  loading: true,
  articles: [],
};

const PENDING = "PENDING";
const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticlesReddit = async (dispatch) => {
  dispatch({
    type: PENDING,
  });
  let articles = await axios.get("/api/reddit").then((res) => res.data);
  dispatch({
    type: REQUEST_ARTICLES,
    payload: articles,
  });
};

export default function redditReducer(state = initialState, action) {
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
