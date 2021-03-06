import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from 'features/auth/auth';
import { cartReducer } from 'features/cart/cart';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
