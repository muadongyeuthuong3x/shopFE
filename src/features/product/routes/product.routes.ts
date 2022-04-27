import React from 'react';
import { RouteItem } from 'types/routes.types';
import { ProductEnumPath } from '../constants/product.path';

const PRODUCT_DETAIL_SCREEN: RouteItem = {
  id: 'product-detail-screen',
  path: ProductEnumPath.PRODUCT_DETAIL,
  component: React.lazy(() => import('../screens/product')),
};

export const PRODUCT_DETAIL_ROUTES = [PRODUCT_DETAIL_SCREEN];
