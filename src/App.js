import "./styles/global.css";

import Navigation from "./components/Nav/Navigation";
import About from "./components/About/About";

export default function App() {
  return (
    <>
      <Navigation />

      <About />
      <div id="gallery"></div>
      <div id="pricing"></div>
      <div id="contact"></div>
    </>
  );
}
