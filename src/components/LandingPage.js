import React from "react";
import { firebase } from "../firebase/firebase";
import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
  startLogout = () => {
    firebase.auth().signOut();
    // <Redirect to="/login" />;
  };

  render() {
    return (
      <div>
        <p>fuck you dickehaed</p>
        <button onClick={this.startLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default LandingPage;
