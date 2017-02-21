import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setChartAction } from '../actions/chartActions';
import Button from './Button';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.logoff = this.logoff.bind(this);
  }

  logoff(){
    localStorage.token = '';
    toastr.success('You are now logged off');
    this.props.logout();
    this.props.history.push('/login');
  }

  render(){
    return (
      <div className="center">
        <h1>Profile Page</h1>
        <Button cb={this.logoff} msg="Log Off"/>
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
    logout: () => {
      return dispatch(setChartAction([]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
