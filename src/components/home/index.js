// styles, icons
import "../../index.css";
import Styles from "./styles.module.css";

// react
import React, { useEffect } from "react";
import { useState } from "react";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import Blog from "./Blog";

// custom hook
// import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [searchedValue, setSearchedValue] = useState("");

  // Note: prev-sol using useFetch.js
  // const {
  //   data: blogs,
  //   loading,
  //   error,
  // } = useFetch("http://localhost:7000/Blogs");

  // using redux store:

  
  const dispatch = useDispatch();
  
  // fetching blog
  useEffect(() => {
    fetchData();
  }, []);
  const blogs = useSelector((state) => state.blogs);

  console.log(blogs);
  
  async function fetchData() {
    try {
      // API data request
      dispatch({ type: "FETCH_DATA_REQUEST" });

      const response = await fetch("http://localhost:7000/Blogs");
      const responseData = await response.json();

      // Fetching data, Success
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: responseData });
    } catch (error) {
      // Fetching data, Failure
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
      console.log(error);
    }
  }

  // blogs filtration
  const filteredBlogs = blogs?.filter((blog) =>
    blog?.title.toLowerCase().includes(searchedValue.toLowerCase())
  );

  // Note: prev-sol using useFetch.js
  // if (loading) return "Loading...";
  // if (error) return "Error happened!";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Blogs</title>
      </Helmet>
      {/* search bar */}
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Search blog titles..."
          onChange={(e) => setSearchedValue(e.target.value)}
        />
      </div>

      {/* Blogs from API */}
      <div className={Styles.home}>
        {/* ToDo: the main thing i need is my search, so when search will back with a searched blogs not all blogs */}
        {filteredBlogs?.length > 0 ? (
          filteredBlogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
        ) : (
          <>
            <p className={Styles.noBlogsPara}>
              No blogs! Search another title.
            </p>
          </>
        )}

        {/* here will be back with all blogs not the search one  */}
        {/* {blogs?.length > 0
          ? blogs?.map((blog) => <Blog blog={blog} />)
          : "No blogs!"} */}
      </div>
    </>
  );
};
export default Home;
