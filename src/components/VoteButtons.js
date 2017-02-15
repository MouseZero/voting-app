import React from 'react';
import { vote } from '../helpers/backendInterface';
import { browserHistory } from 'react-router';

function VoteButtons(props){
  function voteFor(voteFor){
    const browserHist = browserHistory;
    const chartId = props.chartId;
    vote(chartId, voteFor)
    .then(() => {
      browserHist.push('/thanks/' + chartId);
    })
    .catch(() => {
      //TODO error message if something goes wrong
    });
  }

  return (
    <div className="voteButtons">
      <h2>Vote</h2>
      {props.data.map(x => {
        return (
          <button onClick={()=>voteFor(x)}>{x}</button>
        )
      })}
    </div>
  );
}

export default VoteButtons;
