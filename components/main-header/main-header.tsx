"use client";
import React, { useState } from "react";
import styles from "./main-header.module.css";
import logo from "@/public/images/simple_logo.jpg";
import Image from "next/image";
import NavLink from "./nav-link";
import Modal from "../modal/modal";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const navItems = (
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
);

const MainHeader = () => {
  const [toggleHamburger, setToggleHamburger] = useState(styles.hamburgerIcon);

  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setShowModal((show) => !show);
  };
  return (
    <div className={`${styles.header} `}>
      <Image className={styles.img} src={logo} alt="logo" />
      <div className={styles.nav}>{navItems}</div>
      <div className={styles.iconContainer}>
        {<IoBagOutline size={30} />}
        <VscAccount size={30} />
        <div onClick={toggleNav} className={styles.hamburgerIcon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
      {showModal && (
        <Modal title="nav" onClose={toggleNav}>
          <div style={{ backgroundColor: "black" }}>{navItems}</div>
        </Modal>
      )}
    </div>
  );
};

export default MainHeader;
