import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[400] capitalize`}
        >
          <span className="text-[30px]">SKY~COUTURE</span>
          <br /> Fashion Collections <br /> 2024
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          {/* hero description here */}
          Explore our collections, curate your look, and fall in love with
          fashion again. <br /> Join our community, share your style, and be inspired
          by others. <br />Upgrade your wardrobe today and unlock a world of endless
          possibilities.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
