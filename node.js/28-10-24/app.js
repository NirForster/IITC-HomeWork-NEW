import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let jokes = {
  jokes: [
    {
      id: 1,
      type: "general",
      setup: "Why don't skeletons fight?",
      punchline: "They don't have the guts.",
    },
    {
      id: 2,
      type: "programming",
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs.",
    },
  ],
};

let users = {
  users: [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      age: 28,
      isAdmin: true,
    },
    { id: 2, name: "Bob", email: "bob@example.com", age: 35, isAdmin: false },
  ],
};

let products = {
  products: [
    {
      id: 101,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      inStock: true,
    },
    {
      id: 102,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 79.99,
      inStock: false,
    },
  ],
};

// get all jokes
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

// GET request for a random joke
app.get("/api/jokes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.jokes.length);
  const randomJoke = jokes.jokes[randomIndex];
  res.send(randomJoke);
});

// GET request for a random user
app.get("/api/users/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.users.length);
  const randomUser = users.users[randomIndex];
  res.send(randomUser);
});

// GET request for a random product
app.get("/api/products/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * products.products.length);
  const randomProduct = products.products[randomIndex];
  res.send(randomProduct);
});

// POST route to add a new joke
app.post("/api/jokes", (req, res) => {
  const newJoke = req.body;
  jokes.jokes.push(newJoke);
  res.status(201).send({ message: "Joke added", joke: newJoke });
});

// POST route to add a new user
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.users.push(newUser);
  res.status(201).send({ message: "User added", user: newUser });
});

// POST route to add a new product
app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  products.products.push(newProduct);
  res.status(201).send({ message: "Product added", product: newProduct });
});

// Health check route
app.get("/api/status", (req, res) => {
  res.send({ message: "server is up" });
});

// Simple hello world route
app.get("/hello", (req, res) => {
  res.send({ something: "hello world" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
