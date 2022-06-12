import React, { useEffect } from "react";
import { motion } from "framer-motion"

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
        document.getElementById("about").style.transform = `translateY(${offset}vh)`;
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
    className={styles["about-section"]}>
      <motion.div 
      className={styles.text}
      animate={{
        x: 0
      }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.2
      }}
      initial={{
        x: "-110%"
      }}
      >
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
        bounce: 0.2
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