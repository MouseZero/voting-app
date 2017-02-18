import { getChart, getLatestCharts } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';

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

export function setChartToIdAction(id){
  return (dispatch) => {
    getChart(id)
    .then(function({info}){
      dispatch(setDisplayChartAction(info[0]));
    })
    .catch(err => log(err, LOW));
  };
}

export function setLatestChartsAction(){
  return (dispatch) => {
    getLatestCharts()
    .then(function({info}){
      dispatch({
        type: 'SET_LATEST_CHARTS',
        charts: info
      });
    })
    .catch(err => log(err, LOW));
  };
}
