import React from "react";

import Quotes from "./Quotes"
import Questions from "./Questions"
import styles from "../../styles/Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" className={styles["faq-section"]}>
      <Quotes />
      <div className={styles["question-wrapper"]}>
        <h2 className={styles["faq-header"]}>Frequently Asked Questions</h2>
        <Questions />
      </div>
    </section>
  );
}