import React from "react";
import { useState, useEffect } from "react";

import styles from "../../styles/Faq.module.css";

export default function FaqCrossButton() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const container = document.querySelector(`.${styles["faq-container"]}`);
    const firstBlock = document.querySelector(`.${styles.first}`);
    const secondBlock = document.querySelector(`.${styles.second}`);

    const crossSpin = () => {
      firstBlock.style.transform = "rotate(360deg)";
      setTimeout(() => {
        secondBlock.style.transform = "rotate(180deg)";
      }, 100);
    };

    const crossSpinBack = () => {
      firstBlock.style.transform = "rotate(0)";
      secondBlock.style.transform = "rotate(90deg)";
    };

    const spinAnimation = () => {
      setIsClicked(!isClicked);
      isClicked ? crossSpin() : crossSpinBack();
    };

    container.addEventListener("click", spinAnimation);

    return () => {
      container.removeEventListener("click", spinAnimation);
    };
  }, [isClicked]);

  return (
    <div className={styles["cross-button"]}>
      <span className={styles.first}></span>
      <span className={styles.second}></span>
    </div>
  );
}
