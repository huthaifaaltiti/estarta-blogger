// react
import React from "react";
import { useState, useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-helmet
import { Helmet } from "react-helmet";
// creator functions
import {
  fetchSingleBlog,
  fetchSingleBlogDelete,
} from "../../redux/reducers/BlogsReducer/actions";

// styles and icons
import "../../index.css";
import Styles from "./styles.module.css";
import { CiUser, CiStickyNote, CiSquareChevRight } from "react-icons/ci";

// custom hook (used for previous solution):
// import useFetch from "../../hooks/useFetch";

export default function Single() {
  // sol-1: using useFetch:
  // const {
  //   data: blog,
  //   loading,
  //   error,
  // } = useFetch(`http://localhost:7000/Blogs/${id}`);

  const { id } = useParams();
  const nav = useNavigate();
  const { activeBlog } = useSelector((state) => state.blogsReducer);
  // const loading = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();

  // blog fetching
  useEffect(() => {
    dispatch(fetchSingleBlog(id));

    return () => {
      // Note: in general useEffect does not has a return word, but this return used to delete any effects after the comp not have the desired time to mount (clean-up function)

      dispatch({ type: "FETCH_DATA_SINGLE_DELETE", payload: {} });
      // console.log("I am out of a single blog!");
    };
  }, []);

  function handleDelete() {
    dispatch(fetchSingleBlogDelete(id));

    handleBackHome();
  }

  function handleBackHome() {
    nav("/");
  }

  // sol-1: using useFetch
  // if (loading) return "Loading .....";
  // if (error) return "error .....";

  return (
    <div className={Styles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>{`Blog - ${blogs?.title}`}</title> */}
        <title>{`Blog - ${activeBlog?.title}`}</title>
      </Helmet>

      <div className={Styles.card}>
        <header>
          <h2>
            <CiSquareChevRight className={Styles.icon} />
            {/* {blogs?.title} */}
            {activeBlog?.title}
          </h2>
          <h3>
            <CiUser className={Styles.icon} />
            {/* {blogs?.author} */}
            {activeBlog?.author}
          </h3>
        </header>

        <div className={Styles.para}>
          <p>
            <CiStickyNote className={Styles.iconPara} />
            {/* {blogs?.body} */}
            {activeBlog?.body}
          </p>

          <div className={Styles.btns}>
            <button onClick={handleDelete}>Delete Blog</button>

            <button onClick={handleBackHome} className={Styles.backBtn}>
              Back to blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
