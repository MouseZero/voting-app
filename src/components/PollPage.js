import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction } from '../actions/chartActions';
import MyPoll from './MyPoll';
import VoteButtons from './VoteButtons';

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
    return(
      <div>
        <h1>{chart.title}</h1>
        <div className='description'>{chart.description}</div>
        <VoteButtons
          data={Object.keys(chart.data)}
          chartId={chart.id}
        />
        <br />
        <MyPoll data={chart.data} min="0"/>
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
