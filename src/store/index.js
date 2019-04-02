import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";

import usersReducer from "./users/reducer";

const reducers = combineReducers({
  users: usersReducer,
});

const store = createStore(reducers, {}, applyMiddleware(logger, ReduxPromise));

export default store;
