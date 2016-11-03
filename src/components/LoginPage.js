import React from 'react';

module.exports = function () {
  return (
    <div>
      <h1>Login</h1>
      <div className="btn-container">
        <div className="btn-div">
          <button className="btn sign-in-btn google-btn">
            <i className="fa fa-google-plus-official" aria-hidden="true"></i>
            <span className="login-name">Google</span>
          </button>
        </div>
        <div className="btn-div">
          <button className="btn sign-in-btn facebook-btn">
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <span className="login-name">Facebook</span>
          </button>
        </div>
        <div className="btn-div">
          <button className="btn sign-in-btn twitter-btn">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
            <span className="login-name">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  )
}