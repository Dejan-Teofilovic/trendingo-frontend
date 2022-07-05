import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from './Routes';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { LoadingProvider } from './contexts/LoadingContext';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AlertMessageProvider>
          <Router>
            <Routes />
          </Router>
        </AlertMessageProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
