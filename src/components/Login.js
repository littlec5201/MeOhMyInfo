import React from 'react';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleUsernameChange(e) {
    var change = e.target.value;
    this.setState(() => ({"username": change}));
  }
  handlePasswordChange(e) {
    var change = e.target.value;
    this.setState(() => ({"password": change}));

  }
  handleAddOption(e) {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState(() => ({error: 'Please provide username & password'}));
    }
    else
    {
      this.setState(() => ({error: ''}));
      let options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      var url = `http://localhost:3000/users?username=${this.state.username}&password=${this.state.password}`;
      var res = fetch(url, options).then(res => res.json()).then((rspns) => {
        if (rspns.length === 1) {

        } else {
          this.setState(() => ({error: `This person imposter, you're imposter fuck u`}));
        }
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <h3>Login Dickhead</h3>
          <div>
            <label>Username</label>
            <input name="username" value={this.state.username} type="text" onChange={this.handleUsernameChange}/>
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

export default Login;