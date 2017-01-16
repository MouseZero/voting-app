const React = require('react');
import { connect } from 'react-redux';
import { createChart } from '../helpers/backendInterface';
import { updateCharts } from '../helpers/commonDispatchers.js'

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
  }

  sendForChartCreation(){
    const points = this.point.reduce((p, x)=>{
      return (x.value) ? Object.assign({}, p, {[x.value]: 0}) : p;
    }, {});
    const token = this.props.token;
    createChart(token, {
        title: this.title.value,
        desc:  this.desc.value,
        points
    })
    .then(_ => this.props.updateAllCharts(token))
    .catch(err=>console.log(err))
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateAllCharts: (token) => updateCharts(token, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(createPollsPage);
