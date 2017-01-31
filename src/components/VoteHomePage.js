import React, { Component } from 'react';
import rd3, { BarChart } from 'react-d3-library';

const data = {};
data.width = 500;
data.height = 300;
data.dataSet = [
  {label: 'apples', value: 25},
  {label: 'oranges', value: 30},
  {label: 'surfboards', value: 150}
];
data.margins = {top: 20, right: 20, bottom: 70, left: 40};
data.yAxisLabel = 'Test Chart';
data.fill = [];
data.barClass = 'bar';



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
          <BarChart data={this.state.d3} />
      </div>
    );
  }
}

export default VoteHomePage;
