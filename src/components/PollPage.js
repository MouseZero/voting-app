import React from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';

function PollPage(props){
  console.log('pollid:', props.params.pollid);
  getChart(props.token, props.params.pollid)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log('Error': err);
  })
  console.log(getChart(props.token, props.params.pollid));
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
