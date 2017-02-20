import React, { PropTypes } from 'react';

export default function InputBox(props) {
  return (
    <div key={props.key} className="input-box">
      <label>{props.msg}</label>
      <input className="form-control theme-form" ref={props.ref} type="text"/>
    </div>
  );
}
InputBox.propTypes = {
  key: PropTypes.number,
  msg: PropTypes.string,
  ref: PropTypes.object
};
