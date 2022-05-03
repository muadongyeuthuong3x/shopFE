import { Container } from '@mui/material';
import { cart } from 'features/cart/helpers/example.data';
import { FC } from 'react';
import ProductItem from './ProductItem';
import { Product } from '../../../constants';

export interface ProductList {
  data: Product[]
}

const ProductList: FC<ProductList> = ({data}) => {
  return (
    <Container maxWidth="xl">
      <ProductItem productList={data} />
    </Container>
  );
};

export default ProductList;
