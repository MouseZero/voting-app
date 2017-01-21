import React, { PropTypes } from 'react';

export default function InputBox(props) {
  return (
    <div key={props.key}>
      {props.msg}:&nbsp;
      <input ref={props.ref} type="text"/>
    </div>
  );
}
InputBox.propTypes = {
  key: PropTypes.number,
  msg: PropTypes.string,
  ref: PropTypes.object
};
