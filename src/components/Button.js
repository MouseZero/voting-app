import React, { PropTypes } from 'react';

export default function Button(props){
  const { cb, msg } = props;
  return(
    <button
      className="btn btn-primary btn-theme"
      onClick={cb}>
      {msg}
    </button>
  );
}
Button.propTypes = {
  cb: PropTypes.func,
  msg: PropTypes.string
};
