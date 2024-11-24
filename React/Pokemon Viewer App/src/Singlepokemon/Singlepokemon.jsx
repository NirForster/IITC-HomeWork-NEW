import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../pokemon.module.css";

const Singlepokemon = ({ name, url, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <button
        onClick={onClick}
        className={`card ${styles[pokemon.types[0].type.name]}`}
        key={pokemon.name}
      >
        <h1>{name}</h1>
        <div className="pokeball">
          <img
            src={pokemon.sprites.front_default}
            alt={name}
            className="static-pokemon-image"
          />
        </div>
        <div>
          <h2>Type</h2>
          <ul>
            {pokemon.types.map(({ type }) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
        </div>
      </button>
    )
  );
};

export default Singlepokemon;
