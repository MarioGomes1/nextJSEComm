"use client";

//TODO why do i have to click twice for the modal to open?
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

type ModalParams = {
  onClose: () => void;
  children: React.ReactElement;
  title: string;
};

const Modal = ({ onClose, children, title }: ModalParams) => {
  const [isActive, setIsActive] = useState(false); //Control animation
  const [isMounted, setIsMounted] = useState(true); //Render
  console.log(title);
  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false);
  };

  const handleTransitionEnd = () => {
    if (!isActive) {
      setIsMounted(false);
      onClose();
    }
  };

  const modalClass = isActive
    ? `${styles.modal} ${styles.active} `
    : styles.modal;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot || !isMounted) return null;

  const modalContent = (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={modalClass}
        onTransitionEnd={handleTransitionEnd}
        onClick={(e) => e.stopPropagation}
      >
        <div>{children}</div>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default Modal;
