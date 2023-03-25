// react-router-dom
import { Link } from "react-router-dom";

// styles, icons
import Styles from "./styles.module.css";
import "../../index.css";
import { CiHome, CiLogin, CiSquarePlus } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className={Styles.header}>
        <nav>
          <ul>
            <li>Estarta Blog</li>
            <li>
              <Link to={"/"}>
                <CiHome className={Styles.icon} />
                Home
              </Link>
            </li>
            <li>
              <CiLogin className={Styles.icon} />
              Log in
            </li>
            <li>
              <Link to={"/new-blog"}>
                <CiSquarePlus className={Styles.icon} />
                New Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
