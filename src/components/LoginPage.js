import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { getNewToken } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  login(){
    const setToken = this.props.setToken;
    const history = this.props.history;
    getNewToken(this.nameInput.value, this.passwordInput.value)
    .then(function(data){
      setToken(data.token);
      history.push('/');
    })
    .catch(function(err){
      log(err.message, LOW);
    });
  }

  createAccount(){
    this.props.history.push('create-user');
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"></div>
          <div className="col-lg-4 col-md-6 col-sm-8 col-xs-12">
            <h1>Login</h1>
            <div class="form-group row">
              <label
                for="name-input-field"
                className="col-form-label">
                User
              </label>
                <input
                  className="form-control theme-form"
                  id="name-input-field"
                  type="text" ref={node => this.nameInput = node}
                />
            </div>

            <div class="form-group row">
              <label
                for="password-input-field"
                className="col-form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control theme-form"
                id="password-input-field"
                ref={node => this.passwordInput = node}/>
            </div>
            <br />
            <button className="btn btn-primary btn-theme" onClick={this.login} >
              LogIn
            </button>
            <button
              className="btn btn-primary btn-theme"
              onClick={this.createAccount}>
              Create Account
            </button>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"></div>
        </div>
      </div>
    );
  }
}
LoginPage.propTypes = {
  updateCharts: PropTypes.func,
  setToken: PropTypes.func,
  updateAllCharts: PropTypes.func,
  token: PropTypes.string,
  history: PropTypes.object
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};
const mapDispatchToProps = () => {
  return {
    setToken: (token) => localStorage.token = token
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
