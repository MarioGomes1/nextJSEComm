import MainHeader from "@/components/main-header/main-header";
import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import CategoryPreview from "@/components/category/category-preview";

export default function Home() {
  return (
    <div className={`${styles.page} `}>
      <Hero />
      <CategoryPreview />
    </div>
  );
}
