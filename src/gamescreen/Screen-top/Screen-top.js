import Cardtable from "./Cards/Cardtable";
import Header from "./Header/Header";

export default function Screentop({ setState }) {
  return (
    <div>
      <Header />
      <Cardtable setState={setState} />
    </div>
  );
}
