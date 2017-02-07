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

    for (let x=1; x<7; x++){
      console.log(x, widthScaler(x));
    }

    let svg = d3.select("svg")
    .attr("width", chartWidth);
    let g = svg.append("g")
    .attr("class", "bar");

    g.selectAll(".bar")
      .data(this.mydata)
      .enter().append("rect")
      .attr("width", (d, i) => widthScaler(1) )
      .attr("height", (d) => d.value * 10)
      .attr("x", (d, i) => widthScaler(i))
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
