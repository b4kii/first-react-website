import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Circles from "./Circles";

import styles from "../../styles/About.module.css";
import Vid from "../../assets/video.mp4";
import { Person } from "../../assets/";

export default function About() {


  // Blehh.. 
  useEffect(() => {
    const handleScrollDown = () => {
      const yPos = window.scrollY;

      const offset = 0.01;
      let yPosOffset = -yPos * offset;
      let getHeight =
        document.getElementById("about").clientHeight * offset * -1;

      if (yPosOffset > getHeight) {
        // Hide about section under another one while scrolling
        document.getElementById(
          "about"
        ).style.transform = `translateY(${yPosOffset}vh)`;

        // Animate circles while scrolling - Bleh
        document.getElementById("c1").style.transform = `translate(${
          yPosOffset * -50
        }px, ${yPosOffset * 30}px) rotate(${yPosOffset * 30}deg)`;
        document.getElementById("c2").style.transform = `translate(${
          yPosOffset * -30
        }px, ${yPosOffset * 100}px) rotate(${yPosOffset * 30}deg)`;
        document.getElementById("c3").style.transform = `translateY(${
          yPosOffset * 100
        }px) translateX(${yPosOffset * 30}px) rotate(${yPosOffset * 50}deg)`;
        document.getElementById("c4").style.transform = `translateY(${
          yPosOffset * 40
        }px) translateX(${yPosOffset * 10}px) rotate(${yPosOffset * 30}deg)`;
        document.getElementById("c5").style.transform = `translateX(${
          yPosOffset * -40
        }px) translateY(${yPosOffset * 80}px) rotate(${yPosOffset * 30}deg)`;
        document.getElementById("c6").style.transform = `translate(${
          yPosOffset * -20
        }px, ${yPosOffset * 40}px) rotate(${yPosOffset * 30}deg)`;
      }
    };

    window.addEventListener("scroll", handleScrollDown, false);

    return () => {
      window.addEventListener("scroll", handleScrollDown, false);
    };
  }, []);

  // TODO: Clean up the code
  return (
    <section id="about" className={styles["about-section"]}>
      <video loop autoPlay muted>
        <source src={Vid} typed="video/mp4"></source>
      </video>
      <Circles />
      <motion.div
        className={styles["photo-wrapper"]}
        animate={{
          y: 20
        }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.23
        }}
        initial={{
          y: "-110%"
        }}
      >
        <img src={Person} alt="" />
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles["text-wrapper"]}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.4
          }}
          initial={{
            x: "-110%"
          }}
        >
          <h2 className={styles["about-header"]}>About</h2>
          <p className={styles["about-text"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci eaque perspiciatis non nisi, fugit dicta. Eum obcaecati ab unde magni laudantium. Laborum id illum illo quibusdam incidunt velit eaque, dolore, at cum porro totam amet maxime, architecto eveniet quam aspernatur consectetur labore deserunt facilis aperiam. Ipsum nihil repellendus asperiores voluptatibus?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
