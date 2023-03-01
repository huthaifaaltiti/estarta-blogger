// import Blog from "./Blog";
import Styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:7000/Blogs");

  // const filteredBlogs = blogs?.filter((blog) =>
  //   blog?.title.toLowerCase().includes(searchedValue.toLowerCase())
  // );

  if (loading) return "Loading...";
  if (error) return "Error happened!";

  return (
    <>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Search titles..."
          onChange={(e) => setSearchedValue(e.target.value)}
        />
      </div>
      <div className={Styles.home}>
        {/* ToDo: the main thing i need is my search, so when search will back with a searched blogs not all blogs */}
        {/* {filteredBlogs?.length > 0
          ? filteredBlogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          : "no blogs!"} */}

        {/* here will be back with all blogs not the search one  */}
        {/* {blogs?.length > 0
          ? blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          : "no blogs!"} */}

        {blogs?.length > 0
          ? blogs?.map((blog) => (
              <div className={Styles.blogCards}>
                <div className={Styles.blogCard}>
                  <Link to={`/single/${blog.id}`} key={blog?.id}>
                    <h2>{blog?.title}</h2>
                  </Link>

                  <h3>{blog?.author}</h3>
                  <p>{blog?.body}</p>
                </div>
              </div>
            ))
          : "No blogs!"}
      </div>
    </>
  );
};
export default Home;
