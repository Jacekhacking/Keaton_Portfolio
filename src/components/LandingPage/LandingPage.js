import React from "react";
import styles from "./LandingPage.module.css";
import Selfie from "../UI/Images/About me.JPG";
import PortfolioPic from "../UI/Images/Portfolio pic.png";
import tShirtPic from "../UI/Images/shopping pic.jpg";
import AboutButton from "./AboutButton";

const LandingPage = (props) => {
  return (
    <div>
      {/*header*/}
      <div style={{ position: "relative", zIndex: "3" }}>
        <p style={{ padding: "1em", textAlign: "center", zIndex: "3" }}>
          Welcome! My name is Keaton Hacking. I'm an illustration artist. I
          specialize in digital media.
        </p>
      </div>

      {/*about me component*/}
      <div className={styles["landing-page-card"]}>
        <img src={Selfie} alt="" />
        <div style={{ margin: "1em", zIndex: "2" }}>
          <p className={styles["landing-page-paragraph"]}>
            Learn more about the artist and the inspiration behind his work
          </p>
          <button
            onClick={() => props.handlePageChange("About Me")}
            className={styles["landing-page-card-button"]}
          >
            <AboutButton />
          </button>
        </div>
      </div>

      {/*Portfolio component*/}
      <div className={styles["landing-page-card"]}>
        <div style={{ zIndex: "2" }}>
          <p className={styles["landing-page-paragraph"]}>
            {" "}
            Check out pieces done using a mix of charcoal, and digital media.{" "}
          </p>
          <button
            onClick={() => props.handlePageChange("Portfolio")}
            className={styles["landing-page-card-button"]}
          >
            <section className={"gradient-pink-dark-blue"}>Portfolio</section>
          </button>
        </div>
        <img style={{ margin: "1em" }} src={PortfolioPic} alt="" />
      </div>

      {/*shopping component*/}

      <div className={styles["landing-page-card"]}>
        <img src={tShirtPic} alt="" />
        <div style={{ margin: "1em", zIndex: "2" }}>
          <p className={styles["landing-page-paragraph"]}>
            Shop prints, stickers, clothing inquire about custom pieces!
          </p>
          <button
            onClick={() => props.handlePageChange("Shopping")}
            className={styles["landing-page-card-button"]}
          >
            <section className={"gradient-green-light-blue"}>SHOP</section>
          </button>
        </div>
      </div>

      {/*----------------------------------------------------------------------------------------*/}
      {/*                       landing page blob elements position absolute                     */}
      {/*----------------------------------------------------------------------------------------*/}

      <div className={styles["landing-page-blob-1"]}></div>
      <div className={styles["landing-page-blob-2"]}></div>
      <div className={styles["landing-page-blob-3"]}></div>
      <div className={styles["landing-page-blob-4"]}></div>
      <div className={styles["landing-page-blob-5"]}></div>
      <div className={styles["landing-page-blob-6"]}></div>
    </div>
  );
};
export default LandingPage;
