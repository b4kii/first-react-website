import React from "react";
import { useState } from "react";

import Overlay from "./Overlay";
import HamburgerButton from "./HamburgerButton";
import CrossButton from "./CrossButton";
import styles from "../../styles/Navigation.module.css"
import ScrollTop from "./ScrollTop";

export default function Navbar() {
  const [isDropped, setIsDropped] = useState(false);

  const setTransition = () => {
    if (isDropped) {
      document.getElementById("menu").style.height = "0";
      setIsDropped(false);
    } else {
      document.getElementById("menu").style.height = "100vh";
      setIsDropped(true);
    }
  };

  return (
    <nav>
      {/* TODO: Add LOGO on the left side */}
      {/* <div className={styles.logo}>LOGO</div> */}
      {/* TODO: Add simple animation on the middle */}
      {/* <div className={styles["small-animation"]}>Animation</div> */}
      <Overlay hideOverlay={setTransition}/>
      <div className={styles["button-wrapper"]}>
        {isDropped ? (
          <CrossButton buttonClick={setTransition} condition={isDropped} />
        ) : (
          <HamburgerButton buttonClick={setTransition} />
        )}
      </div>
      <ScrollTop />
    </nav>
  );
}
