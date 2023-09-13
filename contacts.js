const { error } = require("console");
const fs = require("fs");
const path = require("path");
// import path from "path";
// import fs from "fs";

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin, // input from standard stream
//   output: process.stdout, // output to standard stream
// });

/*
 * Uncomment and write down the value
 * const contactsPath = ;
 */

// TODO: document each function
function listContacts() {
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
}

function getContactById(contactId) {
  fs.readFile(path.resolve(__dirname, "db/contacts.json"), (error, data) => {
    if (!error) {
      const sringData = data.toString();
      const contacts = JSON.parse(sringData);
      contacts.map((contact) => {
        if (contact.id === contactId) {
          console.log(contact);
        }
      });
    }
    if (error) {
      console.error();
    }
  });
}

function removeContact(contactId) {
  fs.readFile(path.resolve(__dirname, "db/contacts.json"), (error, data) => {
    if (!error) {
      const stringData = data.toString();
      const contacts = JSON.parse(stringData);
      contacts.map((contact) => {
        if (contact.id === contactId) {
          console.log("The contact to be remove", contact);
          console.log("_____________________");
          contacts.splice(contacts.indexOf(contact), 1);
          console.log(contacts);
        }
      });
    }
    if (error) {
      console.error();
    }
  });
}

function addContact(id, name, email, phone) {
  fs.readFile(path.resolve(__dirname, "db/contacts.json"), (error, data) => {
    if (!error) {
      const dataToString = data.toString();
      const contacts = JSON.parse(dataToString);

      contacts.push({ id: id, name: name, email: email, phone: phone });
      console.log(contacts);
    }
    if (error) {
      console.error();
    }
  });
}
addContact("asdsadasdasdasd", "Arek", "areraak@asdasd", "231412413");
