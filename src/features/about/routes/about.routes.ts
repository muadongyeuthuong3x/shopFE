import React from 'react';
import { RouteItem } from 'types/routes.types';
import { AboutEnumPath } from '../about';

const ABOUT_US_SCREEN: RouteItem = {
  id: 'about-screen',
  path: AboutEnumPath.ABOUT_US,
  component: React.lazy(() => import('../screens/about')),
};

export const ABOUT_US_ROUTES = [ABOUT_US_SCREEN];
