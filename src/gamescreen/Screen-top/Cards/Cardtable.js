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

  const [answer1, setAnswer1] = React.useState(false);
  const [answer2, setAnswer2] = React.useState(false);
  const [answer3, setAnswer3] = React.useState(false);
  const [answer4, setAnswer4] = React.useState(false);

  return (
    <ul className="cardTable">
      <Cards
        setStateQuestion={setCard1}
        setStateAnswer={setAnswer1}
        stateQuestion={card1}
        stateAnswer={answer1}
        number={0}
        question={gamedeck[0]}
      ></Cards>
      <Cards
        setStateQuestion={setCard2}
        setStateAnswer={setAnswer2}
        stateQuestion={card2}
        stateAnswer={answer2}
        number={1}
        question={gamedeck[1]}
      ></Cards>
      <Cards
        setStateQuestion={setCard3}
        setStateAnswer={setAnswer3}
        stateQuestion={card3}
        stateAnswer={answer3}
        number={2}
        question={gamedeck[2]}
      ></Cards>
      <Cards
        setStateQuestion={setCard4}
        setStateAnswer={setAnswer4}
        stateQuestion={card4}
        stateAnswer={answer4}
        number={3}
        question={gamedeck[3]}
      ></Cards>
    </ul>
  );
}
