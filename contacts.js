const fs = require('fs');
const path  = require('path');

// console.log(fs);

const contactsPath = path.resolve('db/contacts.json');

fs.readFile(contactsPath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
  }
  console.log(data);
} )

// console.log(contactsPath);

// // TODO: задокументувати кожну функцію
// function listContacts() {
//   // ...твій код
// }

// function getContactById(contactId) {
//   // ...твій код
// }

// function removeContact(contactId) {
//   // ...твій код
// }

// function addContact(name, email, phone) {
//   // ...твій код
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact
// }