import React from 'react';

function PollPage(props){
  return(
    <div>
      <h1>Poll Page</h1>
      {props.params.pollid}
    </div>
  );
}

export default PollPage;
