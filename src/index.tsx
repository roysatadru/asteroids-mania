import React from 'react';
import ReactDOM from 'react-dom';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import enLocale from 'date-fns/locale/en-US';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { App } from './App';
import { theme } from './theme';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/asteroids-mania">
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <Provider store={store}>
          <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enLocale}>
            <App />
          </LocalizationProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
