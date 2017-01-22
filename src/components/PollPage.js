import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction } from '../actions/chartActions';

function updateOldChartData(token, id, chart, cb){
  getChart(token, id)
  .then(function({ info }){
    if(chart.id !== info[0].id){
      cb(info[0]);
    }
  })
  .catch(function(err){
    log('Error': err, LOW);
  });
}

function PollPage(props){
  updateOldChartData(
    props.token,
    props.params.pollid,
    props.chart,
    props.setDisplayChart
  );
  const chart = props.chart;
  return(
    <div>
      <h1>Poll Page</h1>
      id : {chart.id}
      <br />
      title: {chart.title}
      <br />
      description: {chart.description}
      <br />
    </div>
  );
}
PollPage.propTypes = {
  params: PropTypes.object,
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
