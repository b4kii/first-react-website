import "./styles/global.css";

import {Navigation} from "./components/Navigation";
import {About} from "./components/About";

export default function App() {
  return (
    <>
      <Navigation />

      <About />
      {/* < */}
      <div id="pricing"></div>
      <div id="contact"></div>
    </>
  );
}
