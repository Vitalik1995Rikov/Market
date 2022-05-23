import { createSlice } from '@reduxjs/toolkit';

let cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setItemsInCart, deleteItemInCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
