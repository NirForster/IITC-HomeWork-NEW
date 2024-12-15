import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/CSS/App.css";
import Pokedex from "./pokedex/pokedex";
import PokeInfo from "./PokeInfo/PokeInfo";
import NotFound from "./components/NotFound";
import SwipeableDrawer from "../src/components/SwipeableDrawer";

function App() {
  return (
    <Router>
      <div className="body">
        <div className="top-bar">
          <SwipeableDrawer />
          <img src="../src/assets/image.png" alt="pokemon logo" />
        </div>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<PokeInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
