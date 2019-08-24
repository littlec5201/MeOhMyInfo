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

  handleEmail() {
    this.setState({ email });
  }

  handlePassword() {
    this.setState({ password });
  }

  handleSubmit() {}
  render() {
    return (
      <div className="login-form">
        <form>
          <h3>Sign in to your account dickhead</h3>
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
