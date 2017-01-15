const React = require('react');
import { connect } from 'react-redux';
import auth from '../helpers/auth.js';

const inputBox = function(props) {
  return (
    <div>
      {props.msg}:&nbsp;
      <input type="text"></input>
    </div>
  )
}

class createPollsPage extends React.Component{
  render() {
    return (
      <div>
        {inputBox({msg: 'title'})}
        {inputBox({msg: 'desc'})}
        {inputBox({msg: 'Point 1'})}
        {inputBox({msg: 'Point 2'})}
        {inputBox({msg: 'Point 3'})}
        {inputBox({msg: 'Point 4'})}
        {inputBox({msg: 'Point 5'})}
        {inputBox({msg: 'Point 6'})}
        {inputBox({msg: 'Point 7'})}
        {inputBox({msg: 'Point 8'})}
        {inputBox({msg: 'Point 9'})}
        {inputBox({msg: 'Point 10'})}
        <div>
          {this.props.token}
        </div>
      </div>
    );
  }
}

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
