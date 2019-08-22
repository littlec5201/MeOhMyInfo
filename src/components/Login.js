import React from 'react';
import { firebase } from '../firebase/firebase';

class Login extends React.Component{
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        browserHistory.push('/profile');
      }
    });
  }
  authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebaseApp.auth().signInWithPopup(provider)
      .then(result => {
      })
  }
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.authenticate.bind(this)}>
          <h3>Sign in to your account</h3>
          <div>
            <label className="user-label">Username</label>
            <input name="username" value="" type="text"/>
          </div>
          <div>
            <label className="user-label">Password</label>
            <input name="password" value="" type="password"/>
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