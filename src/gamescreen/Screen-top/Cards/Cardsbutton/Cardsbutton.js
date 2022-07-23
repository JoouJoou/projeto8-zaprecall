import "./style.css";

export default function Cardsbutton({ className, name, setState, state }) {
  return (
    <button className={className} onClick={() => setState(className)}>
      {name}
    </button>
  );
}
