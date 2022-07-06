import React from "react";

import FaqCrossButton from "./FaqCrossButton";
import styles from "../../styles/Faq.module.css";

export default function Questions() {
  return (
    <>
      <div className={styles["faq-container"]}>
        <div className={styles.question}>
          <p>test</p>
        </div>
        <FaqCrossButton />
      </div>
    </>
  );
}
