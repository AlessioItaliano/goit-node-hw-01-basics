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

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listedContacts = await contactsBook.listContacts();
      console.log(listedContacts);
      break;

    case "get":
      const foundContact = await contactsBook.getContactById(id);
      console.log(foundContact);
      break;

    case "add":
      const addedContact = await contactsBook.addContact(name, email, phone);
      console.log(addedContact);
      break;

    case "remove":
      const removedContact = await contactsBook.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({ action: "list" }).then(console.log).catch(console.error);
