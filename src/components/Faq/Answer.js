import React from "react";

import styles from "../../styles/Faq.module.css";

export default function Answer({answer}) {
  return (
    <div className={styles.answer}>
      <p>- {answer}</p>
    </div>
  );
}
