import { Box, Breadcrumbs, Container, Pagination, Typography } from '@mui/material';
import ProductItem from 'features/home/components/ProductItem';
import { HomeEnumPath } from 'features/home/home';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandColumn from '../components/BrandColumn';
import BrandFilter from '../components/BrandFilter';
import BrandSort from '../components/BrandSort';

const BrandPage: FC = () => {
  const [productColumn, setProductColumn] = useState<number>(4);

  const handleUpdateProductColumn = (value: number) => {
    setProductColumn(value);
  };

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
          <Typography fontWeight={500} variant="body1">
            Vans
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ paddingBottom: '68px' }} display="flex" justifyContent="space-between">
          <Box width="320px">
            <BrandFilter />
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
            <ProductItem productColumn={productColumn} />
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
              <Pagination color="secondary" count={5} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandPage;
