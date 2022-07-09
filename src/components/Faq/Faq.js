import React from "react";

import Quotes from "./Quotes"
import Questions from "./Questions"
import styles from "../../styles/Faq.module.css";

const questionsData = [
  {
    question: "Czy ala ma psa?",
    answer: "Nie, kota.",
    id: "q1",
    active: false
  },
  {
    question: "Ile jest planet w układzie słonecznym?",
    answer: "Trochę ich jest.",
    id: "q2",
    active: false
  },
  {
    question: "Ile to jest 2 + 2?",
    answer: "Chyba 4.",
    id: "q3",
    active: false
  },
  {
    question: "Dlaczego piłka jest okrągła?",
    answer: "Bo tak!",
    id: "q4",
    active: false
  },
  {
    question: "Czy misie jadą do boru?",
    answer: "Tak!",
    id: "q5",
    active: false
  },
  {
    question: "Ilu jest krasnoludków?",
    answer: "Jest siedmiu krasnoludków.",
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