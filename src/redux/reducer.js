import * as types from "./actionType";

const initialState = {
  posts: [],
  post: {},
  loading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
      case types.DELETE_POST:
          return {...state, loading: false,  posts: state.posts.filter(e => e.id !== action.payload.id)}
    default:
      return state;
  }
};

export default postsReducer;
