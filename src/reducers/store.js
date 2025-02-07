import { createStore, applyMiddleware, combineReducers } from "redux";
import ListReducer from "../reducers/contentReducers";

const store = combineReducers({
  allproduct: ListReducer,
});
// export default combineReducers({
//   contact: cantactReducer,
// });

export default store;
