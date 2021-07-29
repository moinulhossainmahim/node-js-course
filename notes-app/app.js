const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

//customize yargs version
yargs.version('1.5.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: "This is add note's body",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove the note',
  builder: {
    title: {
      describe: 'remove note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: 'list',
  describe: 'List of note',
  handler() {
    console.log('here the list of items');
  },
});

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read the list',
  handler() {
    console.log('Reading the list of notes');
  },
});

yargs.parse();
// console.log(yargs.argv);
