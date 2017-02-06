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

    // const data = ['thing1', 'more', 'foo'];
    const data = [
      {value: 5, name: "apples"},
      {value: 3, name: "bananas"},
      {value: 7, name: "strawberrys"}
    ];

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("width", 10)
      .attr("height", (d) => d.value * 10)
      .attr("x", (d, i) => i * 15)
      .attr("y", d => 70 - d.value * 10)
  }

  render(){
    return(
      <svg/>
    )
  }
}
export default MyPoll;
