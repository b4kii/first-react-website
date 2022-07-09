import React from "react";
import { useState } from "react";

import Question from "./Question"
import Answer from "./Answer"

import styles from "../../styles/Faq.module.css";

export default function Questions({ questionsData }) {
  const [active, setActive] = useState(questionsData);

  const searchForIndex = (id) => {
    let i = 0,
      index;
    questionsData.forEach((element) => {
      if (id === element.id) {
        index = i;
      }
      i++;
    });
    return index;
  };

  const updateActive = (id) => {
    const newState = active.map((state) => {
      if (id === state.id) {
        return { ...state, active: !state.active };
      }

      return state;
    });

    setActive(newState);
  };

  // Ugly as fk but good for now

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

  let wrapper = [];

  questionsData.forEach((question) => {
    wrapper.push(
      <div 
        key={question.id}
        className={styles["faq-wrap"]}
      >
        <Question 
          id={question.id}
          question={question.question}
          animation={faqAnimation}
        />
        <Answer answer={question.answer} />
      </div>
    )
  })

  return (
    <>
      <div className={styles["faq-container"]}>
        {wrapper}
      </div>
    </>
  );
}
