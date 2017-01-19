import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateCharts } from '../helpers/commonDispatchers';

function PrintChart(props) {
  return (
    <div>
      <Link to={"poll/" + props.pollId}>Show</Link>
      <br />
      Title: {props.title}
      <br />
      Desc: {props.desc}
      <hr />
    </div>
  );
}
PrintChart.propTypes = {
  pollId: React.PropTypes.number,
  title: React.PropTypes.string,
  desc: React.PropTypes.string
};

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
  charts: React.PropTypes.array,
  token: React.PropTypes.string,
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
