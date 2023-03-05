// styles and icons
import "../../index.css";
import Styles from "./styles.module.css";
import { CiUser, CiStickyNote, CiSquareChevRight } from "react-icons/ci";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// react
import React from "react";
import { useState, useEffect } from "react";

// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

// react-helmet
import { Helmet } from "react-helmet";

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

  // stored blog
  const activeBlog = useSelector((state) => state.activeBlog);
  // console.log("Active blog details: ", activeBlog);
  const loadingStatus = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  // blog fetching
  useEffect(() => {
    fetchSingleBlog();

    return () => {
      // Note: in general useEffect does not has a return word, but this return used to delete any effects after the comp not have the desired time to mount (clean-up function)

      dispatch({ type: "FETCH_DATA_SINGLE_DELETE", payload: {} });

      // console.log("I am out of a single blog!");
    };
  }, []);

  async function fetchSingleBlog() {
    try {
      // API data request
      dispatch({ type: "FETCH_DATA_REQUEST" });

      const response = await fetch(`http://localhost:7000/Blogs/${id}`);
      const responseData = await response.json();

      // Fetching blog, Success
      dispatch({ type: "FETCH_DATA_SUCCESS_SINGLE", payload: responseData });
    } catch (error) {
      // Fetching blog, Failure
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
      console.log(error);
    }
  }

  function handleDelete() {
    // Fetching blog, Delete
    const response = fetch(`http://localhost:7000/Blogs/${id}`, {
      method: "DELETE",
    });

    dispatch({ type: "FETCH_DATA_SINGLE_DELETE", payload: response });

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
