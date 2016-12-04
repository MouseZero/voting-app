import React from 'react';
import auth from '../helpers/auth.js'

module.exports = function () {
  function login(){
    auth.login();
  }

  function logout(){
    auth.logout();
  }

  return (
    <div>
      <h1>Login</h1>
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
