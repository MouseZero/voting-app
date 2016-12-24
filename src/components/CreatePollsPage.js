const React = require('react');
import auth from '../helpers/auth.js';

module.exports = function (props) {

  const text = props.loggedIn ? 'Logged In' : 'Not Logged In';

  const login = function(){
    auth.login();
    props.updateLogInStatus();
  };

  const logout = function(){
    auth.logout();
    props.updateLogInStatus();
  };

  return (
    <div>
      This is the Create Polls page {text}
      <div>
        <button onClick={login}>LogIn</button>
      </div>
      <div>
        <button onClick={logout}>LogOut</button>
      </div>
    </div>
  );
};
