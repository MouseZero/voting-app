import React from 'react';
import {connect} from 'react-redux';
import loginActions from '../actions/loginActions';
import { objectToString } from '../debugging/util';
import { changeToken } from '../actions/loginActions';
import { getNewToken } from '../helpers/auth';

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
  }

  login(){
    const closureSetToken = this.props.setToken;
    console.log(this.nameInput.value)
    getNewToken(this.nameInput.value, this.passwordInput.value, function (err, data) {
      if(err){
        console.log(err);
      }else{
        console.log('Gets here', data);
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
