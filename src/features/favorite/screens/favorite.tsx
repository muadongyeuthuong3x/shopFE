import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import ProductList from '../components/ProductList';

const SearchPage: FC = () => {
  return (
    <Box>
      <Typography
        padding="48px 0"
        fontWeight={600}
        variant="h5"
        align="center"
        textTransform="uppercase"
      >
        Sản phẩm yêu thích
      </Typography>
      <ProductList />
    </Box>
  );
};

export default SearchPage;
