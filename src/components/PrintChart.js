import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Button from './Button';

export default class PrintChart extends Component {
  constructor(props){
    super(props);
    this.showPoll = this.showPoll.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  showPoll(){
    browserHistory.push('poll/' + this.props.pollId);
  }

  addAnswer(){
    browserHistory.push('add/answer/' + this.props.pollId);
  }

  render(){
    const { pollId, title, desc, delete: del } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <br />
        Desc: {desc}
        <br />
        <Button cb={this.showPoll} msg="Show Poll"/>
        <Button cb={this.addAnswer} msg="Add Answer"/>
        <Button cb={del(pollId)} msg="Delete"/>
        <hr />
      </div>
    );
  }
}
PrintChart.propTypes = {
  pollId: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  delete: PropTypes.func
};
