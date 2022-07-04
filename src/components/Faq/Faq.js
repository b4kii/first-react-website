import React from "react";

import Quotes from "./Quotes"
import styles from "../../styles/Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" className={styles["faq-section"]}>
      <Quotes />
      <div>
        table
      </div>
    </section>
  );
}