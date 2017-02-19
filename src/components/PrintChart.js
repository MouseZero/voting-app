import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function PrintChart(props) {
  return (
    <div>
      <Link to={"poll/" + props.pollId}>Show</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'add/answer/' + props.pollId}>Add Another Answer</Link>
      <br />
      Title: {props.title}
      <br />
      Desc: {props.desc}
      <br />
      <button onClick={props.delete(props.pollId)}>Delete</button>
      <hr />
    </div>
  );
}
PrintChart.propTypes = {
  pollId: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  delete: PropTypes.func
};
