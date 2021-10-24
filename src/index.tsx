import React from 'react';
import ReactDOM from 'react-dom';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import enLocale from 'date-fns/locale/en-US';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { App } from './App';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/asteroids-mania">
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enLocale}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
