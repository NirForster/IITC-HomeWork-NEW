console.log("hello, world!");

const fs = require("fs");

// Reading from 'file.txt'
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// Writing to 'new.txt'
const contentToWrite = "This is the new content!";
fs.writeFile("new.txt", contentToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});
