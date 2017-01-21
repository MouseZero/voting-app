import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
    this.BarLink = this.BarLink.bind(this);
    this.LoginSlashProfile = this.LoginSlashProfile.bind(this);
  }

  BarLink(props){
    const classes = "nav-icon glyphicon glyphicon-" + props.glyph;
    return (
      <td className="nav-button">
        <Link className="nav-link" to={props.uri}>
          {props.text}
          <span className={classes} />
        </Link>
      </td>
    );
  }

  LoginSlashProfile(props){
    if(props.token){
      return(
        <this.BarLink uri="/profile" text="Profile" glyph="user" />
      );
    }else{
      return(
        <this.BarLink uri="/login" text="Login" glyph="user" />
      );
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
                <this.LoginSlashProfile token={this.props.token}/>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <div className="container standard-page">
          {React.cloneElement(this.props.children, {
            loggedIn: this.state.loggedIn,
          })}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element,
  token: PropTypes.string
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};

export default connect(mapStateToProps)(App);
