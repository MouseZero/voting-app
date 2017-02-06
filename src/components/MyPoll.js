import React, { Component } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let svg = d3.select("svg")
    let g = svg.append("g")
    .attr("transform", `translation("10", "10")`)

    g.append("rect")
    .attr("class", "test")
    .attr("width", 50)
    .attr("height", 100)
  }

  render(){
    return(
      <svg/>
    )
  }
}
export default MyPoll;
