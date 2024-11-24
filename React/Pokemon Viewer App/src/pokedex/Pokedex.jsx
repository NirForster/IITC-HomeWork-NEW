import React, { useEffect, useState } from "react";
import axios from "axios";
import Singlepokemon from "../Singlepokemon/Singlepokemon";
import PokeInfo from "../PokeInfo/PokeInfo";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State for selected Pokémon

  async function fetchData() {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=2000`);
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    console.log("Pokemon clicked:", pokemon);
    setSelectedPokemon(pokemon); // Set the selected Pokémon when clicked
  };

  const handleClose = (pokemon) => {
    setSelectedPokemon(null); // Reset the selected Pokémon to close the fullscreen view
    console.log("Pokemon focused:", pokemon);
  };

  return (
    <div className="cardsContainer">
      {pokemons.map((pokemon) => (
        <Singlepokemon
          name={pokemon.name}
          url={pokemon.url}
          onClick={() => handlePokemonClick(pokemon)} // Add onClick handler
        />
      ))}
      {selectedPokemon && (
        <div className="fullscreen">
          <button className="closeButton" onClick={handleClose}>
            Close
          </button>
          <PokeInfo name={selectedPokemon.name} url={selectedPokemon.url} />
        </div>
      )}
    </div>
  );
};

export default Pokedex;
