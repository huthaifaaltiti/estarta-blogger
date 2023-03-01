// import related files
import React from "react";
import { useNavigate } from "react-router-dom";

// import styles, icons, gif
import notfoundData from "../../assets/notfoundData.json";
import Styles from "./styles.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { CiCircleChevLeft } from "react-icons/ci";

export default function NotFound() {
  const nav = useNavigate();

  const notFoundedGIFData = {
    
    animationData: notfoundData,
  };

  return (
    <>
      <div className={Styles.page}>
        <Player
          autoplay
          loop
          src={notFoundedGIFData.animationData}
          style={{ height: "300px", width: "300px" }}
        ></Player>

        <div>
          <p>
            Not founded!{" "}
            <button
              onClick={() => {
                nav("/");
              }}
            >
              {" "}
              <CiCircleChevLeft className={Styles.icon} /> Back to Home{" "}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
