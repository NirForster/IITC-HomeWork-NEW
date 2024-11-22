import { useState } from "react";
import "./App.css";
import Pokedex from "./pokedex/pokedex";

function App() {
  const [isVisible, setisVisible] = useState(false);

  return (
    <>
      <div className="body">
        {!isVisible && (
          <button onClick={() => setisVisible(!isVisible)}>
            click to enter
          </button>
        )}
        {isVisible && <Pokedex />}
      </div>
    </>
  );
}

export default App;
