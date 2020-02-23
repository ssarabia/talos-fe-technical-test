import { createSlice } from '@reduxjs/toolkit'

import { ENDPOINTS } from 'utils/constants'
import apiClient from 'utils/apiClient'

export const initialState = {
  posts: [],
  fetching: false,
  createSuccess: false
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    requestInProgress (state) {
      state.fetching = true
    },
    fetchPostsSuccess (state, action) {
      state.posts = action.payload
    },
    fetchError (state, action) {
      state.error = action.payload
      state.fetching = false
    },
    createPostSuccess (state) {
      state.fetching = false
      state.createSuccess = true
    },
    createPostFinish (state) {
      state.createSuccess = false
    }
  }
})
export const {
  fetchPostsSuccess,
  fetchError,
  requestInProgress,
  createPostSuccess,
  createPostFinish
} = postSlice.actions

export function fetchPosts () {
  return function (dispatch) {
    dispatch(requestInProgress())
    return apiClient
      .get(ENDPOINTS.posts)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchError(error.toString()))
      })
  }
}

function uploadImage (postId, postImage) {
  const image = new FormData()
  image.append('image', postImage, postImage.fileName)
  return function (dispatch) {
    return apiClient
      .put(
        ENDPOINTS.uploadImage(postId),
        image,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      .then(response => {
        dispatch(createPostSuccess())
      })
      .catch(error => {
        dispatch(fetchError(error.toString()))
      })
  }
}

export function createPost (fields) {
  const { title, description, tags, image } = fields
  return function (dispatch) {
    dispatch(requestInProgress())
    return apiClient
      .post(ENDPOINTS.posts, { title, description, tags })
      .then(response => {
        dispatch(uploadImage(response.data.id, image))
      })
      .catch(error => {
        dispatch(fetchError(error.toString()))
      })
  }
}

export default postSlice.reducer
