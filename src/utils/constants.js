export const ROUTES = {
  postList: '/',
  newPost: '/new-post'
}

export const ENDPOINTS = {
  posts: 'posts',
  uploadImage: id => (`posts/${id}/picture`)
}

export const API_URL = 'http://127.0.0.1:5000/'
