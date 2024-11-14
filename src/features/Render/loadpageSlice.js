import { createSlice } from "@reduxjs/toolkit";

export const loadpageSlice = createSlice({
  name: "load",
  initialState: false,
  reducers: {
    reloadpage: (state,action) => {
      return !state; // Direct mutation, no return needed
    },
  },
});

export const { reloadpage } = loadpageSlice.actions;
export default loadpageSlice.reducer;
