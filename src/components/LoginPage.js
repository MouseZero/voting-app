import React from 'react';
import {connect} from 'react-redux';
import loginActions from '../actions/loginActions';
import { objectToString } from '../debugging/util';
import { changeToken } from '../actions/loginActions';
import { getToken } from '../helpers/auth';

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
  }

  login(){
    this.props.setToken(this.nameInput.value, this.passwordInput.value, function(err){
      console.log(err);
    });
  }

  render(){
    return (
      <div>
        User: <input type="text" ref={node => {this.nameInput = node}}></input>
        <br />
        Password: <input type="password" ref={node => this.passwordInput = node}></input>
        <br />
        <button onClick={this.login} >LogIn</button>
        <br />
        {Object.keys(this.props).map(elem => elem + ", ")}
        <br />
        Current Token: {this.props.token}
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
    setToken: (token) => dispatch(changeToken(token))
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
