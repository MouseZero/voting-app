import React from 'react';
import { connect } from 'react-redux';

function PollPage(props){
  return(
    <div>
      <h1>Poll Page</h1>
      {props.params.pollid}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

export default connect(mapStateToProps)(PollPage);
