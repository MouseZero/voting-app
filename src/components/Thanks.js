import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class Thanks extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    browserHistory.push('/poll/' + this.props.params.pollid);
  }

  render(){
    return (
      <div>
        Thanks for voting!
      </div>
    );
  }
}
Thanks.propTypes = {
  params: PropTypes.object
};
