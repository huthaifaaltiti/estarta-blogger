// styles, icons
import Styles from "./styles.module.css";
import {
  CiUser,
  CiStickyNote,
  CiSquareChevRight,
  CiEdit,
} from "react-icons/ci";

// react-router-dom
import { Link } from "react-router-dom";

import React from "react";
import { useState } from "react";

export default function Blog({ blog }) {
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable(true);
  }

  return (
    <div className={Styles.blogCard}>
      <header>
        <div className={Styles.titleContainer}>
          <Link to={`/single/${blog.id}`} key={blog?.id}>
            <h2>
              <CiSquareChevRight className={Styles.icon} />

              {isEditable ? (
                <input type="text" defaultValue={blog.title} />
              ) : (
                <>{blog?.title}</>
              )}
            </h2>
          </Link>

          <CiEdit className={Styles.iconEditTitle} onClick={handleEdit} />
        </div>

        <h3>
          <CiUser className={Styles.icon} /> {blog?.author}
        </h3>
      </header>
      <p>
        <CiStickyNote className={Styles.iconPara} /> {blog?.body}
      </p>
    </div>
  );
}
