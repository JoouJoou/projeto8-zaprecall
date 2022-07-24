import "./style.css";
import Footer from "./Footer/Footer";
import Screentop from "./Screen-top/Screen-top";
import React from "react";

export default function Gamescreen() {
  const [score, setScore] = React.useState([]);
  return (
    <div className="screen2">
      <Screentop setState={setScore} />
      <Footer state={score} />
    </div>
  );
}
