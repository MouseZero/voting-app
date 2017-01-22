export default function chartReducer (state = {}, action){
  switch(action.type){
    case 'ADD_DISPLAY_CHART':
      return action.chart;
    default: return state;
  }
}
