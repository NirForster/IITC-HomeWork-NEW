import express from "express";

const app = express();

const PORT = 3000;

const jokes = {
  jokes: [
    {
      id: 1,
      type: "general",
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts.",
    },
    {
      id: 2,
      type: "programming",
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs.",
    },
    {
      id: 3,
      type: "general",
      setup: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese!",
    },
    {
      id: 4,
      type: "programming",
      setup: "How many programmers does it take to change a light bulb?",
      punchline: "None. It’s a hardware problem.",
    },
    {
      id: 5,
      type: "dad",
      setup: "Why can't a nose be 12 inches long?",
      punchline: "Because then it would be a foot.",
    },
  ],
};

const users = {
  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      isAdmin: true,
      address: {
        street: "123 Maple Street",
        city: "Springfield",
        state: "IL",
        postalCode: "62704",
      },
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 35,
      isAdmin: false,
      address: {
        street: "456 Oak Street",
        city: "Lincoln",
        state: "NE",
        postalCode: "68501",
      },
    },
  ],
};

const products = {
  products: [
    {
      id: 101,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      inStock: true,
      details: {
        brand: "Logitech",
        model: "M325",
        warranty: "1 year",
      },
    },
    {
      id: 102,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 79.99,
      inStock: false,
      details: {
        brand: "Razer",
        model: "BlackWidow",
        warranty: "2 years",
      },
    },
  ],
};

app.get("/hello", (req, res) => {
  res.send({
    something: "hello world",
  });
});

app.get("/api/status", (req, res) => {
  res.send({
    message: "server is up",
  });
});

app.get("/api/jokes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.jokes.length);
  const randomJoke = jokes.jokes[randomIndex];
  res.send(randomJoke);
});

app.get("/api/users/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.users.length);
  const randomUser = users.users[randomIndex];
  res.send(randomUser);
});

app.get("/api/products/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * products.products.length);
  const randomProducts = products.products[randomIndex];
  res.send(randomProducts);
});

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
