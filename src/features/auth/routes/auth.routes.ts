import React from 'react';
import { RouteItem } from 'types/routes.types';
import { AuthEnumsPath } from '../auth';

const LOGIN_SCREEN: RouteItem = {
  id: 'login-screen',
  path: AuthEnumsPath.LOGIN,
  component: React.lazy(() => import('../screens/Login/Login')),
  layout: React.lazy(() => import('../screens/Login/Login')),
  isAuthRoute: true,
};

const REGISTER_SCREEN: RouteItem = {
  id: 'register-screen',
  path: AuthEnumsPath.REGISTER,
  component: React.lazy(() => import('../screens/Register/Register')),
  layout: React.lazy(() => import('../screens/Register/Register')),
  isAuthRoute: true,
};

const FORGOT_PASSWORD_SCREEN: RouteItem = {
  id: 'forgot-password-screen',
  path: AuthEnumsPath.FORGOT_PASSWORD,
  component: React.lazy(() => import('../screens/ForgotPassword/ForgotPassword')),
  layout: React.lazy(() => import('../screens/ForgotPassword/ForgotPassword')),
  isAuthRoute: true,
};

const RECOVER_PASSWORD_SCREEN: RouteItem = {
  id: 'recover-password-screen',
  path: AuthEnumsPath.RECOVER_PASSWORD,
  component: React.lazy(() => import('../screens/RecoverPassword/RecoverPassword')),
  layout: React.lazy(() => import('../screens/RecoverPassword/RecoverPassword')),
  isAuthRoute: true,
};

const CHANGE_INFORMATION_SCREEN: RouteItem = {
  id: 'recover-password-screen',
  path: AuthEnumsPath.CHANGE_INFORMATION,
  component: React.lazy(() => import('../screens/ChangeInformation/ChangeInformation')),
  isPrivateRoute: true,
};

export const AUTH_ROUTES = [
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  RECOVER_PASSWORD_SCREEN,
  CHANGE_INFORMATION_SCREEN,
];
