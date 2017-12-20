// a reducer takes in action (what happened), copy of current state
// one reducer per piece of state in store

function posts( state = [], action ){
  console.log( state, action )
  return(
    state
  )
}

export default posts
