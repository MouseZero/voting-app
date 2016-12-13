import React from 'react';
import auth from '../helpers/auth.js'

module.exports = function () {
  function login(){
    auth.login('testuser', 'password');
  }

  function logout(){
    auth.logout();
  }

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
