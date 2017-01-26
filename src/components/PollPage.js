import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction } from '../actions/chartActions';

function updateOldChartData(id, chart, cb){
  getChart(id)
  .then(function({ info }){
    if(chart.id !== info[0].id){
      cb(info[0]);
    }
  })
  .catch(function(err){
    log('Error': err, LOW);
  });
}

class PollPage extends Component {
  render(){
    updateOldChartData(
      this.props.params.pollid,
      this.props.chart,
      this.props.setDisplayChart
    );
    const chart = this.props.chart;
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
}
PollPage.propTypes = {
  params: PropTypes.object,
  chart: PropTypes.object,
  setDisplayChart: PropTypes.func
};
const mapStateToProps = (state) => {
  return {
    chart: state.chart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDisplayChart: (chart) => dispatch(setDisplayChartAction(chart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollPage);
