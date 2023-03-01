// styles
import "../../index.css";
import Styles from "./styles.module.css";

const NewBlog = () => {
  return (
    <div className={Styles.page}>
      <div className={Styles.newBlog}>
        <header>
          <h2>Add a new blog</h2>
        </header>
        <form>
          <label>
            Blog title
            <input type="text" name="name" placeholder="Blog Title" />
          </label>

          <label>
            Blog Author
            <input type="text" name="name" placeholder="Blogger Name" />
          </label>

          <label>
            Blog Body
            <textarea type="text" name="name" placeholder="Write a blog" />
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
