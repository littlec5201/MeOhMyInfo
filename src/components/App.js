import React from 'react';
import Login from './Login';
import Register from './Register';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: 'login'
    }
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  showLogin() {
    this.setState({
      selected: 'login'
    });
  }
  showRegister() {
    this.setState({
      selected: 'register'
    });
  }
  isActive(val) {
    return 'login-register-button ' + ((val === this.state.selected) ? 'active' : '');
  }
  render () {
    return (
      <div className="login-register-page">
        <div className="login-register-button-group">
          <button className={this.isActive('login')} onClick={this.showLogin}>Login</button>
          <button className={this.isActive('register')} onClick={this.showRegister}>Register</button>
        </div>

        {this.state.selected === 'login' && <Login/>}
        {this.state.selected === 'register' && <Register/>}
      </div>
    );
  }
}

export default App;
