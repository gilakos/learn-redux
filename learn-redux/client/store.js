import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

//default data
import comments from './data/comments'
import posts from './data/posts'

//create object for default data
const defaultState = {
  posts: posts,
  comments: comments,
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f

)
//create the store
const store = createStore(
  rootReducer,
  defaultState,
  enhancers
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(browserHistory, store)

//add hot reloading for non-component updates
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
