import { Box, Breadcrumbs, Container, Pagination, Typography } from '@mui/material';
import { api } from 'api/api';
import ProductItem from 'features/home/components/ProductItem';
import { HomeEnumPath } from 'features/home/home';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BrandColumn from '../components/BrandColumn';
import BrandFilter, { FilterOption } from '../components/BrandFilter';
import BrandSort from '../components/BrandSort';

let optionFilterQuery= ''
const BrandPage: FC = () => {
  const path:any= useParams();
  const [productColumn, setProductColumn] = useState<number>(4);
  const [data, setData] = useState([]);
  const [filterOption, setFilterOption]= useState<FilterOption>({});
  const handleUpdateProductColumn = (value: number) => {
    setProductColumn(value);
  };

  const changPage=(event:any,page:number)=>{
    setFilterOption({...filterOption, page})
  }
  useEffect(()=>{
    const getData= async()=>{
      const res =await api.get(`product/all?limit=8${filterOption?.typeId?`&&typeId=${filterOption?.typeId}`:'' }${filterOption?.page?`&&page=${filterOption?.page-1}`:'' }${filterOption?.priceMax?`&&priceMax=${filterOption?.priceMax}`:'' }${filterOption?.priceMin?`&&priceMin=${filterOption?.priceMin}`:'' }${filterOption?.sizes?.length?`&&sizeId=${filterOption?.sizes.join(',')}`:'' }`);
      const convertDataType= res.data.products.rows.map((obj: any) => ({
        ...obj,
        name: obj.productName, 
        price:obj.productPrice,
        image: obj.image.split(',')
      }))
      setData(convertDataType)
    }
    if(filterOption?.typeId)
    getData();
  },[filterOption]);

  const handleChangeOption=(option: FilterOption)=>{
    setFilterOption({...option,page:1})
  }
  return (
    <Box>
      <Box
        width="100%"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: '#dbdbdb',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '16px',
            '&:hover': { color: (theme) => theme.palette.secondary.main },
          },
        }}
      >
        <Typography fontSize="40px" fontWeight={500} letterSpacing={2} marginBottom="15px">
          Thương hiệu
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1" style={{textTransform:'capitalize'}}>
            {path?.slug.split('-')[0]}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ paddingBottom: '68px' }} display="flex" justifyContent="space-between">
          <Box width="320px">
            <BrandFilter onChangeOption={handleChangeOption} />
          </Box>
          <Box
            width="calc(100% - 370px)"
            marginTop="50px"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <Box marginBottom="50px" display="flex" justifyContent="space-between" width="100%">
              <BrandColumn
                productColumn={productColumn}
                onUpdateColumn={handleUpdateProductColumn}
              />
              <BrandSort />
            </Box>
            <ProductItem productColumn={productColumn} productList={data} />
            <Box
              marginTop="40px"
              width="100%"
              sx={(theme) => ({
                '& > nav': {
                  justifyContent: 'center',
                  width: '100%',
                  display: 'flex',
                  'button.Mui-selected': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.secondary.main,
                  },
                },
              })}
            >
              <Pagination page={filterOption?.page} color="secondary" onChange={changPage} count={Math.floor(data?.length/8)+1} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandPage;
