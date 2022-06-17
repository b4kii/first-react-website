import React, { useState } from "react";

import styles from "../../styles/Gallery.module.css";
import { images } from "./Images";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  // TODO: Add transition on image change
  // const setTransition = () => {
  //   document.getElementById(images[currentImage].id).style.transform =
  //     "scale(0.5)";
  // };

  return (
    <section id="gallery" className={styles["gallery-section"]}>
      <div className={styles["images-wrapper"]}>
        <span
          className={styles["left-arrow"]}
          onClick={() => {
            // setTransition();
            if (currentImage > 0) {
              setCurrentImage(currentImage - 1);
            } else {
              setCurrentImage(images.length - 1);
            }
            console.log(currentImage);
          }}
        >
          <img src="https://img.icons8.com/ultraviolet/64/undefined/chevron-left.png" />
        </span>

        <span
          className={styles["right-arrow"]}
          onClick={() => {
            // setTransition();
            if (currentImage < images.length - 1) {
              setCurrentImage(currentImage + 1);
            } else {
              setCurrentImage(0);
            }
            console.log(currentImage);
          }}
        >
          <img src="https://img.icons8.com/ultraviolet/64/undefined/chevron-right.png" />
        </span>

        <img
          id={images[currentImage].id}
          className={styles.image}
          src={images[currentImage].source}
        />
        {currentImage}
      </div>
    </section>
  );
}
