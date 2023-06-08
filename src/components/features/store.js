import { createStore } from "redux";
import { combineReducers } from "redux";
import { datasReducer } from "./datas/datasReducer";

const reducers = combineReducers({
  datas: datasReducer
});

export const store = createStore(reducers);
