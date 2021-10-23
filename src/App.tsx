import { Redirect, Route, Switch } from 'react-router';

import { Home } from './pages/Home';
import { AsteroidDetails } from './pages/AsteroidDetails';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/lookup/:id" component={AsteroidDetails} />

      <Redirect from="/" to="/home" />
    </Switch>
  );
};
