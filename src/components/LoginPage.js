import React from 'react';
import auth from '../helpers/auth.js';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      name: '',
      password: ''
    };
    this.nameBoxChange = this.nameBoxChange.bind(this);
    this.passwordBoxChange = this.passwordBoxChange.bind(this);
  }

  nameBoxChange(event){
    this.setState({name: event.target.value});
  }

  passwordBoxChange(event){
    this.setState({password: event.target.value});
  }

  login(){
    auth.login(this.state.name, this.state.password);
  }

  logout(){
    auth.logout();
  }

  render(){
    return (
      <div>
        <h1>Login</h1>

        <form>

          User: 
          <input 
            type="text"
            value={this.state.name} 
            onChange={this.nameBoxChange} />
          <br />

          Password: 
          <input
            type="password" 
            value={this.state.password} 
            onChange={this.passwordBoxChange} />

        </form>

        You currently are {!auth.loggedIn() && "not "}logged in.
        <button onClick={()=>this.login()}>
          Log On
        </button>
        <button onClick={()=>this.logout()}>
          Log Out
        </button>
      </div>
    );
  }

}

export default LoginPage;