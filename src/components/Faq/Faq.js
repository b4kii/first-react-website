import React from "react";

import Quotes from "./Quotes"
import Questions from "./Questions"
import styles from "../../styles/Faq.module.css";

const questionsData = [
  {
    question: "Who created the operating system 'Linux'?",
    answer: "Linus Torvalds",
    id: "q1",
    active: false
  },
  {
    question: "The fear of punishment is known as what?",
    answer: "Poinephobia",
    id: "q2",
    active: false
  },
  {
    question: "What is a nebula?",
    answer: "A cloud of dust and gas",
    id: "q3",
    active: false
  },
  {
    question: "What part of the atom has no charge?",
    answer: "Neutron",
    id: "q4",
    active: false
  },
  {
    question: "Gluten is a type of what?",
    answer: "Protein",
    id: "q5",
    active: false
  },
  {
    question: "What does a hygrometer measure?",
    answer: "Humidity",
    id: "q6",
    active: false
  }
];

export default function Faq() {
  return (
    <section id="faq" className={styles["faq-section"]}>
      <Quotes />
      <div className={styles["question-wrapper"]}>
        <h2 className={styles["faq-header"]}>Frequently Asked Questions</h2>
        <Questions questionsData={questionsData}/>
      </div>
    </section>
  );
}