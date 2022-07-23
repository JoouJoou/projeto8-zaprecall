import "./style.css";
import Footer from "./Footer/Footer";
import Screentop from "./Screen-top/Screen-top";
import React from "react";

export default function Gamescreen() {
  const [button, setButton] = React.useState(null);
  return (
    <div className="screen2">
      <Screentop setState={setButton} state={button} />
      <Footer setState={setButton} state={button} />
    </div>
  );
}
