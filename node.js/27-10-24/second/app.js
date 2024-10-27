const { ifError } = require("assert");
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("file content", data);
});

fs.writeFile("hello.txt", "this is the new text", "utf-8", (err, data) => {
  if (err) {
  }
});
