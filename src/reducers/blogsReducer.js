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
        loading: true,
        error: null,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };

    case "FETCH_DATA_SUCCESS_SINGLE":
      return {
        ...state,
        loading: false,
        error:null,
        activeBlog: action.payload,
      };

      case "FETCH_DATA_SINGLE_DELETE":
        return {
          ...state,
          loading: false,
  
          activeBlog: action.payload,
        };

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
