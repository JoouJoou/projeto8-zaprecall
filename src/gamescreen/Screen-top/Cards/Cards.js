import Arrow from "../../../img/Vector.svg";
import Question from "./Question";
import React from "react";

export default function Cards({
  setStateQuestion,
  stateQuestion,
  setStateAnswer,
  stateAnswer,
  number,
  question,
  setState,
}) {
  const [card, setCard] = React.useState(false);
  return !card ? (
    <li className="cards">
      <p>Pergunta {number + 1}</p>
      <img src={Arrow} onClick={() => setCard(true)}></img>{" "}
    </li>
  ) : (
    <Question
      question={question}
      setStateAnswer={setStateAnswer}
      stateAnswer={stateAnswer}
      setState={setState}
      number={number}
    />
  );
}
