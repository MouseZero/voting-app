import React, { PropTypes } from 'react';
import { vote } from '../helpers/backendInterface';
import { browserHistory } from 'react-router';
import Button from './Button';
import * as toastr from 'toastr';

function VoteButtons(props){
  function voteFor(voteFor){
    const browserHist = browserHistory;
    const chartId = props.chartId;
    vote(chartId, voteFor)
    .then(() => {
      toastr.success('Your vote was counted');
      browserHist.push('/thanks/' + chartId);
    })
    .catch((err) => {
      toastr.warning(err);
    });
  }

  return (
    <div className="voteButtons">
      <h2>Vote</h2>
      {props.data.map(( x, i ) => {
        return (
          <Button key={i} cb={()=>voteFor(x)} msg={x}/>
        );
      })}
    </div>
  );
}
VoteButtons.propTypes = {
  data: PropTypes.array
};

export default VoteButtons;
