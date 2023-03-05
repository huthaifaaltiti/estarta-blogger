// blogsReducer
const initialState = {
  blogs: [],
  loading: false,
  error: null,
  activeBlog: {},
};

const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        error:null,
        loading: true,
      };

      // blogs, Success
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error:null,
        blogs: action.payload,
      };

      // Single page blog, Success
    case "FETCH_DATA_SUCCESS_SINGLE":
      return {
        ...state,
        loading: false,
        error: null,
        activeBlog: action.payload,
      };

      // delete blog
    case "FETCH_DATA_SINGLE_DELETE":
      return {
        ...state,
        loading: false,
        error:null,
        activeBlog: action.payload,
      };

      // blogs, blog fetching failure
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default namesReducer;
