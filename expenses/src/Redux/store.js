import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import authreducer from "../Redux/auth/reducer";
const rootReducer = combineReducers({ auth: authreducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
  console.log("inside thunk");
  if (typeof action === "function") {
    return action(dispatch, getState, args);
  }
  return next(action);
};

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk()))
);