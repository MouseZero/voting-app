import React from 'react';
import { vote } from '../helpers/backendInterface';

function VoteButtons(props){
  function voteFor(voteFor){
    vote(props.chartId, voteFor)
    .then(() => {
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
