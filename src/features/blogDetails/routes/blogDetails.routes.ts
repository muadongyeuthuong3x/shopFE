import React from 'react';
import { RouteItem } from 'types/routes.types';
import { BlogDetailsEnumPath } from '../blogDetails';

const BLOG_DETAILS_SCREEN: RouteItem = {
  id: 'blog-details-screen',
  path: BlogDetailsEnumPath.BLOG_DETAILS,
  component: React.lazy(() => import('../screens/blogDetails')),
};

export const BLOG_DETAILS_ROUTES = [BLOG_DETAILS_SCREEN];
