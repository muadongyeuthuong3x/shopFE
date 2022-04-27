import { Box, Container, Typography } from '@mui/material';
import Logo from 'assets/image/logo.png';
import { HeaderPathEnum } from 'components/Header/constants/Header.path';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import FooterItem from './components/FooterItem';
import { CustomSupport, Information, Policy } from './constants/Footer';

export const Footer: FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: '50px',
      }}
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Link to={HeaderPathEnum.HOME}>
          <img src={Logo} alt="logo" width={150} />
        </Link>
        <Typography variant="body1" mt={3}>
          Sophisticated simplicity for the <br /> independent mind.
        </Typography>
      </Box>
      <Box>
        <FooterItem label="Policy" options={Policy} />
      </Box>
      <Box>
        <FooterItem label="Custom Support" options={CustomSupport} />
      </Box>
      <Box>
        <FooterItem label="Shop Information" options={Information} />
      </Box>
    </Container>
  );
};
