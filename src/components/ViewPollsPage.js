import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateCharts } from '../helpers/commonDispatchers';
import PrintChart from './PrintChart';

function ViewPollsPage({ charts, token, updateAllCharts }) {
  charts.length || updateAllCharts(token);
  return (
    <div>
      <h1>Your Polls</h1>
      {charts.map( (x, i)=> {
        return (
          <PrintChart key={i} pollId={x.id} title={x.title} desc={x.description}/>
        );
      })}
    </div>
  );
}
ViewPollsPage.propTypes = {
  charts: PropTypes.array,
  token: PropTypes.string,
  updateAllCharts: React.PropTypes.function
};
const mapStateToProps = (state) => {
  return {
    charts: state.charts,
    token: localStorage.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateAllCharts: (token) => updateCharts(token, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPollsPage);
