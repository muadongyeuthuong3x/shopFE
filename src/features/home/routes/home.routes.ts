import React from 'react';
import { RouteItem } from 'types/routes.types';
import { HomeEnumPath } from '../home';

const HOME_SCREEN: RouteItem = {
  id: 'homepage-screen',
  path: HomeEnumPath.HOMEPAGE,
  component: React.lazy(() => import('../screens/home')),
};

export const HOME_ROUTES = [HOME_SCREEN];
