import React from "react";

import FaqCrossButton from "./FaqCrossButton";
import styles from "../../styles/Faq.module.css";

export default function Question({id, question, animation}) {
  return (
    <div className={styles.question}
      id={id}
      onClick={animation}
    >
      <div 
        className={styles["question-text"]}
      >
        <strong>{question}</strong>
      </div>
      <FaqCrossButton />
    </div>
  );
}
