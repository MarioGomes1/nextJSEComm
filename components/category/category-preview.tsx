import React from "react";
import styles from "./category-preview.module.css";
import Category from "./category";
import menImg from "@/public/images/men.jpeg";
import kidsImg from "@/public/images/kids.jpeg";
import womenImg from "@/public/images/women.avif";
import accessories from "@/public/images/accessories.webp";

const CategoryPreview = () => {
  return (
    <div className={styles.container}>
      <Category
        title="men"
        image={menImg}
        desc="Gentlemen, upgrade your style"
      />
      <Category
        title="kids"
        image={kidsImg}
        desc="Cool looks for the little ones!"
      />
      <Category
        title="women"
        image={womenImg}
        desc="Shop our latest women's summer looks"
      />
      <Category
        title="accessories"
        image={accessories}
        desc="Little extra goes a long way"
      />
    </div>
  );
};

export default CategoryPreview;
