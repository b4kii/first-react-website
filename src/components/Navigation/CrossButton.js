import React from "react";

import buttons from "../../styles/Navigation.module.css";

export default function CrossButton({ buttonClick }) {
  return (
    <button className={buttons.cross} onClick={buttonClick}>
      &#10006;
    </button>
  );
}
