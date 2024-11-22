import React, { useState } from "react";

const Visible = () => {
  return (
    <div>
      <h1 className="page-title">My PokéDex</h1>
      {!isVisible && (
        <button className="page-title" onClick={() => setisVisible(!isVisible)}>
          click to enter
        </button>
      )}
      {isVisible && <Pokemons />}
    </div>
  );
};

export default Visible;
