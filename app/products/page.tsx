import React from "react";
import styles from "./products.module.css";
import ProductsGrid from "@/components/products/productsGrid";
import { prisma } from "@/utils/prisma";

async function Products() {
  const product = await prisma.product.findMany();
  console.log(product);
  return (
    <>
      <section className={styles.bannerContainer}>
        &lt; Slide content goes here &gt;
      </section>
      <section className={styles.productContainer}>
        <ProductsGrid products={product} />
      </section>
    </>
  );
}

export default Products;
