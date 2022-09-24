import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';
import RoutesComponent from './routes'
import { ColorContextProvider } from './context/color';
import { LanguageContextProvider } from './context/language';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/palette'

function App() {
  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      autoHideTimeout={1000} >
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ColorContextProvider >
            <LanguageContextProvider >
              <RoutesComponent />
            </LanguageContextProvider >
          </ColorContextProvider >
        </ThemeProvider >
      </React.StrictMode>
    </ Scrollbars>
  );
}

export default App;
