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
    const history = this.props.history;
    getNewToken(this.nameInput.value, this.passwordInput.value)
    .then(function(data){
      closureSetToken(data.token);
      closureUpdateCharts(data.token);
      history.push('/');
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
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => localStorage.token = token,
    updateAllCharts: (token) => updateCharts(token, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
