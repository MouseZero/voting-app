import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { getNewToken } from '../helpers/backendInterface';
import { updateCharts } from '../helpers/commonDispatchers.js';
import { log, LOW } from '../helpers/log';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
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
      log(err.message, LOW);
    });
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        User: <input type="text" ref={node => this.nameInput = node}/>
        <br />
        Password: <input type="password" ref={node => this.passwordInput = node}/>
        <br />
        <button onClick={this.login} >LogIn</button>
        <br />
        {Object.keys(this.props).map(elem => elem + ", ")}
        <br />
        Current Token: {this.props.token}
      </div>
    );
  }
}
LoginPage.propTypes = {
  updateCharts: PropTypes.function,
  setToken: PropTypes.function,
  updateAllCharts: PropTypes.function,
  token: PropTypes.string
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => localStorage.token = token,
    updateAllCharts: (token) => updateCharts(token, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
