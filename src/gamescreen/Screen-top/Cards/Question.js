import Turn from "../../../img/Turn.svg";
import React from "react";
import Cardsbutton from "./Cardsbutton/Cardsbutton";

export default function Question({ question, setState, state }) {
  const [answer, setAnswer] = React.useState(false);
  return !answer ? (
    <li className="cards question">
      <div className="question-top">
        <p>{question.Q}</p>
      </div>
      <div className="question-bottom">
        <img
          src={Turn}
          onClick={() => {
            setAnswer(true);
          }}
        ></img>
      </div>
    </li>
  ) : (
    <li className="cards question">
      <div className="question-top">
        <p>{question.R}</p>
      </div>
      <div className="answer-bottom">
        <Cardsbutton
          name="Não lembrei"
          className="button1"
          setState={setState}
          state={state}
        />
        <Cardsbutton
          name="Quase não lembrei"
          className="button2"
          setState={setState}
          state={state}
        />
        <Cardsbutton
          name="Zap!"
          className="button3"
          setState={setState}
          state={state}
        />
      </div>
    </li>
  );
}
