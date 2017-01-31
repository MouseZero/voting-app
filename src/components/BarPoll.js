import React, { Component } from 'react';
import rd3, { BarChart } from 'react-d3-library';


class BarPoll extends Component {
  constructor(props){
    super(props);
    this.state = { d3: '' };
  }

  componentDidMount(){
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
    this.setState({ d3: data })
  }

  render(){
    return (
      <div>
        <BarChart data={this.state.d3}/>
      </div>
    )
  }
}

export default BarPoll;
