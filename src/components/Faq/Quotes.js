import React from "react";
import { useEffect, useState } from "react";

import styles from "../../styles/Faq.module.css";

const URL = "https://type.fit/api/quotes";

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [animate, setAnimate] = useState(true);
  const [error, setError] = useState(false);

  let data = [];

  const getQuotes = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Test ${response.status}`);
      };
      data = await response.json();
      setQuote((quote) => data[Math.floor(Math.random() * (data.length - 1))]);
      setError(null);
    } catch (err) {
      setError(err.message);
      setQuote(null);
    }
  };

  useEffect(() => {
    getQuotes();
    const interval = setInterval(() => {
      setQuote((quote) => data[Math.floor(Math.random() * (data.length - 1))]);
      setAnimate((animate) => (animate = true));
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="quotes" className={styles["quotes-section"]}>
      <div
        id="quotes-wrapper"
        onAnimationEnd={() => setAnimate((animate) => (animate = false))}
        className={`${styles.wrapper} ${animate ? styles.start : ""}`}
      >
        <p className={styles.text}>{error ? error : quote.text }</p>
        <small className={styles.author}>{error ? error : quote.author}</small>
      </div>
    </div>
  );
}
