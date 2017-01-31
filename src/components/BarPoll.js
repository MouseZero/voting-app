import React, { Component } from 'react';
import rd3, { BarChart } from 'react-d3-library';


class BarPoll extends Component {
  constructor(props){
    super(props);
    this.state = { d3: {
      yAxisLabel: props.yAxisLabel,
      dataSet: props.dataSet
    } };
  }

  componentDidMount(){
    this.setState({ d3: Object.assign(
        {},
        this.state.d3,
        {
          width: 500,
          height: 300,
          margins: {top: 20, right: 20, bottom: 70, left: 40},
          fill: [],
          barClass: 'bar'
        }
      )}
    )
  }

  render(){
    console.log(this.state.d3)
    return (
      <div>
        <BarChart data={this.state.d3}/>
      </div>
    )
  }
}

export default BarPoll;
