import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import CartTableList from '../components/CartTableList';

const CartPage: FC = () => {
  return (
    <>
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
          Giỏ hàng
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Giỏ hàng
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl">
        <Box padding="50px 0">
          <CartTableList />
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
