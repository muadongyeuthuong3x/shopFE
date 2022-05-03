import { Box, Typography } from '@mui/material';
import { api } from 'api/api';
import { FC, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';

const SearchPage: FC = () => {
  const [data, setData] = useState([])
  const path= useLocation();
  const keySearch=path?.search.split("=")[1];
  useEffect(()=>{
    const getData= async()=>{
      const res =await api.get(`product/all?search=${keySearch}`);
      const convertDataType= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setData(convertDataType)
    }
    getData();
  },[])
  return (
    <Box>
      <Typography padding="48px 0" fontWeight={600} variant="h5" align="center">
        Có {data?.length} sản phẩm phù hợp với từ khoá: {keySearch}
      </Typography>
      <ProductList data={data} />
    </Box>
  );
};

export default SearchPage;
