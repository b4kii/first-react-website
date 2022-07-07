import React from "react";
import { useState, useEffect } from "react";

import FaqCrossButton from "./FaqCrossButton";
import styles from "../../styles/Faq.module.css";
import { act } from "react-dom/test-utils";

//TODO: change file name

const setOfQuestions = [
  { question: "Czy ala ma psa?", answer: "Nie, kota.", id: "q1" },
  {
    question: "Ile jest planet w układzie słonecznym?",
    answer: "Trochę ich jest.",
    id: "q2"
  },
  { question: "Ile to jest 2 + 2?", answer: "Chyba 4.", id: "q3" },
  {
    question: "Dlaczego piłka jest okrągła?",
    answer: "Bo nie jest kwadratowa.",
    id: "q4"
  },
  { question: "Czy misie jadą do boru?", answer: "Tak!", id: "q5" }
];


const initial = setOfQuestions.map((question) => (
  {id: question.id, active: false}
));

export default function Questions() {
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useState(initial);


  // TODO:
  //  - fix state problem - you have to double click in order to activate animation

  const searchForElement = (id) => {
    initial.map(item => {
      return item.id === id && item.active;
      // item.id === id && console.log(item.active);
    })
  }

  const faqAnimation = (e) => {
    let faqElement = document.getElementById(e.target.id);
    // console.log(searchForElement(e.target.id));

    if (faqElement != null) {

      let parent = faqElement.parentElement;
      let firstBlock = faqElement.querySelector(`.${styles.first}`);
      let secondBlock = faqElement.querySelector(`.${styles.second}`);
      let answer = parent.querySelector(`.${styles.answer}`);

      if (!isClicked) {
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

      setIsClicked(!isClicked);
    }
  };

  return (
    <>
      <div className={styles["faq-container"]}>
        {setOfQuestions.map((element) => (
          <div key={element.id} className={styles["faq-wrap"]}
          >
            <div
              className={styles.question}
              id={element.id}
              onClick={faqAnimation}
            >
              <div className={styles["question-text"]}
              >
                <strong>{element.question}</strong>
              </div>
              <FaqCrossButton 
              />
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
