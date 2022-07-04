import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Images from "./Images";
import styles from "../../styles/Gallery.module.css";

const boxVariant = {
  visible: { y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0.3}},
  hidden: { y: "50%", opacity: 0},
};

export default function Gallery() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id="gallery" className={styles["gallery-section"]}>
      <motion.div
        className={styles["images-wrapper"]}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Images />
      </motion.div>
    </section>
  );
}
