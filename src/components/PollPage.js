import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getChart } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { setDisplayChartAction, setChartToId } from '../actions/chartActions';
import MyPoll from './MyPoll';
import VoteButtons from './VoteButtons';
import isEmpty from 'lodash.isempty';

class PollPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.setChartToId(this.props.params.pollid);
  }

  componentWillUnmount(){
    this.props.setDisplayChart({});
  }

  render(){
    const chart = this.props.chart;
    if (isEmpty(chart)){
      return (
        <div />
      )
    } else {
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
}
PollPage.propTypes = {
  params: PropTypes.object,
  chart: PropTypes.object,
  setDisplayChart: PropTypes.func,
  setChartToId: PropTypes.func
};
const mapStateToProps = (state) => {
  return {
    chart: state.chart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDisplayChart: (chart) => dispatch(setDisplayChartAction(chart)),
    setChartToId: (id) => dispatch(setChartToId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollPage);
