import React from "react"
import "./styles/global.css";

import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Gallery} from "./components/Gallery";
import {Faq} from "./components/Faq";
import {Contact} from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <About />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
