import "./style.css";
import Wrong from "../../img/wrong.svg";
import Almostwrong from "../../img/almostwrong.svg";
import Zap from "../../img/zap.svg";
import Sad from "../../img/sad7.svg";
import Party from "../../img/party2.svg";

export default function Endfooter({ state, setStateGame, setScore }) {
  return state.includes("Wrong") ? (
    <footer className="footer endfooter">
      <div className="footer-top">
        <img src={Sad}></img>
        <h1>Putz...</h1>
      </div>
      <h2>Ainda faltam alguns... Mas não desanime!</h2>
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
      <button
        className="restart"
        onClick={() => {
          setStateGame(1);
          setScore([]);
        }}
      >
        REINICIAR RECALL
      </button>
    </footer>
  ) : (
    <footer className="footer endfooter">
      <div className="footer-top">
        <img src={Party}></img>
        <h1>Parabéns!</h1>
      </div>
      <h2>Você não esqueceu de nenhum flashcard!</h2>
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
      <button
        className="restart"
        onClick={() => {
          setStateGame(1);
          setScore([]);
        }}
      >
        REINICIAR RECALL
      </button>
    </footer>
  );
}
