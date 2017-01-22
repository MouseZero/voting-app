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
