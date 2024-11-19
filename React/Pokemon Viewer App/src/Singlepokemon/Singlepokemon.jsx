import React, { useState, useEffect } from "react";
import styles from "./Singlepokemon.module.css";
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
      <div className={styles.container}>
        <h1>{name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={name}
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <h2>Abilties</h2>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Singlepokemon;
