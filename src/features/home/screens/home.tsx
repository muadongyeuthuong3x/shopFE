import { Box } from '@mui/material';
import { FC } from 'react';
import Banner from '../components/Banner';
import BlogList from '../components/BlogList';
import Gallery from '../components/Gallery';
import ProductList from '../components/ProductList';
import Widget from '../components/Widget';

const Homepage: FC = () => {
  return (
    <Box>
      <Banner />
      <ProductList />
      <BlogList />
      <Widget title="Khách hàng và Celina" buttonOption={false}>
        <Gallery />
      </Widget>
    </Box>
  );
};

export default Homepage;
