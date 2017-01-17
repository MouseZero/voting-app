export default function(state = {token: ""}, action){
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
