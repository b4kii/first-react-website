import "./styles/global.css";

import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Gallery} from "./components/Gallery";

export default function App() {
  return (
    <>
      <Navigation />

      <About />
      <Gallery />
      <div id="pricing"></div>
      <div id="contact"></div>
    </>
  );
}
