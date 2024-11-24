import { useState } from "react";
import "./App.css";
import Pokedex from "./pokedex/pokedex";
import { SwipeableDrawer, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to toggle drawer

  return (
    <>
      <div className="body">
        <div className="top-bar">
          <IconButton
            color="secondary"
            onClick={() => alert("Arrow Button Clicked!")} // Add your custom functionality here
            style={{ marginLeft: "10px" }}
          >
            <ArrowForwardIcon style={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => setDrawerOpen(true)}
            style={{ marginLeft: "10px" }}
          >
            <MenuIcon style={{ fontSize: "50px" }} />
          </IconButton>
        </div>

        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <div style={{ width: "250px", padding: "20px" }}>
            <h2>Menu</h2>
            <ul>
              <li onClick={() => setDrawerOpen(false)}>Option 1</li>
              <li onClick={() => setDrawerOpen(false)}>Option 2</li>
              <li onClick={() => setDrawerOpen(false)}>Option 3</li>
            </ul>
          </div>
        </SwipeableDrawer>

        <h1 id="page-header">Pokedex</h1>
        <Pokedex />
      </div>
    </>
  );
}

export default App;
