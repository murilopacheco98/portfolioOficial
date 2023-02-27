import { combineReducers } from "@reduxjs/toolkit";
import toggle from "./toggle/ToggleSlice";
import abaPage from "./abaPage/AbaPageSlice";

export const rootReducer = combineReducers({
  toggle,
  abaPage
});
