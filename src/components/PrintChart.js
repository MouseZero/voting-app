import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Button from './Button';

export default class PrintChart extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { pollId, title, desc, delete: del } = this.props;
    return (
      <div>
        <Link to={"poll/" + pollId}>Show</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={'add/answer/' + pollId}>Add Another Answer</Link>
        <br />
        Title: {title}
        <br />
        Desc: {desc}
        <br />
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
