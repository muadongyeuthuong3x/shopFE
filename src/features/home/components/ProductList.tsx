import { Container } from '@mui/material';
import { api } from 'api/api';
import { cart } from 'features/cart/helpers/example.data';
import { FC, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Widget from './Widget';

const ProductList: FC = () => {
  const [newProductData, setNewProductData] = useState([]);
  const [saleProductData, setSaleProductData] = useState([]);
  
  useEffect(()=>{
    const getNewProduct= async()=>{
      const res =await api.get('product/all?limit=4');
      const convertDataType= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setNewProductData(convertDataType)
    }
    const getSaleProduct= async()=>{
      const res =await api.get('product/all?sale=1');
      const convertDataType= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setSaleProductData(convertDataType)
    }
    getNewProduct();
    getSaleProduct();
  },[]);
  return (
    <Container maxWidth="xl">
      <Widget title="Sản phẩm mới" buttonTitle="load more">
        <ProductItem productList={newProductData} />
      </Widget>
      <Widget title="Sản giảm giá" buttonTitle="load more">
        <ProductItem productList={saleProductData} />
      </Widget>
    </Container>
  );
};

export default ProductList;
