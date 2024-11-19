import { useState } from "react";
import "./App.css";
import Pokedex from "./pokedex/pokedex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body">
        <div className="CardsContainer">
          <Pokedex />
        </div>
      </div>
    </>
  );
}

export default App;
