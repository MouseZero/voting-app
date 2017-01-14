import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import auth from '../helpers/auth.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
    this.updateLogInStatus = this.updateLogInStatus.bind(this);
    this.BarLink = this.BarLink.bind(this);
  }

  BarLink(props){
    const classes = "nav-icon glyphicon glyphicon-" + props.glyph;
    return (
      <td className="nav-button">
        <Link to={props.uri}>
          {props.text}
          <span className={classes} />
        </Link>
      </td>
    );
  }

  updateLogInStatus(){
    if(auth.loggedIn()){
      this.setState({loggedIn: true});
    }else{
      this.setState({loggedIn: false});
    }
  }

  render(){
    return (
      <div>
        <div className="top-bar">
          <table className="top-bar-table">
            <tbody>
              <tr>
                <this.BarLink uri="/" text="Home" glyph="home" />
                <this.BarLink uri="/view" text="View Polls" glyph="stats" />
                <this.BarLink uri="/create" text="Create" glyph="plus" />
                <this.BarLink uri="/login" text="Login" glyph="user" />
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <div className="container standard-page">
          {React.cloneElement(this.props.children, {
            loggedIn: this.state.loggedIn,
            updateLogInStatus: this.updateLogInStatus
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
