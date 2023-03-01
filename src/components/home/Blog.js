// styles, icons
import Styles from "./styles.module.css";
import {
  CiUser,
  CiStickyNote,
  CiSquareChevRight,
  CiEdit,
} from "react-icons/ci";
import { ImCheckmark, ImCross } from "react-icons/im";

// react-router-dom
import { Link } from "react-router-dom";

// react
import React from "react";
import { useState } from "react";

export default function Blog({ blog }) {
  const [editableBlog, setEditableBlog] = useState(blog);
  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function handleEdit() {
    setIsEditable(true);
  }

  function handleSave() {
    setEditableBlog((prevBlog) => {
      return {
        ...prevBlog,
        title: newTitle,
      };
    });

    setIsEditable(false);
  }

  return (
    <div className={Styles.blogCard}>
      <header>
        <div className={Styles.titleContainer}>
          <h2>
            <CiSquareChevRight className={Styles.icon} />

            {isEditable ? (
              <div className={Styles.editTitle}>
                <input
                  type="text"
                  defaultValue={editableBlog?.title}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <span>
                  <ImCheckmark onClick={handleSave} />
                  <ImCross onClick={() => setIsEditable(false)} />
                </span>
              </div>
            ) : (
              <>
                <Link to={`/single/${editableBlog?.id}`} key={editableBlog?.id}>
                  {editableBlog?.title}
                </Link>
                <CiEdit className={Styles.iconEditTitle} onClick={handleEdit} />
              </>
            )}
          </h2>
        </div>

        <h3>
          <CiUser className={Styles.icon} /> {editableBlog?.author}
        </h3>
      </header>
      <p>
        <CiStickyNote className={Styles.iconPara} /> {editableBlog?.body}
      </p>
    </div>
  );
}
