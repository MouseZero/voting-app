import React, { Component } from 'react';

class MyPoll extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(d3);
    d3.select("#big").style("background-color", "black");
  }

  render(){
    return(
      <div id='big'>
        Hello there guys
      </div>
    )
  }
}
export default MyPoll;
