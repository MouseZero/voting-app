import React from 'react';
import auth from '../helpers/auth.js'

class LoginPage extends React.Component {
  login(){
    auth.login('testuser', 'password');
  }

  logout(){
    auth.logout();
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        <form>
          User: <input ref='iUser' type='text'></input>
          <br />
          Password: <input ref='iPass' type='text'></input>
        </form>
        You currently are {!auth.loggedIn() && "not "}logged in.
        <button onClick={()=>login()}>
          Log On
        </button>
        <button onClick={()=>logout()}>
          Log Out
        </button>
      </div>
    )
  }

}

module.exports = LoginPage