import React, { PropTypes } from 'react';

export default function SmallerContainer(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"/>
        <div className="col-lg-4 col-md-6 col-sm-8 col-xs-12">
          {props.children}
        </div>
        <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"/>
      </div>
    </div>
  );
}
SmallerContainer.propTypes = {
  children: PropTypes.element.isRequired
};
