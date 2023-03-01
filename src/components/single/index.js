// import styles and icons
import Styles from "./styles.module.css";
import { CiEraser } from "react-icons/ci";

// import related files
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Single() {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:7000/Blogs/${id}`);

  function handleDelete() {
    fetch(`http://localhost:7000/Blogs/${id}`, { method: "DELETE" });
    nav("/");
  }

  function handleBackhome() {
    nav("/");
  }

  if (loading) return "Loading .....";
  if (error) return "error .....";

  return (
    <div className={Styles.page}>
      <div className={Styles.card}>
        <header>
          <h2>{blog.title} </h2>
          <h2>{blog.author} </h2>
        </header>

        <div>
          <p>{blog.body}</p>
          
          <button onClick={handleDelete}>
            {" "}
            <CiEraser /> Delete Blog
          </button>

          <button onClick={handleBackhome} className={Styles.back}>
            {" "}
             Back to blogs..
          </button>
        </div>
      </div>
    </div>
  );
}
