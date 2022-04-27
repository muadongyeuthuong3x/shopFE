import React from 'react';
import { RouteItem } from 'types/routes.types';
import { SearchEnumPath } from '../search';

const SEARCH_SCREEN: RouteItem = {
  id: 'searchpage-screen',
  path: SearchEnumPath.SEARCH,
  component: React.lazy(() => import('../screens/search')),
};

export const SEARCH_ROUTES = [SEARCH_SCREEN];
