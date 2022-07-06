import React from "react";

import Quotes from "./Quotes"
import Questions from "./Questions"
import styles from "../../styles/Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" className={styles["faq-section"]}>
      <Quotes />
      <Questions />
    </section>
  );
}