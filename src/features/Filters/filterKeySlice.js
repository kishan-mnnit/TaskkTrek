import { createSlice } from "@reduxjs/toolkit";

export const filterKeySlice = createSlice({
  name: "filterkey",
  initialState: "All",
  reducers: {
    setfilterkey: (state, action) => {
      // Directly mutate the state without returning anything
      return action.payload;  // No need to return the state, just mutate it directly
    },
  },
});

export const { setfilterkey } = filterKeySlice.actions;
export default filterKeySlice.reducer;
