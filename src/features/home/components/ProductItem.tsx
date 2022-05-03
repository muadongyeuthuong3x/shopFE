import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { CustomMuiIconButton } from 'components';
import ProductModal from 'features/product/components/ProductModal';
import { FC, Fragment, memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';
import { ProductItemControl } from '../home';
import ProductSlider from './ProductSlider';
import { ToastContainer, toast } from 'react-toastify';
import { LocalKey, LocalStorage } from "ts-localstorage";
import Item from './Item';

export interface ProductItemProps {
  productList?: Product[];
  productColumn?: number;
  a?: any
}

export const productControl: ProductItemControl[] = [
  {
    id: 1,
    title: 'Thêm vào danh sách yêu thích',
    icon: <FavoriteBorder />,
  },
  {
    id: 2,
    title: 'Thêm vào giỏ hàng',
    icon: <ShoppingBagOutlined />,
  },
  {
    id: 3,
    title: 'Xem nhanh',
    icon: <Search />,
  },
];

const data: Product[] = [
  {
    id: '1',
    name: 'Shoes',
    price: 100000,
    discount: 10,
    slug: '/abc',
    summary: 'giay dep',
    image: '',
    size: [36, 27],
    amount: 100,
  },
];

const ProductItem: FC<ProductItemProps> = ({ productList, productColumn, a }) => {
  return (
    <>
      <Grid container spacing={3}>
        {productList?.map((product) => (
         <Item product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
};

export default memo(ProductItem);
