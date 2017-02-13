export default function(state = [], action){
  switch(action.type){

    case 'ADD_VIEW_CHART':
      {
        let newStore = [];
        if(state.length < 5){
          newStore = [...state, action.newChart];
        } else {
          newStore = [...state.slice(1), action.newChart];
        }
        return newStore;
      }

    default:
      return state;
  }
}
