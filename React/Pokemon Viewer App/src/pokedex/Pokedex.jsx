import React, { useEffect, useState } from "react";
import axios from "axios";
import Singlepokemon from "../Singlepokemon/Singlepokemon";
import PokeInfo from "../PokeInfo/PokeInfo";

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
    <div className="cardContainer">
      {pokemons.map((pokemon) => {
        return (
          <div className="card" key={pokemon.name}>
            <PokeInfo name={pokemon.name} url={pokemon.url} />
            <Singlepokemon name={pokemon.name} url={pokemon.url} />
          </div>
        );
      })}
    </div>
  );
};
export default Pokedex;
