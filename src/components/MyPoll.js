import React, { Component } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let svg = d3.select("svg")
    let g = svg.append("g")
    .attr("transform", `translation("10", "10")`)
    .attr("class", "bar")

    const data = ['thing1', 'more', 'foo'];

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("width", 10)
      .attr("height", 30)
      .attr("x", (d, i) => i * 15)
  }

  render(){
    return(
      <svg/>
    )
  }
}
export default MyPoll;
