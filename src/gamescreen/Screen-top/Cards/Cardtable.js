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

export default function Cardtable({ setState }) {
  return (
    <ul className="cardTable">
      {gamedeck.map((value, index) => {
        return (
          <Cards
            key={index}
            number={index}
            question={value}
            setState={setState}
          />
        );
      })}
    </ul>
  );
}
