import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer as SideMenu, IconButton } from "@mui/material";

const SwipeableDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to toggle drawer

  return (
    <div>
      <IconButton
        color="secondary"
        onClick={() => setDrawerOpen(true)}
        style={{ marginLeft: "10px" }}
      >
        <MenuIcon style={{ fontSize: "50px" }} />
      </IconButton>
      <SideMenu
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
      </SideMenu>
    </div>
  );
};

export default SwipeableDrawer;
