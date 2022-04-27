import React from 'react';
import { RouteItem } from 'types/routes.types';
import { CartEnumPath } from '../cart';

const CART_SCREEN: RouteItem = {
  id: 'cart-screen',
  path: CartEnumPath.CART,
  component: React.lazy(() => import('../screens/cart')),
  isPrivateRoute: true,
};

export const CART_ROUTES = [CART_SCREEN];
