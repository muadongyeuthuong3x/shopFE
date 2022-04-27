import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEY } from 'constants/storage/storage';
import { Product } from '../../../constants';

export interface CartState {
  cartList?: Product[];
}

const initialState: CartState = {
  cartList: undefined || JSON.parse(localStorage.getItem(STORAGE_KEY.CART) as string),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product[]>) => {
      state.cartList = action.payload;
      localStorage.setItem(STORAGE_KEY.CART, JSON.stringify(action.payload));
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
