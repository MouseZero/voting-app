import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { getNewToken } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login(){
    const setToken = this.props.setToken;
    const history = this.props.history;
    getNewToken(this.nameInput.value, this.passwordInput.value)
    .then(function(data){
      setToken(data.token);
      history.push('/');
    })
    .catch(function(err){
      log(err.message, LOW);
    });
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        User: <input type="text" ref={node => this.nameInput = node}/>
        <br />
        Password: <input type="password" ref={node => this.passwordInput = node}/>
        <br />
        <button onClick={this.login} >LogIn</button>
      </div>
    );
  }
}
LoginPage.propTypes = {
  updateCharts: PropTypes.func,
  setToken: PropTypes.func,
  updateAllCharts: PropTypes.func,
  token: PropTypes.string,
  history: PropTypes.object
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};
const mapDispatchToProps = () => {
  return {
    setToken: (token) => localStorage.token = token
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
