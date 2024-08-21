const express = require("express");
const app = express();

// fake-database.js

const contact = {
  Email: "nirforster@gmail.com",
  PhoneNumber: "0503503510",
};

const products = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Smartphone", price: 800 },
  { id: "3", name: "Headphones", price: 150 },
  { id: "4", name: "Keyboard", price: 75 },
  { id: "5", name: "Monitor", price: 300 },
];

function getProducts() {
  return products;
}

function getProductById(id) {
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
    }
    return product;
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
  res.send("This server was created by Nir Forster");
});

app.get("/contact", (req, res) => {
  res.json(contact);
});

app.get("/api/products", (req, res) => {
  res.send(getProducts());
});

app.get("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
    }
  }
  if (product === null) {
    res.send("product not found");
  } else res.json(product);
});

app.listen(3000, () => {
  console.log("server os running on http://localhost:3000");
});
