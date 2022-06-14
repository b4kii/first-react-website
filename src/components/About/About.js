import React, { useEffect } from "react";
import { motion } from "framer-motion"
import Circles from "./Circles"

import styles from "../../styles/About.module.css"
import { Person } from "../../assets/"

export default function About() {

  useEffect(() => {

    const handleScrollDown = () => {
      const yPos = window.scrollY;

      const offset = 0.01;
      let yPosOffset = -yPos * offset;
      let getHeight = (document.getElementById("about").clientHeight * offset) * -1;

      if (yPosOffset > getHeight) {
        // hide about section under another one while scrolling
        document.getElementById("about").style.transform = `translateY(${yPosOffset}vh)`;

        // animate circle while scrolling
        document.getElementById("c1").style.transform = `translate(${yPosOffset * -50}px, ${yPosOffset * 30}px)`;
        document.getElementById("c2").style.transform = `translate(${yPosOffset * -30}px, ${yPosOffset * 100}px)`;
        document.getElementById("c3").style.transform = `translateY(${yPosOffset * 100}px) translateX(${yPosOffset * 30}px)`;
        document.getElementById("c4").style.transform = `translateY(${yPosOffset * 40}px) translateX(${yPosOffset * 10}px)`;
        document.getElementById("c5").style.transform = `translateX(${yPosOffset * -40}px) translateY(${yPosOffset * 80}px)`;
        document.getElementById("c6").style.transform = `translate(${yPosOffset * -20}px, ${yPosOffset * 40}px)`;
      }
    };

    window.addEventListener("scroll", handleScrollDown, false);
  
    return () => {
      window.addEventListener("scroll", handleScrollDown, false);
    }
  }, [])

  return (
    <section 
    id="about"
    className={styles["about-section"]}
    >
      <Circles />

      <motion.div 
      className={styles["text-wrapper"]}
      animate={{
        x: 0
      }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.23
      }}
      initial={{
        x: "-110%"
      }}
      >
        <h2 className={styles["about-header"]}>
          <p>ABOUT</p>
        </h2>
        <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aliquid delectus accusantium repellendus dignissimos aut facere hic nisi necessitatibus, tempora quae nesciunt numquam vero, nostrum quaerat eius dolorem autem fugit aspernatur ad. Officiis est voluptates dolorem laudantium a quas in laborum harum, dolores aliquid? Animi culpa, voluptatibus, in placeat beatae facere, laboriosam sequi nam ipsum deserunt quam non aut repudiandae sed nisi expedita. Assumenda, quo? Aspernatur earum quaerat consectetur ad voluptatem, fugit vitae ipsum facilis iusto laudantium vero? Dolores eos, aut adipisci placeat quia sed, sapiente in consequuntur autem ad iusto deserunt quidem magni corrupti, ex perferendis distinctio beatae dolorum.
        </p>
      </motion.div>

      <motion.div
      className={styles["photo-wrapper"]}
      animate={{
        x: 0
      }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.23
      }}
      initial={{
        x: "110%"
      }}
      >
        <img src={Person} alt="" />
      </motion.div>
    </section>
  );
}