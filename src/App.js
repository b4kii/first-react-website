import "./styles/global.css";

import Navigation from "./components/Nav/Navigation";

export default function App() {
  return (
    <>
      <Navigation />

      <div id="about"></div>
      <div id="gallery"></div>
      <div id="pricing"></div>
      <div id="contact"></div>
    </>
  );
}
