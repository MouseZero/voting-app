import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNewToken } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import InputBox from './InputBox';
import Button from './Button';
import SmallerContainer from './SmallerContainer';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  login(){
    const setToken = this.props.setToken;
    const history = this.props.history;
    getNewToken(this.nameInput.value, this.passwordInput.value)
    .then(function(data){
      setToken(data.token);
      toastr.success('You are Logged In!');
      history.push('/');
    })
    .catch(function(err){
      toastr.warning(err.message);
    });
  }

  createAccount(){
    this.props.history.push('create-user');
  }

  render(){
    return (
      <SmallerContainer>
        <h1>Login</h1>
        <InputBox
          reference={node => this.nameInput = node}
          msg="User"/>
        <InputBox
          reference={node => this.passwordInput = node}
          msg="Password"/>
        <Button cb={this.login} msg="LogIn"/>
        <Button cb={this.createAccount} msg="Create Account"/>
      </SmallerContainer>
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
