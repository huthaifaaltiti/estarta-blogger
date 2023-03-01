// import styles and icons
import Styles from "./styles.module.css";
import { CiHome, CiLogin, CiSquarePlus } from "react-icons/ci";

// import related files
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={Styles.center}>
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
      </div>
    </>
  );
};
export default Header;
