// redux
import { combineReducers } from "redux";

// reducers
import blogsReducer from "./reducers/BlogsReducer/reducer";

const AllReducers = combineReducers({
  blogsReducer,
});

export default AllReducers;
