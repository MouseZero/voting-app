import React from 'react';
import {connect} from 'react-redux';
import loginActions from '../actions/loginActions';
import { objectToString } from '../debugging/util'

class LoginPage extends React.Component{
  render(){
    console.log(this.props.token);
    return (
      <div>
        User: <input type="text" ref={node => {this.nameInput = node}}></input>
        <br />
        Password: <input type="password" ref={node => this.passwordInput = node}></input>
        <br />
        <button onClick={()=>alert(this.nameInput.value + ' and ' + this.passwordInput.value)} >LogIn</button>
        <br />
        {Object.keys(this.props).map(elem => elem + ", ")}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

module.exports = connect(mapStateToProps)(LoginPage);
