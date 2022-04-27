import React from 'react';
import { RouteItem } from 'types/routes.types';
import { BrandEnumPath } from '../brand';

const BRAND_SCREEN: RouteItem = {
  id: 'brand-screen',
  path: BrandEnumPath.BRAND,
  component: React.lazy(() => import('../screens/brand')),
};

export const BRAND_ROUTES = [BRAND_SCREEN];
