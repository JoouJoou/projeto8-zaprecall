import "./style.css";
import logostart from "../../img/logostartscreen.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logostart}></img>
      <h1>ZapRecall</h1>
    </div>
  );
}
