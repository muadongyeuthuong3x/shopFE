import { Container } from '@mui/material';
import { cart } from 'features/cart/helpers/example.data';
import { FC } from 'react';
import ProductItem from './ProductItem';

const ProductList: FC = () => {
  return (
    <Container maxWidth="xl">
      <ProductItem productList={cart} />
    </Container>
  );
};

export default ProductList;
