import { Brand } from '../../../constants';

export const sizeOptions = [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 42, 43];
export const sort = [
  {
    title: 'Alphabetically, A-Z',
    value: 'name.asc',
  },
  {
    title: 'Alphabetically, Z-A',
    value: 'name.desc',
  },
  {
    title: 'Price, high to low',
    value: 'price.desc',
  },
  {
    title: 'Price, low to high',
    value: 'price.asc',
  },
];
export const column = [2, 3, 4];
export const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 100,
    label: '100',
  },
  {
    value: 150,
    label: '150',
  },
  {
    value: 200,
    label: '200',
  },
];

//example data
export const type: Brand[] = [
  {
    id: 1,
    name: 'Vans',
    slug: '/vans',
    image: '',
  },
  {
    id: 2,
    name: 'Converse',
    slug: '/converse',
    image: '',
  },
  {
    id: 3,
    name: 'Nike',
    slug: '/nike',
    image: '',
  },
];
