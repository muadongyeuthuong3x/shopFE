import { Box, Breadcrumbs, Container, List, ListItem, Typography } from '@mui/material';
import ContactImage from 'assets/image/contact/contact.webp';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon1 from 'assets/image/contact/icon.svg';
import Icon2 from 'assets/image/contact/icon2.svg';
import Icon3 from 'assets/image/contact/icon3.svg';
import Icon4 from 'assets/image/contact/icon4.svg';

const icons = [
  {
    image: Icon1,
    title: 'Địa chỉ',
    subtitle: 'Số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội',
  },
  {
    image: Icon2,
    title: 'Số điện thoại',
    subtitle: '+84 243 765 5121',
  },
  {
    image: Icon3,
    title: 'Thời gian làm việc',
    subtitle: 'Thứ 2 đến Thứ 7: 09:30 - 17:30',
  },
  {
    image: Icon4,
    title: 'Email',
    subtitle: 'dhcnhn@haui.edu.vn',
  },
];

const ContactPage: FC = () => {
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
          Liên hệ
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Liên hệ
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl" sx={{ marginTop: '65px' }}>
        <Box display="flex" flexDirection="row-reverse">
          <Box
            paddingRight="50px"
            paddingBottom="70px"
            sx={{ '&:hover > img': { transform: 'scale(.95)', transition: '.5s' } }}
            maxWidth="50%"
            flex="0 0 50%"
          >
            <img src={ContactImage} alt="about" width="100%" />
          </Box>
          <Box maxWidth="50%" flex="0 0 50%">
            <Typography
              fontSize="35px"
              fontWeight={500}
              color={(theme) => theme.palette.primary.contrastText}
            >
              Liên hệ với chúng tôi
            </Typography>
            <List>
              {icons.map((icon, index) => (
                <ListItem
                  sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    '&:not(:last-child)': { marginBottom: '30px' },
                  }}
                  key={index}
                >
                  <img src={icon.image} alt="" width="30px" height="30px" />
                  <Box marginLeft="35px">
                    <Typography
                      variant="body1"
                      textTransform="uppercase"
                      fontWeight={500}
                      marginBottom="10px"
                      fontSize="18px"
                      lineHeight="18px"
                    >
                      {icon.title}
                    </Typography>
                    <Typography fontSize="15px" lineHeight="20px" color="#828282">
                      {icon.subtitle}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
            <Box marginTop="30px">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4679193569323!2d105.73282371531407!3d21.05396559229226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455facd3904b5%3A0x9b4d70ebb9cf5523!2zMjk4IMSQLiBD4bqndSBEaeG7hW4sIEPhuqd1IERp4buFbiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650582488953!5m2!1svi!2s"
                width="600"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
