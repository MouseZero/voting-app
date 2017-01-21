import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function PrintChart(props) {
  return (
    <div>
      <Link to={"poll/" + props.pollId}>Show</Link>
      <br />
      Title: {props.title}
      <br />
      Desc: {props.desc}
      <hr />
    </div>
  );
}
PrintChart.propTypes = {
  pollId: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string
};
