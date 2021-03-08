import axios from "axios"

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

export const getPostsPending = () => ({ type: GET_POSTS_PENDING })

export const getPostsSuccess = (posts) => ({ type: GET_POSTS_SUCCESS, payload: { posts } })

export const getPostsError = (errorMessage) => ({
  type: GET_POSTS_ERROR,
  payload: { message: errorMessage }
})

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(getPostsPending())

    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data)
      .then((posts) => dispatch(getPostsSuccess(posts)))
      .catch((error) => dispatch(getPostsError(error.message)))
  }
}
