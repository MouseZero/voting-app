export default function(state = [], action){
  switch(action.type){

    case 'SET_CHART':
      return [action.charts];

    default:
      return state;
  }
}
