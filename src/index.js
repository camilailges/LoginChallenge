import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Main from 'styles/elements/Main';
import Reset from 'styles/generic/Reset';
import Box from 'components/Box/Box';
import Login from 'views/Login/Login';


const Theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: "#3E83FF"
    },
    secondary: {
      main: "#28DC8E"
    }
  },
  shape: {
    borderRadius: 8
  }
}))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Reset />
      <Main>
        <Box>
          <Login />
        </Box>
      </Main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);