import React from 'react';
import { connect } from 'react-redux';

function PrintChart(props) {
  return (
    <div>
      Title: {props.title}
      <br />
      Desc: {props.desc}
      <hr></hr>
    </div>
  )
}

function viewPollsPage({ charts }) {
  console.log(charts);
  return (
    <div>
      <h1>Your Polls</h1>
      {charts.map( (x, i)=> {
        return (
          <PrintChart key={i} title={x.title} desc={x.description}/>
        )
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    charts: state.charts
  }
}

export default connect(mapStateToProps)(viewPollsPage);
