import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PublicRoute from "./PublicRoute";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
