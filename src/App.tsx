import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useTheme } from '@mui/material';
import { Global, css } from '@emotion/react';

import { Home } from './pages/Home';
import { AsteroidDetails } from './pages/AsteroidDetails';
import { BackdropState, useAppSelector } from './store';
import { BackdropLoader } from './components/BackdropLoader';
import { ErrorSnackbar } from './components/ErrorSnackbar';

export const App = () => {
  const theme = useTheme();

  const backdropOpen = useAppSelector(state => state.backdrop);

  return (
    <Fragment>
      <BackdropLoader open={backdropOpen === BackdropState.OPENED} />
      <ErrorSnackbar />

      <Global
        styles={css`
          html {
            font-size: 100%;

            ${theme.breakpoints.up('md')} {
              font-size: 90%;
            }

            @media only screen and (min-width: 1000px) {
              font-size: 100%;
            }

            @media only screen and (min-width: 1450px) {
              font-size: 110%;
            }

            ${theme.breakpoints.up('xl')} {
              font-size: 130%;
            }

            @media only screen and (min-width: 1600px) {
              font-size: 150%;
            }

            @media only screen and (min-width: 1800px) {
              font-size: 160%;
            }
          }

          ::selection {
            background-color: #ff7d8d;
            color: #2d122b;
          }
        `}
      />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lookup/:id" component={AsteroidDetails} />

        <Redirect from="/" to="/home" />
      </Switch>
    </Fragment>
  );
};
