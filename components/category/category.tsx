import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
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
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>Visit</button>
    </div>
  );
};

export default Category;
