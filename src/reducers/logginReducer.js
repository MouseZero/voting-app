export default function(state = {}, action){
  switch(action.type){

    case 'CHANGE_TOKEN':
      return Object.assign(
        {},
        state,
        {token: action.token}
      )
      
    default:
      return state;
  }
}
