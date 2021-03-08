import * as actions from './actions'

const initialState = {
  fetching: false,
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POSTS_PENDING:
      return {
        ...state,
        fetching: true
      }
    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: action.payload.posts
      }
    case actions.GET_POSTS_ERROR:
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}
