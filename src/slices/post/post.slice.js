import { createSlice } from '@reduxjs/toolkit'

import { ENDPOINTS } from 'utils/constants'
import apiClient from 'utils/apiClient'

export const initialState = {
  posts: [],
  fetching: false
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsInProgress (state) {
      state.fetching = true
    },
    fetchPostsSuccess (state, action) {
      state.posts = action.payload
    },
    fetchPostsError (state, action) {
      state.error = action.payload
      state.fetching = false
    }
  }
})
export const {
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostsInProgress
} = postSlice.actions

export function fetchPosts () {
  return function (dispatch) {
    dispatch(fetchPostsInProgress())
    return apiClient
      .get(ENDPOINTS.posts)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPostsError(error.toString()))
      })
  }
}

export default postSlice.reducer
