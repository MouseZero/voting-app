const React = require('react');
import { connect } from 'react-redux';
import { createChart } from '../helpers/backendInterface';
import { updateCharts } from '../helpers/commonDispatchers';
import { log, LOW } from '../helpers/log';

const inputBox = function(props) {
  return (
    <div key={props.key}>
      {props.msg}:&nbsp;
      <input ref={props.ref} type="text"/>
    </div>
  );
};
inputBox.propTypes = {
  key: React.PropTypes.number,
  msg: React.PropTypes.string,
  ref: React.PropTypes.object
};


class createPollsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numberOfPoints: 1
    };
    this.sendForChartCreation = this.sendForChartCreation.bind(this);
    this.decrementPoints = this.decrementPoints.bind(this);
    this.incrementPoints = this.incrementPoints.bind(this);
    this.pointInputs = this.pointInputs.bind(this);
  }

  decrementPoints(){
    this.state.numberOfPoints > 1
      && this.setState({numberOfPoints: this.state.numberOfPoints - 1});
  }

  incrementPoints(){
    this.setState({numberOfPoints: this.state.numberOfPoints + 1});
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
    .catch(err=>log(err, LOW));
  }

  pointInputs(numberOf, points){
    const displayPoints = new Array(numberOf);
    for (var i=0; i<numberOf; i++){
      displayPoints[i] = inputBox({
        ref: node=>{points[i] = node},
        msg: 'Point',
        key: i
      });
    }
    return displayPoints;
  }

  render() {
    this.point = [];
    const pointInputs = new Array(this.state.numberOfPoints);
    return (
      <div>
        {this.state.numberOfPoints}
        <br />
        <button onClick={this.incrementPoints}>inc</button><button onClick={this.decrementPoints}>dec</button>
        {inputBox({
          ref: node=>{this.title = node},
          msg: 'Title'
        })}
        {inputBox({
          ref: node=>{this.desc = node},
          msg: 'Description'
        })}
        {this.pointInputs(this.state.numberOfPoints, this.point)}
        <button onClick={this.sendForChartCreation}>Create Poll</button>
        <div>
          {this.props.token}
        </div>
      </div>
    );
  }
}
createPollsPage.propTypes = {
  token: React.PropTypes.string,
  updateAllCharts: React.PropTypes.function
};

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
};
const mapDispatchToProps = dispatch => {
  return {
    updateAllCharts: (token) => updateCharts(token, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(createPollsPage);
