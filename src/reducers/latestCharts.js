export default function(state = {}, action){
  switch(action.type){
    case 'SET_LATEST_CHARTS':
      return action.charts;
    default:
      return state;
  }
}
