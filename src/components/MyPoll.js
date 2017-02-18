import React, { Component, PropTypes } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
    this.min = props.min;
    this.drawChart = this.drawChart.bind(this);
    this.refreshOnWindowSizeChange = this.refreshOnWindowSizeChange.bind(this);
    this.convertDataObjectToArray = this.convertDataObjectToArray.bind(this);
  }

  componentDidMount(){
    this.drawChart(this.props.data);
    this.refreshOnWindowSizeChange();
  }

  componentDidUpdate(){
    this.drawChart(this.props.data);
  }

  convertDataObjectToArray(data){
    return Object.keys(data).map(itemName => {
      return {
        name: itemName,
        value: data[itemName]
      };
    });
  }

  drawChart(mydata){
    mydata = this.convertDataObjectToArray(mydata);
    const baseElement = document.getElementById('chartContainer'+this.props.chartId);
    baseElement.querySelector("svg").innerHTML = '';
    const fullWidth = document.getElementById('chartContainer'+this.props.chartId).clientWidth;
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

    let svg = d3.select(baseElement).select("svg")
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
    const mydata = this.props.data;
    const drawChart = this.drawChart;
    window.addEventListener("resize", ()=>drawChart(mydata));
  }

  render(){
    return(
      <div id={"chartContainer"+this.props.chartId}>
        <svg/>
      </div>
    );
  }
}
MyPoll.propTypes = {
  data: PropTypes.object,
  min: PropTypes.number,
  chartId: PropTypes.number
};

export default MyPoll;
