// Blogs Reducer Constants
import * as BLOGS_CONSTANTS from "./constants";

// blogsReducer state
const initialState = {
  blogs: [],
  loading: false,
  error: null,
  activeBlog: {},
};

// blogsReducer
const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_CONSTANTS.BLOGS_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };

    case BLOGS_CONSTANTS.BLOGS_FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activeBlog: action.payload,
      };

      case BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_DELETE:
        return {
          ...state,
          loading: false,
          error: null,
          activeBlog: action.payload,
        };

    default:
      return state;
  }
};

export default blogsReducer;
