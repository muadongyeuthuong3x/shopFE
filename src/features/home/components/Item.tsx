import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { CustomMuiIconButton } from 'components';
import ProductModal from 'features/product/components/ProductModal';
import { FC, Fragment, memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';
import { ProductItemControl } from '../home';
import ProductSlider from './ProductSlider';
import { ToastContainer, toast } from 'react-toastify';
import { LocalKey, LocalStorage } from "ts-localstorage";
import { FcLocalStrogate, updateTim } from 'helpers/action';

export interface ProductItemProps {
  product: Product;
  productColumn?: number;
}

const ProductItem: FC<ProductItemProps> = ({ product,productColumn}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
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
                <ProductSlider imageList={product.image} />
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
                      onClick={() => { updateTim(product) }}
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
                      onClick={() => { FcLocalStrogate(product) }}
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
  );
};

export default memo(ProductItem);
