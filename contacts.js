const { error, table } = require("console");
const fs = require("fs/promises");
const path = require("path");
require("colors");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
  } catch (error) {
    console.error("Error listing contacts:", error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const findContact = contacts.find((contact) => contact.id === contactId);
    if (findContact === undefined) {
      console.log(`There is no contact with ID= ${contactId}`.red);
    } else {
      console.table(findContact);
    }
  } catch (err) {
    console.error("error");
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    contacts.map((contact) => {
      if (contact.id === contactId) {
        console.log("The contact to be remove".red, contact);
        console.log("_____________________");
        contacts.splice(contacts.indexOf(contact), 1);
      }
    });
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.table(contacts);
  } catch (err) {
    console.error("error");
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    const newContact = {
      id: phone + name,
      name: name,
      email: email,
      phone: phone,
    };
    const findContact = contacts.find(
      (contact) =>
        contact.name === name ||
        contact.email === email ||
        contact.phone === phone
    );

    if (findContact === undefined) {
      contacts.push(newContact);
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
      console.table(contacts);
    } else {
      console.log(`There is alredy contact with the same data `.red);
    }
  } catch (error) {
    console.error("error");
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
