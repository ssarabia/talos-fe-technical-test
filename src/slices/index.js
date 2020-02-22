/* istanbul ignore file */
import { combineReducers } from 'redux'
import postsReducer from './post/post.slice'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer
