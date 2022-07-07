import React from "react";

import styles from "../../styles/Faq.module.css";

export default function FaqCrossButton() {

  return (
    <div className={styles["cross-button"]}>
      <span className={styles.first}></span>
      <span className={styles.second}></span>
    </div>
  );
}
