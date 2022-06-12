import React from "react";
import Images from "./Images";

import styles from "../../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <section 
    id="gallery"
    className={styles["gallery-section"]}
    >

      <Images />

    </section>
  );
}