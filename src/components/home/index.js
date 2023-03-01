// import Blog from "./Blog";
import Styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
console.log("222222222222222222222222222222222222222222");
const Home = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:7000/Blogs");

  const filtredBlogs = blogs?.filter((blog) =>
    blog?.title.toLowerCase().includes(searchedValue.toLowerCase())
  );

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
        {filtredBlogs?.length > 0
          ? filtredBlogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          : "no blogs!"}

        {/* here will be back with all blogs not the search one  */}
        {/* {blogs?.length > 0
          ? blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          : "no blogs!"} */}
      </div>
    </>
  );
};
export default Home;
