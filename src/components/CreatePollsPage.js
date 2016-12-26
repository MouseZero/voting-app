const React = require('react');
import auth from '../helpers/auth.js';

const createPollsPage = function(props) {

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

createPollsPage.propTypes = {
  loggedIn: React.PropTypes.bool,
  updateLogInStatus: React.PropTypes.func
};

module.exports = createPollsPage;
