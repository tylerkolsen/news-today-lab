import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/hackerNewsReducer.js";

export default configureStore({
  reducer,
});
