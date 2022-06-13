import React from "react";

import styles from "../../styles/About.module.css"


// Change to SVG 
export default function Circles() {
  const circles = [
    {nameClass: "circle1", id: "c1"},
    {nameClass: "circle2", id: "c2"},
    {nameClass: "circle3", id: "c3"},
    {nameClass: "circle4", id: "c4"},
    {nameClass: "circle5", id: "c5"},
    {nameClass: "circle6", id: "c6"},
  ]

  return (
    <>
      {
        circles.map((circle) => (
          <div id={circle.id} className={styles[`${circle.nameClass}`]} key={circle.id}></div>
        ))
      }
    </>
  );
}