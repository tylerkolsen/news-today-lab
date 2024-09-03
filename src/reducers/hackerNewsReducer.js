import axios from "axios";

const initialState = {
  loading: true,
  articles: [],
};

export const requestArticles = async (dispatch) => {
  dispatch({
    type: "PENDING",
  });
  let articles = await axios.get("/api/hacker-news").then((res) => res.data);
  dispatch({
    type: "REQUEST_ARTICLES",
    payload: articles,
  });
};

export default function hackerNewsReducer(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      console.log("PENDING hit");
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_ARTICLES":
      console.log("REQUEST_ARTICLES hit");
      return {
        loading: false,
        articles: action.payload,
      };
    default:
      return state;
  }
}
