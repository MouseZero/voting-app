import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.logoff = this.logoff.bind(this);
  }

  logoff(){
    this.props.logout()
  }

  render(){
    return (
      <div>
        <h1>Profile Page</h1>
        <button onClick={this.logoff}>Log Off</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
