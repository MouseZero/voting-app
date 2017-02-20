import React, { Component, PropTypes } from 'react';
import { createUser } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import InputBox from './InputBox';
import Button from './Button';
import SmallerContainer from './SmallerContainer';


class CreateUser extends Component {
  constructor(props){
    super(props);
    this.createUserRequest = this.createUserRequest.bind(this);
  }

  createUserRequest(){
    const name = this.userNameInput.value;
    const password = this.passwordInput.value;
    const history = this.props.history;
    createUser(name, password)
    .then(function (data){
      log(data, LOW);
      history.push('login');
    })
    .catch(function(err){
      log(err, LOW);
    });
  }

  render(){
    return (
      <SmallerContainer>
        <h1>Create New User</h1>
        <InputBox
          reference={node => this.userNameInput = node}
          msg="User Name"/>
        <InputBox
          reference={node => this.passwordInput = node}
          msg="Password"
          isPassword="true"/>
        <Button cb={this.createUserRequest} msg="CreateUser"/>
      </SmallerContainer>
    );
  }
}
CreateUser.propTypes = {
  history: PropTypes.object
};

export default CreateUser;
