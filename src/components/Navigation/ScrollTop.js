import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

import buttons from "../../styles/Navigation.module.css"
import { Arrow } from "../../assets";

export default function ScrollTop() {

  const [isShowed, setIsShowed] = useState(false);

  const toTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  useEffect(() => {

    let lastYPos = 0;
    const handleScroll = () => {
      const yPos = window.scrollY;

      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      let lastElement = document.getElementById("root").lastElementChild.clientHeight;
      let bottomPage = yPos === scrollHeight - lastElement;

      const isScrollingUp = (yPos < lastYPos || bottomPage) && yPos;
    
      setIsShowed(isScrollingUp);
      lastYPos = yPos;
    };

    window.addEventListener("scroll", handleScroll, false);
  
    return () => {
      window.addEventListener("scroll", handleScroll, false);
    }
  }, [])

  return (
    <motion.button
      onClick={toTop}
      className={buttons.arrow}
      animate = {{
        x: isShowed ? 0 : 500
      }}
      initial={{
        x: 500
      }}
      transition = {{
        duration: 0.2
      }}
      whileHover = {{
        y: [0, -15, 5, -5, 0],
        transition: {
          repeat: Infinity,
          type: "spring",
          stiffness: 1000,
          duration: 1
        }
      }}
      >
    <img src={Arrow} alt="arrow"/>
    </motion.button>
  );
}