// const { error } = require("console");

// const fs = require("fs").promises;

// fs.readFile("contact.js", (error, content) => {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   console.log(content.toString());
// });

// (async () => {
//   const buffer = await fs.readFile("text.txt");

//   await fs.appendFile("text.txt", " nowy text");
//   console.log(buffer.toString());
//   //   await fs.writeFile("text.txt", "test");
//   const ost = await fs.readFile("text.txt");
//   console.log(ost.toString());
// })();

// import readline from "node:readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stndout,
// });
//  console.log("ASdasdasd")

// const fs = require("fs");
// const path = require("path");
// fs.readFile(path.resolve(__dirname, "contacts.json"), (error, data) => {
//   if (error) {
//     console.error();
//   }

//   const sringData = data.toString();
//   const contacts = JSON.parse(sringData);
//   console.log(contacts);
// });
