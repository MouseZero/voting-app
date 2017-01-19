import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateCharts } from '../helpers/commonDispatchers.js';

function PrintChart(props) {
  return (
    <div>
      <Link to={"poll/" + props.pollId}>Show</Link>
      <br />
      Title: {props.title}
      <br />
      Desc: {props.desc}
      <hr></hr>
    </div>
  );
}

function viewPollsPage({ charts, token, updateAllCharts }) {
  charts.length || updateAllCharts(token);
  return (
    <div>
      <h1>Your Polls</h1>
      {charts.map( (x, i)=> {
        return (
          <PrintChart key={i} pollId={x.id} title={x.title} desc={x.description}/>
        )
      })}
    </div>
  );
}
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

export default connect(mapStateToProps, mapDispatchToProps)(viewPollsPage);
