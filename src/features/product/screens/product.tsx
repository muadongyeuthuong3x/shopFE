import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ProductFeatured from '../components/ProductFeatured';
import ProductInfor from '../components/ProductInfor';
import ProductSlider from '../components/ProductSlider';
import ProductTabs from '../components/ProductTabs';

const ProductDetailPage: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box
        padding="6px 0 30px 0"
        sx={{
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': { color: (theme) => theme.palette.secondary.main },
          },
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Link to="/">Vans</Link>
          <Typography color="text.primary">Shoes sport</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={4} sx={{ paddingBottom: '68px' }}>
        <Grid item xl={6} lg={6} md={6}>
          <ProductSlider />
        </Grid>
        <Grid item xl={6} lg={6} md={6} paddingLeft="90px !important">
          {/* <ProductInfor /> */}
        </Grid>
      </Grid>
      <ProductFeatured />
      <ProductTabs />
    </Container>
  );
};

export default ProductDetailPage;
