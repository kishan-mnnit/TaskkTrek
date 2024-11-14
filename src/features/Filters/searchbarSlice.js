import { createSlice } from "@reduxjs/toolkit";

export const searchbarSlice = createSlice({
  name: "searchkey",
  initialState: "",
  reducers: {
    setSearchkey: (state, action) => {
      // Directly mutate the state
       return action.payload;  // this should work without returning anything
    },
  },
});

export const { setSearchkey } = searchbarSlice.actions;
export default searchbarSlice.reducer;
