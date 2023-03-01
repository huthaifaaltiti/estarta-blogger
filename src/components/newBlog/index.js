// styles
import "../../index.css";
import Styles from "./styles.module.css";

// react
import React, { useRef } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigator = useNavigate();

  const myRef = useRef({
    title: "",
    body: "",
    author: "",
  });

  function handleChangeForm(e) {
    // Note: here is destructuring for myRef.current obj, and get back with  these values
    myRef.current = {
      ...myRef.current,
      [e.target.name]: e.target.value,
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Note: form behavior when click "Submit" will make page-reload, so use the line before.
    await fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myRef.current),
    });

    navigator("/");
  }

  return (
    <div className={Styles.page}>
      <div className={Styles.newBlog}>
        <header>
          <h2>Add a new blog</h2>
        </header>
        <form onSubmit={handleSubmit}>
          {/* Note: handleSubmit is equal to (e) => handleSubmit(e) */}
          <label>
            Blog title
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Blog Author
            <input
              type="text"
              name="author"
              placeholder="Blogger Name"
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Blog Body
            <textarea
              type="text"
              name="body"
              placeholder="Write a blog"
              onChange={handleChangeForm}
            />
          </label>

          <div className={Styles.formSubmit}>
            <button type="submit">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
