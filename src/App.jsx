import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from './Routes';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE, FONT_FAMILY_PRIMARY } from './utils/constants';

let theme = createTheme({
  palette: {
    primary: {
      main: COLOR_PRIMARY
    },
    secondary: {
      main: COLOR_SECONDARY
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_PRIMARY
  }
});

theme = responsiveFontSizes(theme);

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
