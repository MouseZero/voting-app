export default function chartReducer (state = {id: -1}, action){
  switch(action.type){
    case 'ADD_DISPLAY_CHART':
      return action.chart;
    default: return state;
  }
}
