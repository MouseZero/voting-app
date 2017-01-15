const React = require('react');
import { connect } from 'react-redux';
import { createChart } from '../helpers/backendInterface';

const inputBox = function(props) {
  return (
    <div>
      {props.msg}:&nbsp;
      <input type="text"></input>
    </div>
  )
}

class createPollsPage extends React.Component{
  constructor(props){
    super(props);
    this.sendForChartCreation = this.sendForChartCreation.bind(this);
  }

  sendForChartCreation(){
    createChart(this.props.token, {
        title: 'test',
        desc: 'test descriptoin',
        points: {
          pepsi: 0,
          coke: 0
        }
      },
      function(data){
        console.log('data I received: ' + data);
    });
  }

  render() {
    return (
      <div>
        {inputBox({msg: 'title'})}
        {inputBox({msg: 'desc'})}
        {inputBox({msg: 'Point 1'})}
        {inputBox({msg: 'Point 2'})}
        {inputBox({msg: 'Point 3'})}
        {inputBox({msg: 'Point 4'})}
        {inputBox({msg: 'Point 5'})}
        {inputBox({msg: 'Point 6'})}
        {inputBox({msg: 'Point 7'})}
        {inputBox({msg: 'Point 8'})}
        {inputBox({msg: 'Point 9'})}
        {inputBox({msg: 'Point 10'})}
        <button onClick={this.sendForChartCreation}>Create Poll</button>
        <div>
          {this.props.token}
        </div>
      </div>
    );
  }
}

createPollsPage.propTypes = {
  loggedIn: React.PropTypes.bool,
  updateLogInStatus: React.PropTypes.func
};
const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

export default connect(mapStateToProps)(createPollsPage);
