import { Product } from '../../../constants';

export const cart: Product[] = [
  {
    name: 'Product 1',
    price: 50,
    discount: 5,
    slug: '/product-1',
    summary: 'This is my product 1',
    image: require('assets/image/product.png'),
    size: 36,
    amount: 5,
  },
  {
    name: 'Product 2',
    price: 150,
    discount: 20,
    slug: '/product-2',
    summary: 'This is my product 2',
    image: require('assets/image/product.png'),
    size: 37,
    amount: 3,
  },
  {
    name: 'Product 3',
    price: 100,
    discount: 10,
    slug: '/product-3',
    summary: 'This is my product 3',
    image: require('assets/image/product.png'),
    size: 36.5,
    amount: 1,
  },
  {
    name: 'Product 4',
    price: 200,
    discount: 15,
    slug: '/product-4',
    summary: 'This is my product 4',
    image: require('assets/image/product.png'),
    size: 41,
    amount: 2,
  },
];
