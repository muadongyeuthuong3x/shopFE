import React from 'react';
import { RouteItem } from 'types/routes.types';
import { BlogEnumPath } from '../blog';

const BLOG_SCREEN: RouteItem = {
  id: 'blog-screen',
  path: BlogEnumPath.BLOG,
  component: React.lazy(() => import('../screens/blog')),
};

export const BLOG_ROUTES = [BLOG_SCREEN];
