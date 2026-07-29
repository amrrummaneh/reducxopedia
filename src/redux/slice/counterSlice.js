import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
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
  },
});

export const { increment, decrement, incrementMultipler, decrementMultipler } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
