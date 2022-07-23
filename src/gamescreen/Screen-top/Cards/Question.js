import Turn from "../../../img/Turn.svg";
import React from "react";

export default function Question({ question, setStateAnswer, stateAnswer }) {
  return !stateAnswer ? (
    <li className="cards question">
      <div className="question-top">
        <p>{question.Q}</p>
      </div>
      <div className="question-bottom">
        <img
          src={Turn}
          onClick={() => {
            setStateAnswer(true);
          }}
        ></img>
      </div>
    </li>
  ) : (
    <li className="cards question">
      <div className="question-top">
        <p>{question.R}</p>
      </div>
      <div className="question-bottom">
        <button>Não Lembrei</button>
        <button>Quase não lembrei</button>
        <button>Zap!</button>
      </div>
    </li>
  );
}
