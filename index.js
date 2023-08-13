const contactsBook = require("./contacts.js");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listedContacts = await contactsBook.listContacts();
      return console.table(listedContacts);

    case "get":
      const foundContact = await contactsBook.getContactById(id);
      return console.log(foundContact);

    case "add":
      const addedContact = await contactsBook.addContact(name, email, phone);
      return console.log(addedContact);

    case "remove":
      const removedContact = await contactsBook.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
