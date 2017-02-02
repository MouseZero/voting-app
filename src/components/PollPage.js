import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction } from '../actions/chartActions';
import BarPoll from './BarPoll';

class PollPage extends Component {
  constructor(props){
    super(props);
    this.updateOldChartData = this.updateOldChartData.bind(this);
  }

  updateOldChartData(id, chart, cb){
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

  render(){
    this.updateOldChartData(
      this.props.params.pollid,
      this.props.chart,
      this.props.setDisplayChart
    );
    const chart = this.props.chart;
    const data = Object.keys(chart.data).reduce((p, x) => {
      return [...p, {value: chart.data[x], label: x}]
    }, []);
    console.log(data);
    return(
      <div>
        <h1>Poll Page</h1>
        id : {chart.id}
        <br />
        title: {chart.title}
        <br />
        description: {chart.description}
        <br />
        <BarPoll dataSet={data} yAxisLabel="Votes"/>
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
