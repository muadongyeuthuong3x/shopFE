import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { STORAGE_KEY } from 'constants/storage/storage';
import { User } from '../../../constants';

export interface AuthState {
  loginLoading: boolean;
  registerLoading: boolean;
  currentUser?: User;
}

export const initialState: AuthState = {
  loginLoading: false,
  registerLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = undefined;
      localStorage.removeItem(STORAGE_KEY.TOKEN);
      localStorage.removeItem(STORAGE_KEY.USER);
    },
    login: (state, actions) => {
     state.currentUser= actions.payload.user
    },
  },
  extraReducers: {},
});

export const authActions = authSlice.actions;

export const selectLoginLoading = (state: RootState) => state.auth.loginLoading;
export const selectRegisterLoading = (state: RootState) => state.auth.registerLoading;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export const authReducer = authSlice.reducer;
