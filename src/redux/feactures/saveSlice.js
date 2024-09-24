import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveListArr: [],
};

export const saveListSlice = createSlice({
  name: "saveList",
  initialState,
  reducers: {
    addToSaveList: (state, action) => {
      state.saveListArr.push({
        ...action.payload,
        quantity: action.payload.quantity || 1,
      });
    },
    deleteFromSaveList: (state, action) => {
      state.saveListArr = state.saveListArr.filter(
        (saveList) => saveList.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const product = state.saveListArr.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.saveListArr.find(
        (item) => item.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addToSaveList,
  deleteFromSaveList,
  increaseQuantity,
  decreaseQuantity,
} = saveListSlice.actions;
export default saveListSlice.reducer;
