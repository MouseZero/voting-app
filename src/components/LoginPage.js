import React from 'react';

module.exports = function () {
  return (
    <div>
      <h1>Login</h1>
      <button class="btn btn-primary sign-in-btn google-btn">
        <i className="fa fa-google-plus-official" aria-hidden="true"></i>
      </button>
      <br />
      <button class="sign-in-btn google-btn">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
      </button>
      <br />
      <button class="sign-in-btn google-btn">
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
      </button>
    </div>
  )
}