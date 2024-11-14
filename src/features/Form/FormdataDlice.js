import { createSlice } from "@reduxjs/toolkit";

export const FormdataDlice = createSlice({
  name: "FormData",
  initialState: [],
  reducers: {
    setFormdata: (state,action) => {
      return action.payload; 
    },
  },
});

export const { setFormdata } = FormdataDlice.actions;
export default FormdataDlice.reducer;
