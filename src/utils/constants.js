export const ROUTES = {
  postList: '/',
  newPost: '/new-post',
  postDetails: id => id ? `/posts/${id}` : '/posts/:id'
}

export const ENDPOINTS = {
  posts: 'posts',
  uploadImage: id => (`posts/${id}/picture`),
  postDetails: id => `posts/${id}`
}

export const API_URL = 'http://127.0.0.1:5000/'
