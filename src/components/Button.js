import React, { PropTypes } from 'react';

export default function Button(props){
  return(
    <span>
      <button
        className="btn btn-primary btn-theme"
        onClick={props.cb}>
        {props.msg}
      </button>
    </span>
  );
}
Button.propTypes = {
  cb: PropTypes.func,
  msg: PropTypes.string
};
