import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';

function PollPage(props){
  getChart(props.token, props.params.pollid)
  .then(function({ info }){
    log(info[0], LOW);
  })
  .catch(function(err){
    log('Error': err, LOW);
  });
  log(getChart(props.token, props.params.pollid));
  return(
    <div>
      <h1>Poll Page</h1>
      {props.params.pollid}
    </div>
  );
}
PollPage.propTypes = {
  params: {pollid: PropTypes.number},
  token: PropTypes.string
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};

export default connect(mapStateToProps)(PollPage);
