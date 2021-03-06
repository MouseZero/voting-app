import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateCharts } from '../helpers/commonDispatchers';
import { deleteChart } from '../helpers/backendInterface';
import PrintChart from './PrintChart';
import { log, LOW } from '../helpers/log';
import SmallerContainer from './SmallerContainer';
import LoginPlease from './LoginPlease';

const deletePoll = (token, updateCharts) => id => () => {
  deleteChart(token, id)
  .then(function(){
    updateCharts(token);
  })
  .catch(function(err){
    log('failed', LOW);
    log(err, LOW);
  });
};

function ViewPollsPage({ charts, token, updateAllCharts }) {
  if(!localStorage.token) return (<LoginPlease/>);
  charts.length || updateAllCharts(token);
  return (
    <SmallerContainer>
      <h1>Your Polls</h1>
      {charts.map( (x, i)=> {
        return (
          <PrintChart
            key={i}
            pollId={x.id}
            title={x.title}
            desc={x.description}
            delete={deletePoll(token, updateAllCharts)}
          />
        );
      })}
    </SmallerContainer>
  );
}
ViewPollsPage.propTypes = {
  charts: PropTypes.array,
  token: PropTypes.string,
  updateAllCharts: React.PropTypes.func
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
