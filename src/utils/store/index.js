import { combineReducers, createStore } from "redux";
import { openReducer } from "./openReducer";
import { pageWidthReducer } from "./pageWidthReducer";
import { successReducer } from "./successReducer";

const rootReducer = combineReducers({
  open: openReducer,
  success: successReducer,
  width: pageWidthReducer,
});

export const store = createStore(rootReducer);
