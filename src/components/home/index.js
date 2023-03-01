// styles, icons
import "../../index.css";
import Styles from "./styles.module.css";

import Blog from "./Blog";

// custom hook
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const Home = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:7000/Blogs");

  const filteredBlogs = blogs?.filter((blog) =>
    blog?.title.toLowerCase().includes(searchedValue.toLowerCase())
  );

  if (loading) return "Loading...";
  if (error) return "Error happened!";

  return (
    <>
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
        {filteredBlogs?.length > 0
          ? filteredBlogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          : "no blogs!"}

        {/* here will be back with all blogs not the search one  */}
        {/* {blogs?.length > 0
          ? blogs?.map((blog) => <Blog blog={blog} />)
          : "No blogs!"} */}
      </div>
    </>
  );
};
export default Home;
