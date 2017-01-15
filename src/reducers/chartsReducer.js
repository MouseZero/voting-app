export default function(state = {charts: {}}, action){
  switch(action.type){
    case 'ADD_CHART':
      return [...state, action.chart]

    default:
      return state;
  }
}
