import React from "react";
import styles from "./category.module.css";
import Image, { StaticImageData } from "next/image";

interface CategoryProps {
  title: string;
  image: StaticImageData;
  desc: string;
}

const Category = ({ title, image, desc }: CategoryProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src={image} alt="" />
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>Visit</button>
      </div>
    </div>
  );
};

export default Category;
