import React from "react";

import styles from "../../styles/Gallery.module.css";
import {images} from "./Images";

export default function Gallery() {
  return (
    <section 
    id="gallery"
    className={styles["gallery-section"]}
    >
      <div className={styles["images-wrapper"]}>
        <div 
        className={styles.image}
        style={{background: `url(${images[3].source})`}}
        >
        </div>
      </div>
    </section>
  );
}