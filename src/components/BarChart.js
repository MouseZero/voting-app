import React, { Component } from 'react';
import rd3 from 'react-d3-library';

class BarChart extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('I mounted');
    console.log(Object.keys(rd3));
    rd3.selectAll("p").style("color", "red");
  }

  render(){
    return(
      <div>
      <p>
        This is my chart.
      </p>
      </div>
    );
  }
}

export default BarChart;
