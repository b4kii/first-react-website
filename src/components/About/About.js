import React, { useEffect } from "react";
import { motion } from "framer-motion"
import Circles from "./Circles"

import styles from "../../styles/About.module.css"
import { Flower } from "../../assets/"

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
        document.getElementById("c1").style.transform = `translateX(${yPosOffset * (-10)}vh)`;
        document.getElementById("c2").style.transform = `translateX(${yPosOffset * (10)}vh)`;
        document.getElementById("c3").style.transform = `translateY(${yPosOffset * -2}vh)`;
        document.getElementById("c4").style.transform = `translateY(${yPosOffset * 2}vh)`;
        document.getElementById("c5").style.transform = `translateY(${yPosOffset * (3)}vh) translateX(${yPosOffset * (-3)}vh)`;
        document.getElementById("c6").style.transform = `translateY(${yPosOffset * (5)}vh)`;
        console.log(yPos);
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
      className={styles.text}
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
        <h2 className={styles.title}>
          <p>ABOUT ME</p>
        </h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aliquid delectus accusantium repellendus dignissimos aut facere hic nisi necessitatibus, tempora quae nesciunt numquam vero, nostrum quaerat eius dolorem autem fugit aspernatur ad. Officiis est voluptates dolorem laudantium a quas in laborum harum, dolores aliquid? Animi culpa, voluptatibus, in placeat beatae facere, laboriosam sequi nam ipsum deserunt quam non aut repudiandae sed nisi expedita. Assumenda, quo? Aspernatur earum quaerat consectetur ad voluptatem, fugit vitae ipsum facilis iusto laudantium vero? Dolores eos, aut adipisci placeat quia sed, sapiente in consequuntur autem ad iusto deserunt quidem magni corrupti, ex perferendis distinctio beatae dolorum.
      </motion.div>
      <motion.div
      className={styles.photo}
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
        <img src={Flower} alt="" />
      </motion.div>
    </section>
  );
}