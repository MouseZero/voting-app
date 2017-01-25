import React, { Component, PropTypes } from 'react';
import { createUser } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';


class CreateUser extends Component {
  constructor(props){
    super(props);
    this.createUserRequest = this.createUserRequest.bind(this);
  }

  createUserRequest(){
    const name = this.userName.value;
    const password = this.password.value;
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
CreateUser.propTypes = {
  history: PropTypes.object
};

export default CreateUser;
