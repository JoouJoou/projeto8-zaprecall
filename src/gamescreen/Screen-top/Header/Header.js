import "./style.css";
import logoheader from "../../../img/logoheader.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logoheader}></img>
      <h1>ZapRecall</h1>
    </header>
  );
}
