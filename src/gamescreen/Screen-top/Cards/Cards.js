import Arrow from "../../../img/Vector.svg";
import Question from "./Question";

export default function Cards({
  setStateQuestion,
  stateQuestion,
  setStateAnswer,
  stateAnswer,
  number,
  question,
}) {
  return !stateQuestion ? (
    <li className="cards">
      <p>Pergunta {number + 1}</p>
      <img src={Arrow} onClick={() => setStateQuestion(true)}></img>{" "}
    </li>
  ) : (
    <Question
      question={question}
      setStateAnswer={setStateAnswer}
      stateAnswer={stateAnswer}
    />
  );
}
