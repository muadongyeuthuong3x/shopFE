import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterWrapper from 'routes/RouterWrapper';
import { themeOptions } from 'styles/theme';

const theme = createTheme(themeOptions);

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <RouterWrapper />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
