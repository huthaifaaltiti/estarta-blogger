// react-router-dom, react
import React from "react";
import { useNavigate } from "react-router-dom";

// styles, icons
import "../../index.css";
import Styles from "./styles.module.css";
import { CiCircleChevLeft } from "react-icons/ci";

// GIF: lottiefiles
import notfoundData from "../../assets/notfoundData.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound() {
  const nav = useNavigate();

  const notFoundedGIFData = {
    animationData: notfoundData,
  };

  return (
    <>
      <div className={Styles.page}>
        <Player
          className={Styles.player}
          autoplay
          loop
          src={notFoundedGIFData.animationData}
        ></Player>

        <div className={Styles.message}>
          <p>
            Sorry! It looks that the page that you are searching about, or this
            link:
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
