import React from 'react';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleUsernameChange(e) {
    var change = e.target.value;
    this.setState(() => ({"username": change}));
  }
  handleEmailChange(e) {
    var change = e.target.value;
    this.setState(() => ({"email": change}));
  }
  handlePasswordChange(e) {
    var change = e.target.value;
    this.setState(() => ({"password": change}));

  }
  handleAddOption(e) {
    e.preventDefault();
    if (!this.state.username || !this.state.email || !this.state.password) {
      this.setState(() => ({error: 'Please provide all fields'}));
    }
    else
    {
      this.setState(() => ({error: ''}));
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }
      }
      // var url = `http://localhost:3000/users?username=${this.state.username}&password=${this.state.password}`;
      // var res = fetch(url, options).then(res => res.json()).then((rspns) => {
      //   // if (rspns.length === 1) {

      //   // } else {
      //   //   this.setState(() => ({error: `This person imposter, you're imposter fuck u`}));
      //   // }
      // })
    }
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
      {this.state.error && <p>{this.state.error}</p>}
      <h3>Register Dickhead</h3>
      <div>
        <label>Username</label>
        <input name="username" value={this.state.username} type="text" onChange={this.handleUsernameChange}/>
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={this.state.email} type="text" onChange={this.handlEmailChange}/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" value={this.state.password} type="password"  onChange={this.handlePasswordChange}/>
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