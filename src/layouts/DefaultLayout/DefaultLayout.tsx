import { Box } from '@mui/material';
import { Footer, Header } from 'components';
import React, { FC, memo } from 'react';

const DefaultLayout: FC = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Box component="main" sx={{ marginTop: '114px' }}>
      {children}
    </Box>
    <Box component="footer" marginTop="20px">
      <Footer />
    </Box>
  </Box>
);

export default memo(DefaultLayout);
