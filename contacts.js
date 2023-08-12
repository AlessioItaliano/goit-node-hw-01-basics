const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function read() {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });

  return JSON.parse(data);
}
function write(data) {
  return fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

async function listContacts() {
  const getAllContacts = await read();

  return getAllContacts;
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  const getAllContact = await read();
  const findContactById = getAllContact.find(
    (contact) => contact.id === contactId
  );
  if (!findContactById) {
    console.log("Contact not found");
    return null;
  }
  return findContactById;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  const getAllContact = await read();
  const index = getAllContact.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    console.log("Contact not found");
    return null;
  }

  const newContactBooks = getAllContact.filter(
    (contact) => contact.id !== contactId
  );

  await write(newContactBooks);

  return newContactBooks;
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

removeContact("cce5f8bd-4e90-4012-9556-b3f6c2db1760");

async function addContact(name, email, phone) {
  const getAllContact = await read();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  getAllContact.push(newContact);
  await write(getAllContact);

  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
