import React, { PropTypes } from 'react';

export default function InputBox(props) {
  const { key, msg, ref, isPassword} = props;
  return (
    <div key={key} className="input-box">
      <label>{msg}</label>
      <input
        className="form-control theme-form"
        ref={ref}
        type={(isPassword) ? "password" : "text"}/>
    </div>
  );
}
InputBox.propTypes = {
  key: PropTypes.number,
  msg: PropTypes.string,
  isPassword: PropTypes.string,
  ref: PropTypes.object
};
