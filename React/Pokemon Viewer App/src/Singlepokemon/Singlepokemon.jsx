import React, { useState, useEffect } from "react";
import axios from "axios";

const Singlepokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div>
        <h1>{name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={name}
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <h2>Type</h2>
          <ul>
            {pokemon.types.map(({ type }) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Singlepokemon;
