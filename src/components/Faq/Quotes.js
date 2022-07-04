import React from "react";
import { useEffect, useState } from "react";

import styles from "../../styles/Faq.module.css";

const URL = "https://type.fit/api/quotes";

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [animate, setAnimate] = useState(true);

  let data = [];

  const getQuotes = async () => {
    const response = await fetch(URL);
    data = await response.json();
    setQuote((quote) => data[Math.floor(Math.random() * (data.length - 1))]); //
  };

  function display() {
    document.getElementById("quotes-wrapper")
  }

  useEffect(() => {
    getQuotes();
    const interval = setInterval(() => {
      setQuote((quote) => data[Math.floor(Math.random() * (data.length - 1))]);
      setAnimate((animate) => animate = true);
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div id="quotes" className={styles["quotes-section"]}>
      <div
        id="quotes-wrapper"
        onAnimationEnd={() => setAnimate((animate) => animate = false)}
        className={`${styles.wrapper} ${animate ? styles.start : ""}`}
      >
        <p className={styles.text}>{quote.text}</p>
        <small className={styles.author}>{quote.author}</small>
      </div>
    </div>
  );
}
