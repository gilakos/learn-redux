// a reducer takes in action (what happened), copy of current state
// one reducer per piece of state in store

function posts( state = [], action ){
  switch(action.type){
    case 'INCREMENT_LIKES':
      //return updated state
      //console.log('Incrementing Likes')
      const i = action.index
      return [
        ...state.slice(0,i), //before one we are updating
        {...state[i], likes: state[i].likes+1},
        ...state.slice(i+1),
      ]
    default:
      return state
  }
}

export default posts
