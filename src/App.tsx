import { BrowserRouter } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './App.css'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext'
import Loading from './components/Loading'
import AlertMessage from './components/AlertMessage'
import { COLOR_BACKGROUND, COLOR_BLACK, COLOR_PRIMARY } from './utils/constants'
import { OrdersProvider } from './contexts/OrdersContext';
import { WalletProvider } from './contexts/WalletContext';
import { UserProvider } from './contexts/UserContext';
import { LoadingProvider } from './contexts/LoadingContext';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: COLOR_PRIMARY,
    },
    background: {
      paper: COLOR_BLACK,
      default: COLOR_BACKGROUND
    }
  },
})
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AlertMessageProvider>
          <OrdersProvider>
            <UserProvider>
              <WalletProvider>
                <BrowserRouter>
                  <Routes />
                  <Loading />
                  <AlertMessage />
                </BrowserRouter>
              </WalletProvider>
            </UserProvider>
          </OrdersProvider>
        </AlertMessageProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App
