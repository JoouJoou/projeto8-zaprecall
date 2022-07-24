import "./style.css";
import Wrong from "../../img/wrong.svg";
import Almostwrong from "../../img/almostwrong.svg";
import Zap from "../../img/zap.svg";
import Endfooter from "./Endfooter";

export default function Footer({ state, setStateGame, setScore }) {
  return state.length === 4 ? (
    <Endfooter state={state} setStateGame={setStateGame} setScore={setScore} />
  ) : (
    <footer className="footer">
      <p>{state.length}/4 CONCLUÍDOS</p>
      <div>
        {state.map((img, index) => {
          switch (img) {
            case "Wrong":
              return <img key={index} src={Wrong}></img>;
            case "Almostwrong":
              return <img key={index} src={Almostwrong}></img>;
            default:
              return <img key={index} src={Zap}></img>;
          }
        })}
      </div>
    </footer>
  );
}
