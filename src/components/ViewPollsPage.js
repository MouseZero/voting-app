import React from 'react';
import { connect } from 'react-redux';

const printChart = ({ title }) => {
  return (
    <div>
      This is a chart area
    </div>
  )
}

function viewPollsPage({ charts }) {
  console.log(charts);
  return (
    <div>
      <h1>Your Polls</h1>
      {charts.map((elem, i)=>{
        return (
          <printChart key={i}/>
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
