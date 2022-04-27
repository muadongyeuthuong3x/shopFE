import React from 'react';
import { RouteItem } from 'types/routes.types';
import { FavoriteEnumPath } from '../favorite';

const FAVORITE_SCREEN: RouteItem = {
  id: 'favoritepage-screen',
  path: FavoriteEnumPath.FAVORITE,
  component: React.lazy(() => import('../screens/favorite')),
};

export const FAVORITE_ROUTES = [FAVORITE_SCREEN];
