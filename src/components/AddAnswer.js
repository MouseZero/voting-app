import React, { Component } from 'react';
import InputBox from './InputBox';
import charts from '../helpers/backendInterface';

class AddAnswer extends Component{
  constructor(props){
    super(props);
    this.addAnswer = this.addAnswer.bind(this);
  }

  addAnswer(){
    charts.addAnswer(this.props.params.pollid, this.newAnswerText);
  }

  render(){
    return(
      <div>
        <h1>Add Answer</h1>
        {InputBox({
          ref: node => this.newAnswerText = node,
          msg: 'Name of the new answer'
        })}
        <br />
        <button onClick={this.addAnswer}>submit</button>
      </div>
    );
  }
}

export default AddAnswer;
