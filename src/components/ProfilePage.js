import React from 'react';
import { connect } from 'react-redux';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.logoff = this.logoff.bind(this);
  }

  logoff(){
    localStorage.setItem('token', '');
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
  logout: React.PropTypes.function
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};

export default connect(mapStateToProps)(ProfilePage);
