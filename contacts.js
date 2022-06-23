const path = require("path");
const fs = require("fs").promises;
const uniqid = require('uniqid'); ;


const contactsPath = path.resolve("db/contacts.json");

// fs.readFile(contactsPath, 'utf-8', (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// } )

// console.log(contactsPath);


// async () => {
//   try {
//     const data = await fs.readFile(contactsPath, "utf-8");
//     const contacts = JSON.parse(data.toString());
//     console.table(contacts);
//   } catch (error) {
//     console.error(error);
//   }
// };

// TODO: задокументувати кожну функцію

// function listContacts() {
//   fs.readFile(contactsPath)
//     .then((data) => {
//       const contacts = JSON.parse(data.toString());
//       console.table(contacts);
//     })
//     .catch((error) => console.error(error));
// }

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    console.table(contacts);
  } catch (error) {
    console.error(error);
  }
}

// function getContactById(contactId) {
//   fs.readFile(contactsPath)
//     .then((data) => {
//       const contacts = JSON.parse(data.toString());
//       const contact = contacts.find((contact) => contact.id == contactId);
//       console.log(contact);
//       console.log(fs);
//     })
//     .catch((error) => console.error(error));
// }

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

// function removeContact(contactId) {
//   fs.readFile(contactsPath)
//     .then((data) => {
//       const contacts = JSON.parse(data.toString());
//       const newData = contacts.filter(
//         (contact) => Number(contact.id) !== contactId
//       );

//       fs.writeFile(contactsPath, newData, "utf-8");
//       // console.log(newData);
//     })
//     .catch((error) => console.error(error));

//   // console.log("remove contact " + contactId);
// }

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const newData = JSON.stringify(
      contacts.filter((contact) => Number(contact.id) !== contactId),
      null,
      2
    );
    await fs.writeFile("db/contacts2.json", newData);
  } catch (error) {
    console.log(error);
  }
}

// function addContact(name, email, phone) {
//   console.log("add contact " + name + email + phone);
// }

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const contact = { id: uniqid(), name, email, phone };
    const newData = JSON.stringify([...contacts, contact], null, 2);
    // console.log(newData);
    await fs.writeFile("db/contacts2.json", newData);
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
