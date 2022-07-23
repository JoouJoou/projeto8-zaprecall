import Arrow from "../../../img/Vector.svg";
import Turn from "../../../img/Turn.svg";

export default function Cards({ setState, state, number, question }) {
  console.log(state);

  return !state ? (
    <li className="cards">
      <p>Pergunta {number + 1}</p>
      <img src={Arrow} onClick={() => setState(true)}></img>{" "}
    </li>
  ) : (
    <li className="cards question">
      <div className="question-top">
        <p>{question.Q}</p>
      </div>
      <div className="question-bottom">
        <img src={Turn}></img>
      </div>
    </li>
  );
}
