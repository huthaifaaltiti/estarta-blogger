// react
import React, { useEffect } from "react";
import { useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// react-helmet
import { Helmet } from "react-helmet";
// component
import Blog from "../../components/Blog/index";

import { FetchBlogs } from "../../redux/reducers/BlogsReducer/actions";

// styles, icons
import "../../index.css";
import Styles from "./styles.module.css";

// 1st solution: using custom hook
// import useFetch from "../../hooks/useFetch";

const Home = () => {
  const dispatch = useDispatch();
  const {blogs} = useSelector((state) => state.blogsReducer);
  const [searchedValue, setSearchedValue] = useState("");

  // Note: prev-sol using useFetch.js
  // const {
  //   data: blogs,
  //   loading,
  //   error,
  // } = useFetch("http://localhost:7000/Blogs");

  // 2nd sol: fetching blogs using redux store
  useEffect(() => {
    dispatch(FetchBlogs());
    
  }, []);


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
          ? blogs?.map((blog) => <Blog key={blog?.id} blog={blog} />)
          : "No blogs!"} */}
      </div>
    </>
  );
};
export default Home;
