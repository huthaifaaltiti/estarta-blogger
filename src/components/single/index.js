// styles and icons
import "../../index.css";
import Styles from "./styles.module.css";
import { CiUser, CiStickyNote, CiSquareChevRight } from "react-icons/ci";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-router-dom, react
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// react-helmet
import { Helmet } from "react-helmet";

// custom hook
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

  // console.log(activeBlog);

  const dispatch = useDispatch();

  // blog fetching
  useEffect(() => {
    fetchSingleData();

    return () => {
      dispatch({ type: "FETCH_DATA_SINGLE_DELETE", payload: {} });

      // console.log("Out of single blog!");
    };
  }, []);

  async function fetchSingleData() {
    try {
      // API blog request
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
    const resp = fetch(`http://localhost:7000/Blogs/${id}`, { method: "DELETE" });
    dispatch({ type: "FETCH_DATA_SUCCESS_SIN", payload: resp });

    nav("/");
  }

  function handleBackhome() {
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

            <button onClick={handleBackhome} className={Styles.backBtn}>
              Back to blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
