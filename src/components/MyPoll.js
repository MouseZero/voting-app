import React, { Component, PropTypes } from 'react';
//right now d3 is coming from index.ejs but I should find a better solution through npm
const d3 = d3;

class MyPoll extends Component {
  constructor(props){
    super(props);
    this.mydata = props.data;
    this.min = props.min;
    this.drawChart = this.drawChart.bind(this);
    this.refreshOnWindowSizeChange = this.refreshOnWindowSizeChange.bind(this);
  }

  componentDidMount(){
    this.drawChart(this.mydata);
    this.refreshOnWindowSizeChange();
  }

  drawChart(mydata){
    const baseElement = document.getElementById('chartContainer');
    baseElement.querySelector("svg").innerHTML = '';
    const fullWidth = document.getElementById('chartContainer').clientWidth;
    const chartHeight = window.innerHeight / 2;
    const barWidth = fullWidth * 0.9;
    const barHeight = chartHeight * 0.7;

    const labels = mydata.map(x => x.name);

    const labelScaler = d3.scaleBand()
      .domain(labels)
      .range([0, barWidth]);
    const xAxis = d3.axisBottom(labelScaler);

    const dataInfo = mydata.reduce((p, x) => {
      const max = (p.max > x.value) ? p.max : x.value;
      const min = (p.min < x.value) ? p.min : x.value;
      return {max, min};
    }, {max: Number.MIN_VALUE, min: Number.MAX_VALUE});

    const widthScaler = d3.scaleLinear()
      .domain([0, mydata.length])
      .range([0, barWidth]);

    const heightScaler = d3.scaleLinear()
      .domain([0, dataInfo.max])
      .range([barHeight, 0]);

    const yAxis = d3.axisLeft(heightScaler);

    let svg = d3.select("svg")
      .attr("width", fullWidth)
      .attr("height", chartHeight);

    let g = svg.append("g")
      .attr("transform", `translate(${fullWidth - barWidth}, 10)`)
    ;

    g.append("g")
      .call(yAxis)
      .attr("transform", `translate(-1, 0)`);

    g.append("g")
      .attr("transform", `translate(0, ${barHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");

    const dataPoint = g.selectAll(".bar")
      .data(mydata)
      .enter();

    dataPoint.append("rect")
      .attr("width", widthScaler(1) * 0.9 )
      .attr("height", ({value}) => barHeight - heightScaler(value))
      .attr("x", (d, i) => widthScaler(i) + widthScaler(1) * 0.05 )
      .attr("y", ({value}) => heightScaler(value))
      .attr("class", "shadowBar");

    dataPoint.append("rect")
      .attr("width", widthScaler(1) * 0.9 )
      .attr("height", ({value}) => barHeight - heightScaler(value))
      .attr("x", (d, i) => widthScaler(i))
      .attr("y", ({value}) => heightScaler(value))
      .attr("class", "bar");
  }

  refreshOnWindowSizeChange(){
    const mydata = this.mydata;
    const drawChart = this.drawChart;
    window.addEventListener("resize", ()=>drawChart(mydata));
  }

  render(){
    return(
      <div id="chartContainer">
        <svg/>
      </div>
    );
  }
}
MyPoll.propTypes = {
  data: PropTypes.object,
  min: PropTypes.number
};

export default MyPoll;
