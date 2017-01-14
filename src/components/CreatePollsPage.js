const React = require('react');
import { connect } from 'react-redux';
import auth from '../helpers/auth.js';

const createPollsPage = function(props) {

  return (
    <div>
      <div>
        title: <input type="text"></input>
      </div>
      <div>
        desc: <input type="text"></input>
      </div>
      <div>
        json obj: <input type="text"></input>
      </div>
      <div>
        {props.token}
      </div>
    </div>
  );
};

createPollsPage.propTypes = {
  loggedIn: React.PropTypes.bool,
  updateLogInStatus: React.PropTypes.func
};
const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

export default connect(mapStateToProps)(createPollsPage);
