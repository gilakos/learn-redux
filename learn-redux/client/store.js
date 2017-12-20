import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { broswerHistory } from 'react-router'

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

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(broswerHistory, store)

export default store
