import Turn from "../../../img/Turn.svg";
import React from "react";
import Wrong from "../../../img/wrong.svg";
import Almostwrong from "../../../img/almostwrong.svg";
import Zap from "../../../img/zap.svg";

export default function Question({ question, setState, number }) {
  const [answer, setAnswer] = React.useState(false);
  const [closed, setClosed] = React.useState(null);

  const updateScore = (score) => {
    setState((value) => [...value, score]);
  };

  return closed ? (
    <li className="cards closed">
      <p
        className={(() => {
          switch (closed) {
            case Wrong:
              return "wrong";
            case Almostwrong:
              return "almostwrong";
            default:
              return "zap";
          }
        })()}
      >
        Pergunta {number + 1}
      </p>
      <img src={closed}></img>
    </li>
  ) : !answer ? (
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
        <button
          className="button1"
          onClick={() => {
            setClosed(Wrong);
            updateScore("Wrong");
          }}
        >
          Não lembrei
        </button>
        <button
          className="button2"
          onClick={() => {
            setClosed(Almostwrong);
            updateScore("Almostwrong");
          }}
        >
          Quase não lembrei
        </button>
        <button
          className="button3"
          onClick={() => {
            setClosed(Zap);
            updateScore("Zap");
          }}
        >
          Zap!
        </button>
      </div>
    </li>
  );
}
