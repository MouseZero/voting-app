const React = require('react');

module.exports = function (props) {
  const text = props.loggedIn ? 'Logged In' : 'Not Logged In';
  return (
    <div>
      This is the Create Polls page
      {text}
    </div>
  )
}
