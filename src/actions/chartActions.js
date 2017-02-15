import { getChart } from '../helpers/backendInterface';

export function setChartAction(charts){
  return {
    type: 'SET_CHART',
    charts
  };
}

export function setDisplayChartAction(chart){
  return {
    type: 'ADD_DISPLAY_CHART',
    chart
  };
}

export function addViewChartAction(chart){
  return {
    type: 'ADD_VIEW_CHART',
    chart
  };
}

export function setChartToId(id){
  return (dispatch) => {
    getChart(id)
    .then(function({info}){
      dispatch(setDisplayChartAction(info[0]));
    })
    .catch(err => console.log(err));
  }
}
