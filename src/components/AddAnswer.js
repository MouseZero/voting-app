import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import InputBox from './InputBox';
import charts from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';
import { connect } from 'react-redux';
import Button from './Button';
import SmallerContainer from './SmallerContainer';

class AddAnswer extends Component{
  constructor(props){
    super(props);
    this.addAnswer = this.addAnswer.bind(this);
  }

  addAnswer(){
    const { token, params: {pollid} } = this.props;
    charts.addAnswer(
      token,
      pollid,
      this.newAnswerText.value
    )
    .then(function(){
      browserHistory.push('poll/' + pollid);
    })
    .catch(function (err){
      log(err, LOW);
    });
  }

  render(){
    return(
      <SmallerContainer>
        <h1>Add Answer</h1>
        <InputBox
          reference={node => this.newAnswerText = node}
          msg="Name of the new answer"/>
        <br />
        <Button cb={this.addAnswer} msg="Submit"/>
      </SmallerContainer>
    );
  }
}
AddAnswer.propTypes = {
  token: PropTypes.string,
  params: PropTypes.object
};
const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};

export default connect(mapStateToProps)(AddAnswer);
