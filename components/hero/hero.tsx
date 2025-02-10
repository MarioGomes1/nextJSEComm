import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import heroImg from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src={heroImg} alt="hero" fill />
      </div>
      <div className={styles.middleContainer}>
        <h1 className={styles.title}>See Latest styles</h1>
        <p>Do not miss out on blah blah blah</p>
        <div className={styles.buttonContainer}>
          <button>Shop Men</button>
          <button>Shop Women</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
