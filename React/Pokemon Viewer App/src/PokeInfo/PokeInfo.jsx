import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeInfo = ({ name, url }) => {
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
      <div className="infoContainer">
        <h1>info about {name}</h1>
        <img
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={name}
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <h2>Ability</h2>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
          <h2>Stats</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <ul>weight {pokemon.weight}</ul>
          <ul>height {pokemon.height}</ul>
          <ul>exp {pokemon.base_experience}</ul>
        </div>
      </div>
    )
  );
};

export default PokeInfo;
