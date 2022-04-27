import { ABOUT_US_ROUTES } from 'features/about/about';
import { AUTH_ROUTES } from 'features/auth/auth';
import { BLOG_ROUTES } from 'features/blog/blog';
import { BLOG_DETAILS_ROUTES } from 'features/blogDetails/blogDetails';
import { BRAND_ROUTES } from 'features/brand/brand';
import { CART_ROUTES } from 'features/cart/cart';
import { CONTACT_ROUTES } from 'features/contact/contact';
import { FAVORITE_ROUTES } from 'features/favorite/favorite';
import { HOME_ROUTES } from 'features/home/home';
import { PRODUCT_DETAIL_ROUTES } from 'features/product/product';
import { SEARCH_ROUTES } from 'features/search/search';

export const ROOT_ROUTE = '/';
export const AUTH_ROUTE = '/login';

export const ROUTE_LIST = [
  ...AUTH_ROUTES,
  ...HOME_ROUTES,
  ...PRODUCT_DETAIL_ROUTES,
  ...BRAND_ROUTES,
  ...ABOUT_US_ROUTES,
  ...CONTACT_ROUTES,
  ...CART_ROUTES,
  ...BLOG_ROUTES,
  ...BLOG_DETAILS_ROUTES,
  ...SEARCH_ROUTES,
  ...FAVORITE_ROUTES,
];
