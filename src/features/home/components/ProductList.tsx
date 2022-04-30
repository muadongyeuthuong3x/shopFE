import { Container } from '@mui/material';
import { api } from 'api/api';
import { cart } from 'features/cart/helpers/example.data';
import { FC, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Widget from './Widget';

const ProductList: FC = () => {
  const [newProductData, setNewProductData] = useState([]);
  const [saleProductData, setSaleProductData] = useState([]);
  const [newProductPage, setNewProductPage] = useState(0);
  const [saleProductPage, setSaleProductPage] = useState(0);
  
  useEffect(()=>{
    const getNewProduct= async()=>{
      const res =await api.get('product/all?limit=4&&page='+newProductPage);
      const convertDataType:never[]= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }));
      setNewProductData(pre=>[ ...convertDataType,...pre])
    }
   
    getNewProduct();
  },[newProductPage]);

  useEffect(()=>{
    const getSaleProduct= async()=>{
      const res =await api.get('product/all?sale=1&&page='+saleProductPage);
      const convertDataType:never[]= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setSaleProductData(pre=>[ ...convertDataType,...pre])
    }
    getSaleProduct();
  },[saleProductPage]);

  const showMoreNewProduct=(newProductPage:number)=>{
    setNewProductPage(newProductPage)
  }
  const showMoreSaleProduct=(saleProductPage:number)=>{
    setSaleProductPage(saleProductPage)
  }
  return (
    <Container maxWidth="xl">
      <Widget title="Sản phẩm mới" buttonTitle="load more" onShowMore={showMoreNewProduct}>
        <ProductItem productList={newProductData} />
      </Widget>
      <Widget title="Sản giảm giá" buttonTitle="load more"  onShowMore={showMoreSaleProduct}>
        <ProductItem productList={saleProductData} />
      </Widget>
    </Container>
  );
};

export default ProductList;
