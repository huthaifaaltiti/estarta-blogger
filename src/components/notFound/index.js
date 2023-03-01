// react-router-dom, react
import React from "react";
import { useNavigate } from "react-router-dom";

// styles, icons, gif
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

        <div className={Styles.message}>
          <p>
            Sorry! It looks that the page that you are searching about, or this link:
            <code className={Styles.url}>{`${window.location.href}`}</code> does
            not belong to this site 😞
          </p>

          <button
            onClick={() => {
              nav("/");
            }}
          >
            <CiCircleChevLeft className={Styles.icon} /> Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
