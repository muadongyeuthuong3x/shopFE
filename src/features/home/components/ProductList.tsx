import { Container } from '@mui/material';
import { api } from 'api/api';
import { cart } from 'features/cart/helpers/example.data';
import { FC, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Widget from './Widget';

const ProductList: FC = () => {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    const getData= async()=>{
      const res =await api.get('product/all');
      const convertDataType= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setData(convertDataType)
    }
    getData();
  },[]);
  return (
    <Container maxWidth="xl">
      <Widget title="Sản phẩm mới" buttonTitle="load more">
        <ProductItem productList={data} />
      </Widget>
    </Container>
  );
};

export default ProductList;
