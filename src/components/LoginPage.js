import React from "react";
import Login from "./Login";
import Register from "./Register";
import { firebase } from "../firebase/firebase";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "login",
      loggedin: ""
    };
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       // window.location = 'thank-you'
  //       let email = user.email;
  //       this.setState(() => {
  //         loggedin: email + " logged in";
  //       });
  //     } else {
  //       // window.location = ""
  //       this.setState(() => {
  //         loggedin: "";
  //       });
  //     }
  //   });
  // }
  showLogin() {
    this.setState({
      selected: "login"
    });
  }
  showRegister() {
    this.setState({
      selected: "register"
    });
  }
  isActive(val) {
    return (
      "login-register-button " +
      (val === this.state.selected ? "login-register-button-active" : "")
    );
  }
  render() {
    return (
      <div className="login-register-page">
        {this.state.loggedin && <p>{this.state.loggedin}</p>}
        <div className="login-register-button-group">
          <button className={this.isActive("login")} onClick={this.showLogin}>
            Login
          </button>
          <button
            className={this.isActive("register")}
            onClick={this.showRegister}
          >
            Register
          </button>
        </div>

        {this.state.selected === "login" && <Login />}
        {this.state.selected === "register" && <Register />}
      </div>
    );
  }
}

export default LoginPage;
