import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import AboutImage from 'assets/image/about/about.png';
import AboutIcon from 'assets/image/about/about.svg';
import Icon1 from 'assets/image/about/aboutIcon.svg';
import Icon2 from 'assets/image/about/aboutIcon2.svg';
import Icon3 from 'assets/image/about/aboutIcon3.svg';
import Icon4 from 'assets/image/about/aboutIcon4.svg';

const icons = [
  {
    image: Icon1,
    title: 'miễn phí giao hàng',
  },
  {
    image: Icon2,
    title: 'Thanh toán bảo mật',
  },
  {
    image: Icon3,
    title: 'Trả hàng trong 15 ngày',
  },
  {
    image: Icon4,
    title: 'Hỗ trợ 24/7',
  },
];

const AboutUsPage: FC = () => {
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
          Giới thiệu
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Giới thiệu
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl" sx={{ marginTop: '65px' }}>
        <Box display="flex">
          <Box
            paddingRight="50px"
            paddingBottom="70px"
            sx={{ '&:hover > img': { transform: 'scale(.95)', transition: '.5s' } }}
            maxWidth="50%"
            flex="0 0 50%"
          >
            <img src={AboutImage} alt="about" width="100%" />
          </Box>
          <Box maxWidth="50%" flex="0 0 50%">
            <Typography
              fontSize="35px"
              fontWeight={600}
              color={(theme) => theme.palette.primary.contrastText}
            >
              Câu chuyện của chúng tôi
            </Typography>
            <Typography fontSize="20px" marginTop="25px">
              Celina được thành lập từ niềm đam mê Sneaker người mà yêu thích nền văn hóa SÁT MẶT
              ĐẤT. Nơi giao lưu học hỏi và mua bán các sản phẩm Sneaker Authentic 100%.
            </Typography>
            <Box marginTop="30px" display="flex" justifyContent="center">
              <iframe
                width="480"
                height="315"
                src="https://www.youtube.com/embed/N4cQpfMILKc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        </Box>
        <Box textAlign="center">
          <img src={AboutIcon} alt="icon" width="110px" height="110px" />
          <Grid container spacing={4} paddingBottom="60px" marginTop="30px">
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
                  <img src={icon.image} alt={icon.title} width="60px" height="60px" />
                  <Typography
                    marginTop="20px"
                    fontSize="18px"
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
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
