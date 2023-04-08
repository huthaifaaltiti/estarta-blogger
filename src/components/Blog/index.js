// react
import React, { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";

// styles, icons
import Styles from "./Styles.module.css";
import {
  CiUser,
  CiStickyNote,
  CiSquareChevRight,
  CiEdit,
} from "react-icons/ci";
import { ImCheckmark, ImCross } from "react-icons/im";

export default function Blog({ blog }) {
  const [isEditable, setIsEditable] = useState(false);
  const [editableBlog, setEditableBlog] = useState(blog);
  const [newTitle, setNewTitle] = useState("");

  function handleEdit() {
    setIsEditable(true);
  }

  function handleSave() {
    setEditableBlog((prevBlog) => {
      return {
        ...prevBlog,
        title: newTitle || prevBlog.title,
      };
    });

    setIsEditable(false);
  }

  return (
    // Note: in this div bellow, we used "editableBlog" not "blog", because we need the new editable blog that is destructured at line 27

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
                  <ImCheckmark
                    onClick={handleSave}
                    className={Styles.editTitleIcon}
                  />
                  <ImCross
                    className={Styles.editTitleIcon}
                    onClick={() => setIsEditable(false)}
                  />
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
