import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import Routes from './Routes';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import Loading from './components/Loading';
import AlertMessage from './components/AlertMessage';

const theme = createTheme({})

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
  );
}

export default App
