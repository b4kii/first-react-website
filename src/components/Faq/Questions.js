import React from "react";
import { useState, useEffect } from "react";

import FaqCrossButton from "./FaqCrossButton";
import styles from "../../styles/Faq.module.css";

const setOfQuestions = [
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
    answer: "Bo nie jest kwadratowa.",
    id: "q4",
    active: false
  },
  {
    question: "Czy misie jadą do boru?",
    answer: "Tak!",
    id: "q5",
    active: false
  }
];

export default function Questions() {
  const [active, setActive] = useState(setOfQuestions);

  const searchForIndex = (id) => {
    let i = 0,
      index;
    setOfQuestions.forEach((element) => {
      if (id === element.id) {
        index = i;
      }
      i++;
    });
    return index;
  };

  const updateActive = (id) => {
    const newState = active.map(state => {
      if (id === state.id) {
        return {...state, active: !state.active};
      }

      return state;
    });

    setActive(newState);
  }

  // Added object of states to track active buttons, but it can be done better

  const faqAnimation = (e) => {
    let faqElement = document.getElementById(e.target.id);
    let index = searchForIndex(e.target.id);

    if (faqElement != null) {
      let parent = faqElement.parentElement;
      let firstBlock = faqElement.querySelector(`.${styles.first}`);
      let secondBlock = faqElement.querySelector(`.${styles.second}`);
      let answer = parent.querySelector(`.${styles.answer}`);

      if (!active[index].active) {
        firstBlock.style.transform = "rotate(360deg)";
        answer.style.height = "40px";
        setTimeout(() => {
          secondBlock.style.transform = "rotate(180deg)";
        }, 100);
      } else {
        firstBlock.style.transform = "rotate(0)";
        secondBlock.style.transform = "rotate(90deg)";
        answer.style.height = "0";
      }

      updateActive(e.target.id);
    }
  };

  return (
    <>
      <div className={styles["faq-container"]}>
        {setOfQuestions.map((element) => (
          <div key={element.id} className={styles["faq-wrap"]}>
            <div
              className={styles.question}
              id={element.id}
              onClick={faqAnimation}
            >
              <div className={styles["question-text"]}>
                <strong>{element.question}</strong>
              </div>
              <FaqCrossButton />
            </div>
            <div className={styles.answer}>
              <p>- {element.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
