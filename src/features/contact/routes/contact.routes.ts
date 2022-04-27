import React from 'react';
import { RouteItem } from 'types/routes.types';
import { ContactEnumPath } from '../contact';

const CONTACT_SCREEN: RouteItem = {
  id: 'contact-screen',
  path: ContactEnumPath.CONTACT,
  component: React.lazy(() => import('../screens/contact')),
};

export const CONTACT_ROUTES = [CONTACT_SCREEN];
