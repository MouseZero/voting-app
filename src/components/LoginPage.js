import React from 'react';
import {connect} from 'react-redux';
import loginActions from '../actions/loginActions';
import { objectToString } from '../debugging/util';
import { changeToken } from '../actions/loginActions';
import { getNewToken } from '../helpers/backendInterface';

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
  }

  login(){
    const closureSetToken = this.props.setToken;
    getNewToken(this.nameInput.value, this.passwordInput.value, function (err, data) {
      if(err){
        //TODO Replace with toaster
        console.log(err);
      }else{
        closureSetToken(data.token);
      }
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
