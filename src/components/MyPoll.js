import React, { Component, PropTypes } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
    this.mydata = props.data;
    this.min = props.min;
  }

  componentDidMount(){
    const chartWidth = document.getElementById('chartContainer').clientWidth;
    const chartHeight = document.getElementById('chartContainer').clientHeight;

    const dataInfo = this.mydata.reduce((p, x) => {
      const max = (p.max > x.value) ? p.max : x.value;
      const min = (p.min < x.value) ? p.min : x.value;
      return {max, min};
    }, {max: Number.MIN_VALUE, min: Number.MAX_VALUE});

    const widthScaler = d3.scaleLinear()
    .domain([0, this.mydata.length])
    .range([0, chartWidth]);

    let svg = d3.select("svg");
    let g = svg.append("g")
    // .attr("transform", `translation("10", "10")`)
    // .att("width", "100%")
    .attr("class", "bar");

    g.selectAll(".bar")
      .data(this.mydata)
      .enter().append("rect")
      .attr("width", 10)
      .attr("height", (d) => d.value * 10)
      .attr("x", (d, i) => i * 15)
      .attr("y", d => 70 - d.value * 10);
    console.log()
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-6">
            Test 3
          </div>
          <div className="col-sm-6">
            Test 4
          </div>
          <div className="col-sm-6">
            Test 5
          </div>
        </div>
        <div id="chartContainer">
          <svg/>
        </div>
      </div>
    );
  }
}
MyPoll.propTypes = {
  data: PropTypes.object
};

export default MyPoll;
