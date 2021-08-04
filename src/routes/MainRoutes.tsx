import { Switch, Route, Redirect } from 'react-router';

import ErrorPage from 'components/pages/error/ErrorPage';
import HomePage from 'components/pages/home/HomePage';

/**
 * Roter that contains main app routes
 */
const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/404" component={ErrorPage} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default MainRoutes;
