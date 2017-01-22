import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction } from '../actions/chartActions';

function PollPage(props){
  getChart(props.token, props.params.pollid)
  .then(function({ info }){
    log("store", props.chart, LOW);
    if(props.chart.id !== info[0].id){
      props.setDisplayChart(info[0]);
    }
  })
  .catch(function(err){
    log('Error': err, LOW);
  });
  return(
    <div>
      <h1>Poll Page</h1>
      {props.params.pollid}
      <br />
      id from object: {props.chart.id}
    </div>
  );
}
PollPage.propTypes = {
  token: PropTypes.string,
  chart: PropTypes.object,
  setDisplayChart: PropTypes.func
};
const mapStateToProps = (state) => {
  return {
    token: localStorage.token,
    chart: state.chart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDisplayChart: (chart) => dispatch(setDisplayChartAction(chart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollPage);
