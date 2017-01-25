import React, { Component } from 'react';
// import { createUser } from '../helpers/backendInterface';


class CreateUser extends Component {
  constructor(props){
    super(props);
    this.createUserRequest = this.createUserRequest.bind(this);
  }

  createUserRequest(){
    console.log('creating user');
    console.log(this.userName.value, this.password.value);
  }

  render(){
    this.userName = '';
    this.password = '';
    return (
      <div>
        <h1>Create New User</h1>
        <div>
          User Name: <input ref={node => this.userName = node} type="text"/>
        </div>
        <div>
          Password: <input ref={node => this.password = node} type="text"/>
        </div>
        <div>
          <button onClick={this.createUserRequest}>Create User</button>
        </div>
      </div>
    );
  }
}

export default CreateUser;
