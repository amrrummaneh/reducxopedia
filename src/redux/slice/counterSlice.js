import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultipler: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultipler: (state, action) => {
      state.count -= Number(action.payload);
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  decrementMultipler,
  incrementMultipler,
  resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
