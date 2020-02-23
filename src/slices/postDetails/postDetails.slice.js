import { createSlice } from '@reduxjs/toolkit'

import { ENDPOINTS } from 'utils/constants'
import apiClient from 'utils/apiClient'

export const initialState = {
  title: '',
  description: '',
  photoUrl: '',
  tags: [],
  fetching: false,
  error: ''
}

const postDetailsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    requestInProgress (state) {
      state.fetching = true
    },
    fetchPostDetailsSuccess (state, action) {
      const { title, description, photoUrl, tags } = action.payload
      state.title = title
      state.description = description
      state.photoUrl = photoUrl
      state.tags = tags
    },
    fetchError (state, action) {
      state.error = action.payload
      state.fetching = false
    }
  }
})
export const {
  requestInProgress,
  fetchPostDetailsSuccess,
  fetchError
} = postDetailsSlice.actions

export function fetchPostDetails (id) {
  return function (dispatch) {
    dispatch(requestInProgress())
    return apiClient
      .get(ENDPOINTS.postDetails(id))
      .then(response => {
        dispatch(fetchPostDetailsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchError(error.toString()))
      })
  }
}

export default postDetailsSlice.reducer
