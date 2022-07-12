import { BrowserRouter } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Routes from './Routes';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import Loading from './components/Loading';
import AlertMessage from './components/AlertMessage';

let theme = createTheme({})
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertMessageProvider>
        <BrowserRouter>
          <Routes />
          <Loading />
          <AlertMessage />
        </BrowserRouter>
      </AlertMessageProvider>
    </ThemeProvider>
  )
}

export default App
