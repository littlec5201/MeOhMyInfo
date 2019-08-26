import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/LoginPage";
import LandingPage from "../components/LandingPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/" component={LandingPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
