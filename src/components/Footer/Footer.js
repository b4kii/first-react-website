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
      <a href="/#" className="youtube">
        <YouTube 
          style={iconStyles}
        />
      </a>
      <a href="/#">
        <Instagram 
          style={iconStyles}
        />
      </a>
      <a href="/#">
        <Twitter 
          style={iconStyles}
        />
      </a>
      <a href="/#">
        <GitHub 
          style={iconStyles}
        />
      </a>
      </dir>
      <div>&copy; 2022 Baki Bakson Bakuś</div>
    </footer>
  );
}