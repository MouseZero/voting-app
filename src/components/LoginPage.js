import React from 'react';
import {connect} from 'react-redux';
import auth from '../helpers/auth.js';
import loginActions from '../actions/loginActions';

class LoginPage extends React.Component{
  render(){
    return (
      <div>
        User: <input type="text" ref={node => {this.nameInput = node}}></input>
        <br />
        Password: <input type="password" ref={node => this.passwordInput = node}></input>
        <br />
        <button onClick={()=>alert(this.nameInput.value)} >LogIn</button>
      </div>
    )
  }
}

export default connect()(LoginPage);
