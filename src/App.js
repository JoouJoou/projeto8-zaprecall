import Gamescreen from "./gamescreen/Gamescreen";
import Startscreen from "./startscreen/Startscreen";
import React from "react";

export default function App() {
  const [screen, setScreen] = React.useState(1);
  return screen === 1 ? (
    <Startscreen setState={setScreen} />
  ) : (
    <Gamescreen setStateGame={setScreen} />
  );
}
