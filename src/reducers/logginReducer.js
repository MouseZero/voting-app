export default function(state = {}, action){
  switch(action.type){
    case 'LOGGED_IN_CHANGE':
        return Object.assign({}, state, Object.assign({}, {loggedIn: action.loggedIn}));

    default: 
      return state;
  }
}