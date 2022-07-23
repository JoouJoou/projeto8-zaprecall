import "./style.css";
import Logo from "./Logo/Logo";

export default function Startscreen({ setState }) {
  return (
    <main>
      <Logo />
      <button onClick={() => setState(2)}>Iniciar Recall!</button>
    </main>
  );
}
