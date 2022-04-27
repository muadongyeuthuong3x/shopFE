import { FacebookOutlined, Pinterest, Twitter } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import ChooseSizeImage from 'assets/image/sizes.png';
import { CustomMuiIconButton } from 'components';
import ProductItem from 'features/home/components/ProductItem';
import Widget from 'features/home/components/Widget';
import { FC, Fragment, useState } from 'react';
import ProductComment from './ProductComment';
import ProductDescription from './ProductDescription';

const titles: string[] = ['Mô tả sản phẩm', 'Hướng dẫn chọn size', 'Đánh giá'];
const icons = [
  {
    title: 'Twitter',
    icon: <Twitter />,
  },
  {
    title: 'Facebook',
    icon: <FacebookOutlined />,
  },
  {
    title: 'Pinterest',
    icon: <Pinterest />,
  },
];

const ProductTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <Box
        padding="25px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px solid #e4e4e4"
        borderTop="1px solid #e4e4e4"
      >
        {titles.map((title, index) => (
          <Button
            variant="text"
            key={title}
            sx={{ padding: 0 }}
            onClick={() => setActiveTab(index)}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              letterSpacing="1.6px"
              marginRight="35px"
              textTransform="uppercase"
              sx={(theme) => ({
                cursor: 'pointer',
                color: activeTab === index ? theme.palette.primary.contrastText : '#969696',
                position: 'relative',

                '&::after': {
                  borderBottom: `2px solid ${theme.palette.secondary.main}`,
                  bottom: 0,
                  left: 0,
                  content: '""',
                  position: 'absolute',
                  transform: activeTab === index ? 'scale(1)' : 'scale(0)',
                  transition: 'all .3s linear 0s',
                  width: '100%',
                },

                '&:hover::after': {
                  transform: 'scale(1)',
                },
              })}
            >
              {title}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box padding="40px 0 30px">
        <Container maxWidth="lg">
          {activeTab === 0 ? (
            <ProductDescription />
          ) : activeTab === 1 ? (
            <Box textAlign="center">
              <img src={ChooseSizeImage} alt="choose-size" />
            </Box>
          ) : (
            <ProductComment />
          )}
        </Container>
      </Box>
      <Box
        padding="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px solid #e4e4e4"
        borderTop="1px solid #e4e4e4"
        marginBottom="30px"
      >
        {icons.map((icon, index) => (
          <Fragment key={index}>
            <CustomMuiIconButton
              width="40px"
              height="40px"
              border="1px solid #e2e2e2"
              margin="0 15px 0 0"
              title={icon.title}
            >
              {icon.icon}
            </CustomMuiIconButton>
          </Fragment>
        ))}
      </Box>
      <Widget title="Sản phẩm liên quan" buttonOption={false}>
        <ProductItem />
      </Widget>
    </>
  );
};

export default ProductTabs;
