import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Mui imports
import { TextField, Avatar, Box } from "@mui/material";

const DUMMY_USERS = [
  {
    id: 1,
    fullName: "Nir Forster",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfRpUqAAbxBtYYiEZKU96WjnZpdXcKO0j0A&s",
  },
  {
    id: 2,
    fullName: "Yosef Sabag",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7JWVsrxr6YTQ0P86wLoRLFSAUmZFQAZ3tw&s",
  },
  {
    id: 3,
    fullName: "Johan Metzgar",
    url: "", // No URL for fallback to initials
  },
];

const getInitial = (fullName) => {
  const nameArray = fullName.split(" ");
  let initials = nameArray[0][0].toUpperCase() + nameArray[1][0].toUpperCase();
  return initials;
};

function App() {
  return (
    <Box>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        {DUMMY_USERS.map((user) => (
          <Box
            key={user.id}
            display="flex"
            alignItems="center"
            gap={2}
            padding={1}
            border="1px solid #ccc"
            borderRadius="8px"
          >
            <Avatar
              src={user.url || undefined}
              sx={{
                bgcolor: "#1976d2", // Fallback background color
                color: "#fff",
                width: 56,
                height: 56,
              }}
            >
              {!user.url && getInitial(user.fullName)}
            </Avatar>
            <p>{user.fullName}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
