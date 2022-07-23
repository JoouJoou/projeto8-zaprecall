import "./style.css";
import React from "react";
import Cards from "./Cards";
const gamedeck = [];
function deck() {
  const deck = [
    { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
    {
      Q: "O React é __",
      R: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      Q: "Componentes devem iniciar com __",
      R: "letra maiúscula",
    },
    {
      Q: "Podemos colocar __ dentro do JSX ",
      R: "expressões",
    },
    {
      Q: "O ReactDOM nos ajuda __",
      R: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      Q: "Usamos o npm para __",
      R: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      Q: "Usamos props para __",
      R: "passar diferentes informações para componentes",
    },
    {
      Q: "Usamos estado (state) para __",
      R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  deck.sort(() => Math.random() - 0.5);

  let numberQuestions = 3;
  for (let i = 0; i <= numberQuestions; i++) {
    gamedeck.push(deck[i]);
  }
}
deck();

export default function Cardtable() {
  console.log(gamedeck[0]);
  const [card1, setCard1] = React.useState(false);
  const [card2, setCard2] = React.useState(false);
  const [card3, setCard3] = React.useState(false);
  const [card4, setCard4] = React.useState(false);

  return (
    <ul className="cardTable">
      <Cards
        setState={setCard1}
        state={card1}
        number={0}
        question={gamedeck[0]}
      ></Cards>
      <Cards
        setState={setCard2}
        state={card2}
        number={1}
        question={gamedeck[1]}
      ></Cards>
      <Cards
        setState={setCard3}
        state={card3}
        number={2}
        question={gamedeck[2]}
      ></Cards>
      <Cards
        setState={setCard4}
        state={card4}
        number={3}
        question={gamedeck[3]}
      ></Cards>
    </ul>
  );
}
