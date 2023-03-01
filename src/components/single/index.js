// styles and icons
import "../../index.css";
import Styles from "./styles.module.css";
import { CiUser, CiStickyNote, CiSquareChevRight } from "react-icons/ci";

// react-router-dom, react
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// custom hook
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
          <h2>
            <CiSquareChevRight className={Styles.icon} />
            {blog.title}
          </h2>
          <h3>
            <CiUser className={Styles.icon} />
            {blog.author}
          </h3>
        </header>

        <div className={Styles.para}>
          <p>
            <CiStickyNote className={Styles.iconPara} />
            {blog.body}
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
