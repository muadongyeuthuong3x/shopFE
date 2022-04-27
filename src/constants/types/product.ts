export interface Product {
  id?: string;
  name: string;
  price: number;
  discount: number;
  slug: string;
  summary: string;
  image: string[] | any;
  size: number[] | number;
  amount: number;
}
