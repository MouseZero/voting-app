import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setLatestChartsAction } from '../actions/chartActions';

class VoteHomePage extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.setLatestCharts();
  }

  render(){
    console.log(this.props.charts)
    return (
      <div>
        <h1>Voting App</h1>
        <p>&nbsp;</p>
          Create polls for anyone to vote on. This app will keep track of the votes and
          will show you the voting pattern of the respondents.
      </div>
    );
  }
}
VoteHomePage.propTypes = {
  setLatestCharts: PropTypes.func,
  charts: PropTypes.object
};
const mapStateToProps = state => {
  return {
    charts: state.latestCharts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLatestCharts: () => dispatch(setLatestChartsAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteHomePage);
