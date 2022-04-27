import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { CustomMuiIconButton } from 'components';
import ProductModal from 'features/product/components/ProductModal';
import { FC, Fragment, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';
import { ProductItemControl } from '../home';
import ProductSlider from './ProductSlider';

export interface ProductItemProps {
  productList?: Product[];
  productColumn?: number;
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

const ProductItem: FC<ProductItemProps> = ({ productList, productColumn }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Grid container spacing={3}>
        {data?.map((product) => (
          <Fragment key={product.id}>
            <Grid
              item
              lg={12 / (productColumn as number) || 3}
              xl={12 / (productColumn as number) || 3}
              textAlign="center"
            >
              <Box
                position="relative"
                sx={{
                  '&:hover': {
                    '& > .MuiBox-root > div': {
                      visibility: 'visible',
                      transform: 'none',
                      opacity: 1,
                    },
                  },
                }}
              >
                <ProductSlider />
                <Box
                  position="absolute"
                  right={0}
                  top="calc(50% - 37px)"
                  bgcolor="transparent"
                  display="block"
                  sx={{
                    transform: 'translateY(-50%)',
                    '& div:not(:last-child)': { marginBottom: '15px' },
                  }}
                  zIndex={10}
                >
                  <Box
                    sx={{
                      transition: '.5s',
                      visibility: 'hidden',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    <CustomMuiIconButton
                      title="Add to wishlist"
                      width="46px"
                      height="46px"
                      boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                      transition=".3s"
                      margin="0 10px"
                    >
                      <FavoriteBorder />
                    </CustomMuiIconButton>
                  </Box>
                  <Box
                    sx={{
                      transition: '.5s',
                      visibility: 'hidden',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    <CustomMuiIconButton
                      title="Thêm vào giỏ hàng"
                      width="46px"
                      height="46px"
                      boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                      transition=".3s"
                      margin="0 10px"
                    >
                      <ShoppingBagOutlined />
                    </CustomMuiIconButton>
                  </Box>
                  <Box
                    sx={{
                      transition: '.5s',
                      visibility: 'hidden',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    <CustomMuiIconButton
                      title="Xem nhanh"
                      width="46px"
                      height="46px"
                      boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                      transition=".3s"
                      margin="0 10px"
                      onClick={handleOpenModal}
                    >
                      <Search />
                    </CustomMuiIconButton>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  '&>a': {
                    color: (theme) => theme.palette.primary.contrastText,
                    textDecoration: 'none',

                    '&:hover': {
                      color: (theme) => theme.palette.secondary.main,
                    },
                  },
                }}
              >
                <Link to="">{product.name}</Link>
                <Box fontSize="15px" margin="10px 015px" display="flex" justifyContent="center">
                  <Typography color="secondary" fontWeight={700} marginRight="5px">
                    ${product.price - (product.price * product.discount) / 100}
                  </Typography>
                  <Typography
                    color="#979797"
                    sx={{ textDecoration: 'line-through' }}
                    fontWeight={700}
                  >
                    ${product.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <ProductModal
              open={openModal}
              onCloseModal={handleCloseModal}
              product={product}
              key={product.id}
            />
          </Fragment>
        ))}
      </Grid>
      <ProductModal open={openModal} onCloseModal={handleCloseModal} product={data[0]} />
    </>
  );
};

export default memo(ProductItem);
