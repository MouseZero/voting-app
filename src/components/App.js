import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const BarLink = function(props) {
  const classes = "nav-icon glyphicon glyphicon-" + props.glyph
  return (
    <td className="nav-button">
      <Link to={props.uri}>
        {props.text}
        <span className={classes} />
      </Link>
    </td>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render(){
    const spacer = (<span className="spacer">|</span>)
    return (
      <div>
        <div className="top-bar">
          <table className="top-bar-table">
            <tbody>
              <tr>
                <BarLink uri="/" text="Home" glyph="home" />
                <BarLink uri="/view" text="View Polls" glyph="stats" />
                <BarLink uri="/create" text="Create" glyph="plus" />
                <BarLink uri="/login" text="Login" glyph="user" />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container standard-page">
          {React.cloneElement(this.props.children, {loggedIn: this.state.loggedIn})}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
