import { configureStore } from "@reduxjs/toolkit";
import saveListReducer from "../feactures/saveSlice";

export const store = configureStore({
  reducer: {
    saveList: saveListReducer,
  },
});
