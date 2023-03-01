import Styles from "./styles.module.css";

const NewBlog = ({ x, setState }) => {
  // console.log(window.location)

  return (
    <div className={Styles.newBlog}>
      <h1 onClick={() => setState("hi")}>{x} ssssssssss</h1>
      Add a new blog..
      <form>
        <label>
          Blog title:
          <input type="text" name="name" />
        </label>
        <label>
          Blog Body:
          <input type="text" name="name" />
        </label>
        <label>
          Blog Author:
          <input type="text" name="name" />
        </label>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
