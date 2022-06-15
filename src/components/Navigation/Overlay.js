import React from "react";

import menu from "../../styles/Navigation.module.css"

export default function Overlay({ hideOverlay }) {
  return (
    <>
      <div id="menu" className={menu.overlay} onClick={hideOverlay}>
        <div className={menu.wrapper}>
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}
