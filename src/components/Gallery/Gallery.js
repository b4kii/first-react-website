// import React, { useState } from "react";
import React from "react";
import { useState } from "react";

import styles from "../../styles/Gallery.module.css";
import { images } from "./Images";

export default function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = document.getElementsByClassName(styles["photo"]);

  function changePhoto(next) {
    if (next >= photos.length) next = 0;
    if (next < 0) next = photos.length - 1;

    photos[currentPhoto].classList.toggle(styles["active"]);
    photos[next].classList.toggle(styles["active"]);
    setCurrentPhoto(next);
  }

  return (
    <section id="gallery" className={styles["gallery-section"]}>
      <div className={styles["images-wrapper"]}>
        <span
          className={styles["left-arrow"]}
          onClick={() => {
            setCurrentPhoto(currentPhoto - 1);
            changePhoto(currentPhoto - 1);
          }}
        >
          <img src="https://img.icons8.com/ultraviolet/64/undefined/chevron-left.png" />
        </span>

        <span
          className={styles["right-arrow"]}
          onClick={() => {
            setCurrentPhoto(currentPhoto + 1);
            changePhoto(currentPhoto + 1);
          }}
        >
          <img src="https://img.icons8.com/ultraviolet/64/undefined/chevron-right.png" />
        </span>

        {images.map((image) => (
          <img
            id={image.id}
            className={`${styles.photo} ${styles[image.state]}`}
            src={image.source}
            key={image.id}
          />
        ))}
      </div>
    </section>
  );
}
