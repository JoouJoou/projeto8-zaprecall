import Cardtable from "./Cards/Cardtable";
import Header from "./Header/Header";

export default function Screentop({ setState, state }) {
  return (
    <div>
      <Header />
      <Cardtable setState={setState} state={state} />
    </div>
  );
}
