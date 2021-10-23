import React from 'react';
import ReactDOM from 'react-dom';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import enLocale from 'date-fns/locale/en-US';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/asteroids-mania">
      <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enLocale}>
        <App />
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
