import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Icon1 from 'assets/image/product/icon1.svg';
import Icon2 from 'assets/image/product/icon2.svg';
import Icon3 from 'assets/image/product/icon3.svg';
import Icon4 from 'assets/image/product/icon4.svg';

const icons = [
  {
    image: Icon1,
    title: 'giao hàng toàn quốc',
  },
  {
    image: Icon2,
    title: 'Hoàn trả miễn phí trong 10 ngày',
  },
  {
    image: Icon3,
    title: 'Bảo hành 15 ngày',
  },
  {
    image: Icon4,
    title: 'Kiểm tra chính hãng 100%',
  },
];

const ProductFeatured: FC = () => {
  return (
    <Grid container spacing={4} paddingBottom="60px">
      {icons.map((icon, index) => (
        <Grid item xl={3} lg={3} md={3} key={index}>
          <Box
            border="1px solid #e1e1e1"
            padding="20px 20px 25px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <img src={icon.image} alt={icon.title} width="35px" height="35px" />
            <Typography
              marginTop="20px"
              fontSize="12px"
              letterSpacing="3.2px"
              lineHeight={1.2}
              fontWeight={500}
              textTransform="uppercase"
            >
              {icon.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductFeatured;
