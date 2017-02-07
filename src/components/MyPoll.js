import React, { Component, PropTypes } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
    this.mydata = props.data;
    this.min = props.min;
    this.drawChart = this.drawChart.bind(this);
    this.refreshOnWindowSizeChange = this.refreshOnWindowSizeChange.bind(this);
  }

  drawChart(mydata){
    console.log('call drawChart');
    const baseElement = document.getElementById('chartContainer')
    baseElement.querySelector("svg").innerHTML = '';
    const chartWidth = document.getElementById('chartContainer').clientWidth;
    const chartHeight = window.innerHeight / 2;

    const dataInfo = mydata.reduce((p, x) => {
      const max = (p.max > x.value) ? p.max : x.value;
      const min = (p.min < x.value) ? p.min : x.value;
      return {max, min};
    }, {max: Number.MIN_VALUE, min: Number.MAX_VALUE});

    const widthScaler = d3.scaleLinear()
    .domain([0, mydata.length])
    .range([0, chartWidth]);

    const heightScaler = d3.scaleLinear()
    .domain([0, dataInfo.max])
    .range([0, chartHeight]);

    let svg = d3.select("svg")
    .attr("width", chartWidth)
    .attr("height", chartHeight);
    let g = svg.append("g")
    .attr("class", "bar");

    g.selectAll(".bar")
      .data(mydata)
      .enter().append("rect")
      .attr("width", (d, i) => widthScaler(1)*0.75 )
      .attr("height", ({value}) => heightScaler(value))
      .attr("x", (d, i) => widthScaler(i))
      .attr("y", ({value}) => heightScaler(dataInfo.max) - heightScaler(value));
  }

  refreshOnWindowSizeChange(){
    const mydata = this.mydata;
    const drawChart = this.drawChart;
    window.addEventListener("resize", ()=>drawChart(mydata));
    console.log('adding event listenr')
  }

  componentDidMount(){
    this.drawChart(this.mydata);
    this.refreshOnWindowSizeChange();
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
        <button onClick={()=>this.drawChart(this.mydata)}>Refresh State</button>
      </div>
    );
  }
}
MyPoll.propTypes = {
  data: PropTypes.object
};

export default MyPoll;
