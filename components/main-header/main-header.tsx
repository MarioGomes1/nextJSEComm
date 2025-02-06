"use client";
import React, { useState } from "react";
import styles from "./main-header.module.css";
import logo from "@/public/images/logo.webp";
import Image from "next/image";
import NavLink from "./nav-link";

const MainHeader = () => {
  const [toggleHamburger, setToggleHamburger] = useState(styles.hamburgerIcon);

  const toggleNav = () => {};
  return (
    <div className={`${styles.header} `}>
      <Image className={styles.img} src={logo} alt="logo" />
      {/* <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href={"/men"}>Men</NavLink>
          </li>
          <li>
            <NavLink href={"/women"}>Women</NavLink>
          </li>
          <li>
            <NavLink href={"/kids"}>Kids</NavLink>
          </li>
        </ul>
      </nav> */}
      <div onClick={toggleNav} className={styles.hamburgerIcon}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </div>
  );
};

export default MainHeader;
