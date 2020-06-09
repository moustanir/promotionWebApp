import { GET_POSTS } from '../actions/post'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: JSON.parse(localStorage.getItem('posts'))
      }
    default:
      return state
  }
}
