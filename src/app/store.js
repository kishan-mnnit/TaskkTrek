import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/Todo/todoSlice";
// import userReducer from "../features/User/userSlice";
import searchbarSlice from "../features/Filters/searchbarSlice"
import filterKeySlice from "../features/Filters/filterKeySlice"
import loadpageSlice  from "../features/Render/loadpageSlice";
import FormdataDlice from "../features/Form/FormdataDlice";
export const store = configureStore({
  reducer: {
    filterkey: filterKeySlice,
    searchkey: searchbarSlice,
    load:loadpageSlice,
    FormData:FormdataDlice
  },
});