import React from 'react';
import BarChart from './BarChart';

function voteHomePage() {
  return (
    <div>
      <h1>Voting App</h1>
      <p>&nbsp;</p>
      <p>
        Create polls for anyone to vote on. This app will keep track of the votes and
        will show you the voting pattern of the respondents.
      </p>
      <p>
        <BarChart/>
      </p>
    </div>
  );
}

 export default voteHomePage;
