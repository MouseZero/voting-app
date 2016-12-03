import React from 'react';
import auth from '../helpers/auth.js';

module.exports = function () {
  auth.login();
  const test = auth.getToken();
  return (
    <div>
      <h1>Login</h1>
      Hello There Im typing stuff login token {test}
    </div>
  )
}
