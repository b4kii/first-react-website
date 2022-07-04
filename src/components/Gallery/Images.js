import React, {useState} from "react";

import { Bird, Flower, Rice, Strawberries, Cat, Dog } from "../../assets/";
import styles from "../../styles/Gallery.module.css";

export const images = [
  { source: Bird, id: "image1", state: "active" },
  { source: Flower, id: "image2", state: "" },
  { source: Rice, id: "image3", state: "" },
  { source: Strawberries, id: "image4", state: "" },
  { source: Dog, id: "image5", state: "" },
  { source: Cat, id: "image6", state: "" }
];

export default function Images() {
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
    <>
        <span
          className={styles["left-arrow"]}
          onClick={() => {
            setCurrentPhoto(currentPhoto - 1);
            changePhoto(currentPhoto - 1);
          }}
        >
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/64/000000/external-Chevron-arrows-tanah-basah-glyph-tanah-basah-9.png" />
        </span>

        <span
          className={styles["right-arrow"]}
          onClick={() => {
            setCurrentPhoto(currentPhoto + 1);
            changePhoto(currentPhoto + 1);
          }}
        >
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/64/000000/external-Right-arrows-tanah-basah-glyph-tanah-basah-3.png" />
        </span>

        {images.map((image) => (
          <img
            id={image.id}
            className={`${styles.photo} ${styles[image.state]}`}
            src={image.source}
            key={image.id}
          />
        ))}
    </>
  );
}
