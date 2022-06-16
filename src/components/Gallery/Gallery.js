import React, { useState } from "react";

import styles from "../../styles/Gallery.module.css";
import { images } from "./Images";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const setTransition = () => {};

  return (
    <section id="gallery" className={styles["gallery-section"]}>
      <div className={styles["images-wrapper"]}>
        {/* <div
          className={styles.image}
          style={{ background: `url(${images[3].source})` }}
        ></div> */}

        <div
          className={styles["left-arrow"]}
          onClick={() => {
            setTransition();
            if (currentImage > 0) {
              setCurrentImage(currentImage - 1);
            } else {
              setCurrentImage(images.length - 1);
            }
          }}
        ></div>

        <div
          className={styles["right-arrow"]}
          onClick={() => {
            setTransition();
            if (currentImage < images.length - 1) {
              setCurrentImage(currentImage + 1);
            } else {
              setCurrentImage(0);
            }
          }}
        ></div>

        <img
          id={images[currentImage].id}
          className={styles.image}
          src={images[currentImage].source}
        />

        {images[currentImage].id}
      </div>
    </section>
  );
}
