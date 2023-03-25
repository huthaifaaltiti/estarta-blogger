// blogs reducer constants
import * as BLOGS_CONSTANTS from "./constants";

// fetching all blogs
export const FetchBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_REQUEST,
    });

    const response = await fetch("http://localhost:7000/Blogs");
    const dataBlogs = await response.json();

    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SUCCESS,
      payload: dataBlogs,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

// fetching single blog
export const fetchSingleBlog = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_REQUEST,
    });

    const response = await fetch(`http://localhost:7000/Blogs/${id}`);
    const blogData = await response.json();

    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_SUCCESS,
      payload: blogData,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_FAILURE,
      payload: error.message,
    });
  }
};

// delete single blog
export const fetchSingleBlogDelete = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:7000/Blogs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_DELETE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_CONSTANTS.BLOGS_FETCH_DATA_SINGLE_BLOG_FAILURE,
      payload: error.message,
    });
  }
};
