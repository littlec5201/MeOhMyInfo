import React from 'react';
import Login from './Login';
import Register from './Register';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false
    }
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
  }
  showLogin() {
    this.setState({
      login: true,
      register: false
    });
  }
  showRegister() {
    this.setState({
      login: false,
      register: true
    });
  }
  render () {
    return (
      <div>
        <div>
          <button onClick={this.showLogin}>Login</button>
          <button onClick={this.showRegister}>Register</button>
        </div>

        {this.state.login && <Login/>}
        {this.state.register && <Register/>}
      </div>
    );
  }
}

export default App;
