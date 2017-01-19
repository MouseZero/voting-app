import React from 'react';
import {connect} from 'react-redux';
import loginActions from '../actions/loginActions';
import { objectToString } from '../debugging/util';
import { changeToken } from '../actions/loginActions';
import { getNewToken } from '../helpers/backendInterface';
import { updateCharts } from '../helpers/commonDispatchers.js';

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
  }

  login(){
    const closureSetToken = this.props.setToken;
    const closureUpdateCharts = this.props.updateAllCharts;
    getNewToken(this.nameInput.value, this.passwordInput.value)
    .then(function(data){
      closureSetToken(data.token);
      closureUpdateCharts(data.token);
    })
    .catch(function(err){
      //TODO Replace with toaster
      console.log(err.message);
    });
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
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
    token: localStorage.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => localStorage.token = token,
    updateAllCharts: (token) => updateCharts(token, dispatch)
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
