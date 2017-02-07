import React, { Component, PropTypes } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
    this.mydata = props.data;
  }

  componentDidMount(){
    let svg = d3.select("svg");
    let g = svg.append("g")
    .attr("transform", `translation("10", "10")`)
    .attr("class", "bar");

    g.selectAll(".bar")
      .data(this.mydata)
      .enter().append("rect")
      .attr("width", 10)
      .attr("height", (d) => d.value * 10)
      .attr("x", (d, i) => i * 15)
      .attr("y", d => 70 - d.value * 10);
  }

  render(){
    return(
      <svg/>
    );
  }
}
MyPoll.propTypes = {
  data: PropTypes.object
};

export default MyPoll;
