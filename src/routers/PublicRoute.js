import React from "react";
import { Route, Redirect } from "react-router-dom";
import { firebase } from "../firebase/firebase";

var loggedIn = false;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loggedIn = true;
  }
});

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default PublicRoute;
