import React from "react"
import "./styles/global.css";

import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Gallery} from "./components/Gallery";
import {Faq} from "./components/Faq";

export default function App() {
  return (
    <>
      <Navigation />
      <About />
      <Gallery />
      <Faq />
      {/* <div id="pricing"></div> */}
      <div id="contact"></div>
    </>
  );
}
