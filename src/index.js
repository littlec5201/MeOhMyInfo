import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "normalize.css/normalize.css";
import "./styling/styles.scss";

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<AppRouter />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    renderApp();
    history.push("/");
  }
});

// serviceWorker.unregister();
