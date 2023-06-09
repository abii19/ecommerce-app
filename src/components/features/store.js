import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { datasReducer } from "./datas/datasReducer";
import { shopsReducer } from "./shops/shopsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  datas: datasReducer,
  shops: shopsReducer
});

export const store = createStore(
  reducers,
  compose(composeWithDevTools(), applyMiddleware(thunk))
);
