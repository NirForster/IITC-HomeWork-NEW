import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../CSS/pokemon.module.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PokeInfo = () => {
  const { name } = useParams(); // Get the Pokémon name from URL
  const [pokemon, setPokemon] = useState(null);
  const [value, setValue] = useState("1");
  const navigate = useNavigate(); // Hook for navigation

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    pokemon && (
      <div className={`infoContainer ${styles[pokemon.types[0].type.name]}`}>
        {/* Back Arrow Button */}
        <IconButton
          color="primary"
          onClick={() => navigate("/")}
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <ArrowBackIcon style={{ fontSize: "40px" }} />
        </IconButton>
        <h1>{name}</h1>
        <img
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={name}
          className="pokemon-gif"
        />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="Pokemon Details Tabs">
              <Tab label="General Info" value="1" />
              <Tab label="Abilities" value="2" />
              <Tab label="Stats" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <li>WEIGHT: {pokemon.weight}</li>
            <li>HEIGHT: {pokemon.height}</li>
            <li>EXP: {pokemon.base_experience}</li>
          </TabPanel>
          <TabPanel value="2">
            <h2>Abilities</h2>
            <ul>
              {pokemon.abilities.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel value="3">
            <h2>Stats</h2>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </TabPanel>
        </TabContext>
      </div>
    )
  );
};

export default PokeInfo;
