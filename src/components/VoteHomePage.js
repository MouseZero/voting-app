import React, { Component } from 'react';

class VoteHomePage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Voting App</h1>
        <p>&nbsp;</p>
          Create polls for anyone to vote on. This app will keep track of the votes and
          will show you the voting pattern of the respondents.
      </div>
    );
  }
}

export default VoteHomePage;
