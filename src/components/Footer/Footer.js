import React from "react";

import { YouTube } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";

const iconStyles = {
  width: "50px", 
  height: "50px",
  color: "black"
}

export default function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <dir className="icons-wrapper">
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <YouTube 
          style={iconStyles}
        />
      </a>
      <a 
        href="https://www.instagram.com"
        target="_blank" rel="noopener noreferrer"
      >
        <Instagram 
          style={iconStyles}
        />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank" rel="noopener noreferrer"
      >
        <Twitter 
          style={iconStyles}
        />
      </a>
      <a 
        href="https://www.github.com"
        target="_blank" rel="noopener noreferrer"
      >
        <GitHub 
          style={iconStyles}
        />
      </a>
      </dir>
      <div>&copy; 2022 Baki Bakson Bakuś</div>
    </footer>
  );
}