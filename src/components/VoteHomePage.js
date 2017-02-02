import React, { Component } from 'react';
import rd3, { BarChart } from 'react-d3-library';
import BarPoll from './BarPoll';

class VoteHomePage extends Component {
  constructor(props){
    super(props);
    this.state = {d3: ''};
  }

  componentDidMount(){
    this.setState({d3: data});
  }

  render(){
    return (
      <div>
        <h1>Voting App</h1>
        <p>&nbsp;</p>
          Create polls for anyone to vote on. This app will keep track of the votes and
          will show you the voting pattern of the respondents.
          <BarPoll
            dataSet={
              [
                {label: 'bananas', value: 25},
                {label: 'oranges', value: 30},
                {label: 'grapes', value: 50}
              ]
            }
            yAxisLabel={'Stuff'}
          />
      </div>
    );
  }
}

export default VoteHomePage;
