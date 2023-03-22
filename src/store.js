import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./Reducers/Main";

export const store = configureStore({
  reducer: { main: mainReducer },
});
