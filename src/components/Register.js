import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(e) {
    var change = e.target.value;
    this.setState(() => ({ email: change }));
  }
  handlePasswordChange(e) {
    var change = e.target.value;
    this.setState(() => ({ password: change }));
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.username || !this.state.email || !this.state.password) {
      this.setState(() => ({ error: "Please provide all fields" }));
    } else {
      this.setState(() => ({ error: "" }));
    }
  }
  render() {
    return (
      <div className="register-form">
        <form onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <h3>Register a new account</h3>
          <div>
            <label className="user-label">Username</label>
            <input
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label className="user-label">Email</label>
            <input
              name="email"
              value={this.state.email}
              type="text"
              onChange={this.handlEmailChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.handlePasswordChange}
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

export default Register;
