const fs = require("fs");
const path = require("path");
// import path from "path";
// import fs from "fs";

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin, // input from standard stream
//   output: process.stdout, // output to standard stream
// });

fs.readFile(path.resolve(__dirname, "db/contacts.json"), (err, data) => {
  if (!err) {
    const sringData = data.toString();
    const contacts = JSON.parse(sringData);
    console.log(contacts);
  }
  if (err) {
    console.error();
  }
});
/*
 * Uncomment and write down the value
 * const contactsPath = ;
 */

// TODO: document each function
function listContacts() {
  // ...your code
}

function getContactById(contactId) {
  // ...your code
}

function removeContact(contactId) {
  // ...your code
}

function addContact(name, email, phone) {
  // ...your code
}
