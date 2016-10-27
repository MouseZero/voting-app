import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div className="top-bar">
        <Link to="/">Vote Home</Link>
        {' | '}
        <Link to="/view">View Polls</Link>
        {' | '}
        <Link to="/create">Create</Link>
        {' | '}
        <Link to="/login">Login</Link>
        <br/>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
