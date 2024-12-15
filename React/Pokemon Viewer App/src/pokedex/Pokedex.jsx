import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Singlepokemon from "../Singlepokemon/Singlepokemon";
import Pagination from "@mui/material/Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages

  const itemsPerPage = 20; // Number of Pokémon per page

  async function fetchData(page = 1) {
    try {
      const offset = (page - 1) * itemsPerPage; // Calculate offset based on page
      const {
        data: { results, count },
      } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
      );

      setPokemons(results); // Update the Pokémon list
      setTotalPages(Math.ceil(count / itemsPerPage)); // Calculate total pages
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(page); // Fetch data when the page changes
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value); // Update the current page
  };

  const handlePokemonClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.name}`); // Navigate to the Details Page
  };

  return (
    <div>
      <div className="cardsContainer">
        {pokemons.map((pokemon) => (
          <Singlepokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={totalPages} // Total number of pages
          page={page} // Current page
          onChange={handlePageChange} // Handle page change
          color="primary" // Color of the pagination component
        />
      </div>
    </div>
  );
};

export default Pokedex;
