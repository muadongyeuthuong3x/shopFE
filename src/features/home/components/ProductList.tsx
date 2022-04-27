import { Container } from '@mui/material';
import { cart } from 'features/cart/helpers/example.data';
import { FC } from 'react';
import ProductItem from './ProductItem';
import Widget from './Widget';

const ProductList: FC = () => {
  return (
    <Container maxWidth="xl">
      <Widget title="Sản phẩm mới" buttonTitle="load more">
        <ProductItem productList={cart} />
      </Widget>
    </Container>
  );
};

export default ProductList;
