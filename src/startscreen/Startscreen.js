import "./style.css";
import Logo from "./Logo/Logo";

export default function Startscreen({ state }) {
  return (
    <main>
      <Logo />
      <button onClick={() => state(2)}>Iniciar Recall!</button>
    </main>
  );
}
