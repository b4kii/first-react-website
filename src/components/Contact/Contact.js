import React from "react";
import { useState } from "react";

import styles from "../../styles/Contact.module.css";

// TODO: make it useful

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <section id="contact" className={styles["contact-section"]}>
      <h2 className={styles["contact-header"]}>Contact me</h2>
      <form 
        id="contact-form" 
        className={styles.wrapper}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input 
          type="text"
          value={name} 
          onChange={(e) => handleNameChange(e)}
          placeholder="Name" 
        />
        <input 
          type="text" 
          value={email} 
          onChange={(e) => handleEmailChange(e)}
          placeholder="Email" 
        />
        <textarea
          value={message}
          onChange={(e) => handleMessageChange(e)}
          rows="20"
          cols="30"
          placeholder="Your message goes here.."
        ></textarea>
        <button name="submit">Submit</button>
      </form>
    </section>
  );
}