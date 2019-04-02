import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";

import todosReducer from "./todos/reducer";

const reducers = combineReducers({
  todos: todosReducer,
});

const store = createStore(reducers, {}, applyMiddleware(logger, ReduxPromise));

export default store;
