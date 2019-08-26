import React from "react";
import { firebase } from "../firebase/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState(() => ({ error: "Please provide all fields" }));
    } else {
      this.setState(() => ({ error: "" }));
      var self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(userData) {
          self.handleAuthChange();
        })
        .catch(function(error) {
          // Handle Errors here.
          if (error.code || error.message) {
            var errorCode = error.code + " | " + error.message;
            self.setState(() => {
              error: errorCode;
            });
          }
          // ...
        });
    }
  }
  handleAuthChange(e) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // window.location = 'thank-you'
        let email = user.email;
        console.log(email + " logged in");
      } else {
        // window.location = ""
        console.log("not logged in");
      }
    });
  }
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h3>Sign in to your account</h3>
          {this.state.error && (
            <p className="login-form-error">{this.state.error}</p>
          )}
          <div>
            <label className="user-label">Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleEmail}
              type="text"
            />
          </div>
          <div>
            <label className="user-label">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handlePassword}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
