import React from "react";

import buttons from "../../styles/Navigation.module.css"

export default function DropdownButton({ buttonClick }) {
  return (
    <button className={buttons.hamburger} onClick={buttonClick}>
      &#8801;
    </button>
  );
}
