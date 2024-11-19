import React, { useEffect, useState } from "react";
import axios from "axios";
import Singlepokemon from "../Singlepokemon/Singlepokemon";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  async function fetchData() {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      console.log(results);
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <Singlepokemon name={pokemon.name} url={pokemon.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Pokedex;
