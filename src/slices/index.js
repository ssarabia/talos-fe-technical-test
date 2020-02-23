/* istanbul ignore file */
import { combineReducers } from 'redux'
import postsReducer from './post/post.slice'
import postDetailsReducer from './postDetails/postDetails.slice'

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetails: postDetailsReducer
})

export default rootReducer
