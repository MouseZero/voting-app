import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setChartAction } from '../actions/chartActions';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.logoff = this.logoff.bind(this);
  }

  logoff(){
    localStorage.setItem('token', '');
    this.props.logout();
    this.props.history.push('/login');
  }

  render(){
    return (
      <div>
        <h1>Profile Page</h1>
        <button onClick={this.logoff}>Log Off</button>
      </div>
    );
  }
}
ProfilePage.propTypes = {
  logout: PropTypes.func,
  history: PropTypes.object
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};
const mapDispatchToProps = dispatch => {
return {
    logout: () => dispatch(setChartAction([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
