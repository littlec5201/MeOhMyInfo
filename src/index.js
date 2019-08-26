import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppRouter, { history } from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "normalize.css/normalize.css";
import "./styling/styles.scss";
import { firebase } from "./firebase/firebase";

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(<AppRouter />, document.getElementById("root"));
//     hasRendered = true;
//   }
// };

ReactDOM.render(<AppRouter />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    if (history.location.pathname === "/login") {
      history.push("/");
    }
  } else {
    history.push("/login");
  }
});

serviceWorker.unregister();
