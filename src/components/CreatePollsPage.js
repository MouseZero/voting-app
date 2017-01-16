const React = require('react');
import { connect } from 'react-redux';
import { createChart } from '../helpers/backendInterface';
import { setChartAction } from '../actions/chartActions.js'

const inputBox = function(props) {
  return (
    <div>
      {props.msg}:&nbsp;
      <input ref={props.ref} type="text"></input>
    </div>
  )
}


class createPollsPage extends React.Component{
  constructor(props){
    super(props);
    this.sendForChartCreation = this.sendForChartCreation.bind(this);
    this.changeCharts = this.changeCharts.bind(this);
  }

  sendForChartCreation(){
    const points = this.point.reduce((p, x)=>{
      return (x.value) ? Object.assign({}, p, {[x.value]: 0}) : p;
    }, {});
    createChart(this.props.token, {
        title: this.title.value,
        desc:  this.desc.value,
        points
      })
      .then()
      .catch(err=>console.log(err))
  }

  changeCharts(){
    this.props.setCharts(['foo', 'bar', 'baz', 'qux'])
  }

  render() {
    this.point = [];
    return (
      <div>
        {inputBox({ref: node=>{this.title = node}, msg: 'Title'})}
        {inputBox({ref: node=>{this.desc = node}, msg: 'Description'})}
        {inputBox({ref: node=>{this.point[0] = node}, msg: 'Point 0'})}
        {inputBox({ref: node=>{this.point[1] = node}, msg: 'Point 1'})}
        {inputBox({ref: node=>{this.point[2] = node}, msg: 'Point 2'})}
        {inputBox({ref: node=>{this.point[3] = node}, msg: 'Point 3'})}
        {inputBox({ref: node=>{this.point[4] = node}, msg: 'Point 4'})}
        {inputBox({ref: node=>{this.point[5] = node}, msg: 'Point 5'})}
        {inputBox({ref: node=>{this.point[6] = node}, msg: 'Point 6'})}
        {inputBox({ref: node=>{this.point[7] = node}, msg: 'Point 7'})}
        <button onClick={this.sendForChartCreation}>Create Poll</button>
        <div>
          {this.props.token}
        </div>
        <button onClick={this.changeCharts}>change charts</button>
        {this.props.charts}
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
    token: state.login.token,
    charts: state.charts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCharts: (charts) => dispatch(setChartAction(charts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(createPollsPage);
