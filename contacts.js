const path = require("path");
const fs = require("fs").promises;
const uniqid = require('uniqid'); ;


const contactsPath = path.resolve("db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    console.table(contacts);
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const contact = contacts.find((contact) => contact.id == contactId);
    console.log(contact);
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const newData = JSON.stringify(
      contacts.filter((contact) => String(contact.id) !== String(contactId)),
      null,
      2
    );
    await fs.writeFile(contactsPath, newData);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const contact = { id: uniqid(), name, email, phone };
    const newData = JSON.stringify([...contacts, contact], null, 2);
    await fs.writeFile(contactsPath, newData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
