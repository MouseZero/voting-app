import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createChart } from '../helpers/backendInterface';
import { updateCharts } from '../helpers/commonDispatchers';
import { log, LOW } from '../helpers/log';
import InputBox from './InputBox';
import Button from './Button';

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
    const history = this.props.history;
    const points = this.point.reduce((p, x)=>{
      return (x.value) ? Object.assign({}, p, {[x.value]: 0}) : p;
    }, {});
    const token = this.props.token;
    createChart(token, {
        title: this.title.value,
        desc:  this.desc.value,
        points
    })
    .then( () => this.props.updateAllCharts(token))
    .then( () => history.push('/view'))
    .catch(err=>log(err, LOW));
  }

  pointInputs(numberOf, points){
    const displayPoints = new Array(numberOf);
    for (let i=0; i<numberOf; i++){
      displayPoints[i] = InputBox({
        ref: node => points[i] = node,
        msg: 'Point',
        key: i
      });
    }
    return displayPoints;
  }

  render() {
    this.point = [];
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"></div>
          <div className="col-lg-4 col-md-6 col-sm-8 col-xs-12">
            <h1>Create A Poll</h1>
            {InputBox({
              ref: node => this.title = node,
              msg: 'Title'
            })}
            {InputBox({
              ref: node => this.desc = node,
              msg: 'Description'
            })}
            {Button({
              cb: this.incrementPoints,
              msg: "+"
            })}
            {Button({
              cb: this.decrementPoints,
              msg: "-"
            })}
            {this.pointInputs(this.state.numberOfPoints, this.point)}
            {Button({
              cb: this.sendForChartCreation,
              msg: "Create Poll"
            })}
          </div>
          <div className="col-lg-4 col-md-3 col-sm-2 col-xs-0"></div>
        </div>
      </div>
    );
  }
}
createPollsPage.propTypes = {
  token: PropTypes.string,
  updateAllCharts: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = () => {
  return {
    token: localStorage.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateAllCharts: (token) => updateCharts(token, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createPollsPage);
