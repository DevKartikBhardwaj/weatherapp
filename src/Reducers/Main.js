import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  forecast: {},
};

export const mainReducer = createReducer(initialState, {
  setData: (state, action) => {
    state.forecast = action.payload;
  },
});
